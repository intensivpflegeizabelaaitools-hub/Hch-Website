/* app.js - shared JavaScript: i18n, helpers, UI, formatters */
(function(){
  // Helpers
  function qs(sel,ctx){return (ctx||document).querySelector(sel)}
  function qsa(sel,ctx){return Array.from((ctx||document).querySelectorAll(sel))}
  function debounce(fn,wait){let t;return function(...a){clearTimeout(t);t=setTimeout(()=>fn.apply(this,a),wait)}}
  function fmtEUR(n,lang){try{return new Intl.NumberFormat(lang,{style:'currency',currency:window.SITE_CONFIG.currency,maximumFractionDigits:0}).format(n)}catch(e){return n+" €"}}
  function phoneToDigits(phone){return phone.replace(/[^0-9+]/g,'')}
  function parseQuery(){return Object.fromEntries(new URLSearchParams(location.search))}
  function updateQuery(params){const url=new URL(location.href);Object.keys(params).forEach(k=>{if(params[k]===undefined||params[k]==='')url.searchParams.delete(k);else url.searchParams.set(k,params[k])});history.replaceState({},'',url)}

  // i18n dictionaries (more complete)
  const DICT = {
    de: {
      home: 'Startseite', properties: 'Miet/Verkauf', services: 'Unsere Leistungen', tours: 'Touren', contact: 'Kontakt',
      hero_title: 'Home Creators Hurghada — Ihr Partner in Hurghada', hero_lead: 'Exklusive Immobilien & persönliche Betreuung vor Ort.',
      view_list: 'Angebote ansehen', show_more: 'Mehr laden', no_results: 'Keine Angebote',
      contact_us: 'Kontaktieren', send_inquiry: 'Anfrage senden',
      services_heading: 'Unser Angebot', tours_heading: 'Geführte Touren', contact_heading: 'Kontakt',
      service_sel: 'Preselektion', service_tour: 'Video‑Touren', service_legal: 'Rechtshilfe', service_keys: 'Schlüsselübergabe', service_mgmt: 'Vermietungsmanagement',
      filters_location: 'Lokalizacja', filters_type: 'Typ', filters_rooms: 'Pokoje min', filters_min: 'Min cena', filters_max: 'Max cena', filters_status: 'Status',
      sort_price: 'Sort: Preis ↑', results_count: '{count} Angebote', load_more: 'Pokaż więcej', status_available: 'available', status_reserved: 'reserved', status_sold: 'sold',
      not_found: 'Brak oferty. Zurück zur Liste', map: 'Karte', similar: 'Ähnliche Angebote'
    },
    en: {
      home: 'Home', properties: 'Properties', services: 'Our Services', tours: 'Tours', contact: 'Contact',
      hero_title: 'Home Creators Hurghada — Your local partner', hero_lead: 'Exclusive properties & personal support on site.',
      view_list: 'View listings', show_more: 'Show more', no_results: 'No listings',
      contact_us: 'Contact us', send_inquiry: 'Send inquiry',
      services_heading: 'Our Services', tours_heading: 'Tours', contact_heading: 'Contact',
      service_sel: 'Pre-selection', service_tour: 'Video tours', service_legal: 'Legal support', service_keys: 'Key handover', service_mgmt: 'Rental management',
      filters_location: 'Location', filters_type: 'Type', filters_rooms: 'Min rooms', filters_min: 'Min price', filters_max: 'Max price', filters_status: 'Status',
      sort_price: 'Sort: price ↑', results_count: '{count} listings', load_more: 'Show more', status_available: 'available', status_reserved: 'reserved', status_sold: 'sold',
      not_found: 'No listing found. Back to list', map: 'Map', similar: 'Similar listings'
    },
    pl: {
      home: 'Strona główna', properties: 'Mieszkania na sprzedaż', services: 'Zakres usług', tours: 'Wycieczki', contact: 'Kontakt',
      hero_title: 'Home Creators Hurghada — Twój partner w Hurghadzie', hero_lead: 'Ekskluzywne nieruchomości i wsparcie lokalne.',
      view_list: 'Zobacz oferty', show_more: 'Pokaż więcej', no_results: 'Brak ofert',
      contact_us: 'Skontaktuj się', send_inquiry: 'Wyślij zapytanie',
      services_heading: 'Zakres naszych usług', tours_heading: 'Wycieczki', contact_heading: 'Kontakt',
      service_sel: 'Preselekcja', service_tour: 'Video‑tury', service_legal: 'Wsparcie prawne', service_keys: 'Odbiór kluczy', service_mgmt: 'Zarządzanie najmem',
      filters_location: 'Lokalizacja', filters_type: 'Typ', filters_rooms: 'Pokoje min', filters_min: 'Min cena', filters_max: 'Max cena', filters_status: 'Status',
      sort_price: 'Sort: cena ↑', results_count: '{count} ofert', load_more: 'Pokaż więcej', status_available: 'available', status_reserved: 'reserved', status_sold: 'sold',
      not_found: 'Brak oferty. Powrót do listy', map: 'Mapa', similar: 'Podobne oferty'
    }
  };

  function t(key, vars){const lang = getLang(); let s = (DICT[lang] && DICT[lang][key]) || (DICT['de'] && DICT['de'][key]) || key; if(vars) Object.keys(vars).forEach(k=>{s = s.replace('{'+k+'}', vars[k])}); return s}

  function setLang(lang){if(!DICT[lang])lang=window.SITE_CONFIG.defaultLang||'de';localStorage.setItem('hch_lang',lang);document.documentElement.lang=lang;applyI18n();}
  function getLang(){return localStorage.getItem('hch_lang')||window.SITE_CONFIG.defaultLang||'de'}
  function applyI18n(){const lang=getLang();qsa('[data-i18n]').forEach(el=>{const key=el.getAttribute('data-i18n');if(!key) return;const attr = el.getAttribute('data-i18n-attr'); const txt = t(key); if(attr){el.setAttribute(attr, txt)} else {el.textContent = txt}});
    // update active lang chip
    qsa('.lang-chip').forEach(ch=>{ch.classList.toggle('active',ch.dataset.lang===lang)})
  }

  // Header sticky
  function handleScroll(){const h=document.querySelector('header.site-header');if(!h) return;h.classList.toggle('scrolled',window.scrollY>10)}

  // On-scroll reveal
  function initReveal(){const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('reveal');})},{threshold:0.08});qsa('.reveal-on-scroll').forEach(el=>obs.observe(el))}

  // LIGHTBOX (keyboard + touch)
  let lb = null;
  function createLightbox(){
    if(lb) return lb;
    const overlay = document.createElement('div'); overlay.className='lightbox'; overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-modal','true'); overlay.tabIndex = -1;
    overlay.innerHTML = `
      <button class="lb-close" aria-label="Close">✕</button>
      <button class="lb-prev" aria-label="Previous">‹</button>
      <div class="lb-stage" tabindex="0"></div>
      <button class="lb-next" aria-label="Next">›</button>
    `;
    document.body.appendChild(overlay);
    lb = {overlay,stage:overlay.querySelector('.lb-stage'),btnClose:overlay.querySelector('.lb-close'),btnPrev:overlay.querySelector('.lb-prev'),btnNext:overlay.querySelector('.lb-next'),images:[],index:0};

    function show(){overlay.style.display='flex'; overlay.focus();}
    function hide(){overlay.style.display='none';}

    lb.showImage = function(i){if(!lb.images.length) return; lb.index = (i+lb.images.length)%lb.images.length; lb.stage.innerHTML = `<img src="${lb.images[lb.index]}" alt="" />`;}
    lb.open = function(images, startIndex){lb.images = images.slice(); lb.showImage(startIndex||0); show();}
    lb.close = function(){hide();}
    lb.next = function(){lb.showImage(lb.index+1)}
    lb.prev = function(){lb.showImage(lb.index-1)}

    // keyboard
    overlay.addEventListener('keydown', (e)=>{
      if(e.key==='Escape') lb.close();
      if(e.key==='ArrowRight') lb.next();
      if(e.key==='ArrowLeft') lb.prev();
      // trap tab inside overlay
      if(e.key==='Tab'){e.stopPropagation();}
    });

    lb.btnClose.addEventListener('click', ()=>lb.close());
    lb.btnNext.addEventListener('click', ()=>lb.next());
    lb.btnPrev.addEventListener('click', ()=>lb.prev());

    // touch swipe
    let sx=0, sy=0; overlay.addEventListener('touchstart', (ev)=>{const t=ev.changedTouches[0]; sx=t.clientX; sy=t.clientY});
    overlay.addEventListener('touchend', (ev)=>{const t=ev.changedTouches[0]; const dx=t.clientX-sx; const dy=t.clientY-sy; if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)){ if(dx<0) lb.next(); else lb.prev(); }});

    hide();
    return lb;
  }

  function openLightbox(images, startIndex){createLightbox().open(images,startIndex||0)}
  function closeLightbox(){if(lb) lb.close()}

  // Expose App
  window.App = { qs, qsa, debounce, fmtEUR, phoneToDigits, parseQuery, updateQuery, setLang, getLang, DICT, t, openLightbox, closeLightbox };

  // Boot
  document.addEventListener('DOMContentLoaded',()=>{
    const lang = getLang(); document.documentElement.lang = lang; applyI18n();
    qsa('.lang-chip').forEach(ch=>{ch.addEventListener('click',()=>{setLang(ch.dataset.lang)})});
    handleScroll(); window.addEventListener('scroll',handleScroll,{passive:true});
    initReveal();
  });

})();
