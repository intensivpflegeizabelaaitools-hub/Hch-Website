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

  // i18n dictionaries
  const DICT = {
    de: {
      home: 'Startseite', properties: 'Miet/Verkauf', services: 'Unsere Leistungen', tours: 'Touren', contact: 'Kontakt',
      hero_title: 'Home Creators Hurghada — Ihr Partner in Hurghada', hero_lead: 'Exklusive Immobilien & persönliche Betreuung vor Ort.',
      view_list: 'Angebote ansehen', show_more: 'Mehr laden', no_results: 'Keine Angebote',
      contact_us: 'Kontaktieren', send_inquiry: 'Wyślij zapytanie'
    },
    en: {
      home: 'Home', properties: 'Properties', services: 'Our Services', tours: 'Tours', contact: 'Contact',
      hero_title: 'Home Creators Hurghada — Your local partner', hero_lead: 'Exclusive properties & personal support on site.',
      view_list: 'View listings', show_more: 'Show more', no_results: 'No listings',
      contact_us: 'Contact us', send_inquiry: 'Send inquiry'
    },
    pl: {
      home: 'Strona główna', properties: 'Mieszkania na sprzedaż', services: 'Zakres usług', tours: 'Wycieczki', contact: 'Kontakt',
      hero_title: 'Home Creators Hurghada — Twój partner w Hurghadzie', hero_lead: 'Ekskluzywne nieruchomości i wsparcie lokalne.',
      view_list: 'Zobacz oferty', show_more: 'Pokaż więcej', no_results: 'Brak ofert',
      contact_us: 'Skontaktuj się', send_inquiry: 'Wyślij zapytanie'
    }
  };

  function setLang(lang){if(!DICT[lang])lang=window.SITE_CONFIG.defaultLang||'de';localStorage.setItem('hch_lang',lang);document.documentElement.lang=lang;applyI18n();}
  function getLang(){return localStorage.getItem('hch_lang')||window.SITE_CONFIG.defaultLang||'de'}
  function applyI18n(){const lang=getLang();qsa('[data-i18n]').forEach(el=>{const key=el.getAttribute('data-i18n');if(!key) return;const txt=(DICT[lang]&&DICT[lang][key])||key;el.textContent=txt});
    // update active lang chip
    qsa('.lang-chip').forEach(ch=>{ch.classList.toggle('active',ch.dataset.lang===lang)})
  }

  // Header sticky
  function handleScroll(){const h=document.querySelector('header.site-header');if(!h) return;h.classList.toggle('scrolled',window.scrollY>10)}

  // On-scroll reveal
  function initReveal(){const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('reveal');})},{threshold:0.08});qsa('.reveal-on-scroll').forEach(el=>obs.observe(el))}

  // Expose App
  window.App = { qs, qsa, debounce, fmtEUR, phoneToDigits, parseQuery, updateQuery, setLang, getLang, DICT };

  // Boot
  document.addEventListener('DOMContentLoaded',()=>{
    // apply lang from storage or default
    const lang = getLang(); document.documentElement.lang = lang; applyI18n();
    // link lang chips
    qsa('.lang-chip').forEach(ch=>{ch.addEventListener('click',()=>{setLang(ch.dataset.lang)})});
    // scroll
    handleScroll(); window.addEventListener('scroll',handleScroll,{passive:true});
    // reveal
    initReveal();
  });

})();
