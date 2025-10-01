/* properties.js - data/config for Home Creators Hurghada */
window.SITE_CONFIG = { defaultLang: "de", currency: "EUR" };

window.CONTACTS = [
  { name: "Barbara Hauser",    email: "home@hchurghada.com", phone: "+20 150 330 5778", languages: ["DE","EN","PL"], whatsapp: true },
  { name: "Tatiana Tokarczyk", email: "home@hchurghada.com", phone: "+48 530 425 550",  languages: ["EN","PL"], whatsapp: true },
  { name: "Katarzyna Wieczorek", email: "home@hchurghada.com", phone: "+48 508 479 121", languages: ["EN","PL"], whatsapp: true }
];

/* PROPERTIES: id:number, slug:string, title:string, priceEUR:number, location:string, type:string, rooms:number, size:number, status:"available"|"reserved"|"sold", image:string, gallery:string[], description:string */
window.PROPERTIES = [
  {
    id: 1,
    slug: "sea-view-apartment-el-gouna",
    title: "Luxurious Sea View Apartment, El Gouna",
    priceEUR: 285000,
    location: "El Gouna",
    type: "Apartment",
    rooms: 3,
    size: 120,
    status: "available",
    image: "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Modern apartment with panoramic sea views, large terrace and premium finishes. Close to marinas and restaurants."
  },
  {
    id: 2,
    slug: "villa-pool-sahl-hasheesh",
    title: "Private Villa with Pool, Sahl Hasheesh",
    priceEUR: 520000,
    location: "Sahl Hasheesh",
    type: "Villa",
    rooms: 4,
    size: 220,
    status: "reserved",
    image: "https://images.unsplash.com/photo-1505692952041-5a6a3b7a2f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505692952041-5a6a3b7a2f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Spacious villa with private pool and garden, ideal for families or rental investment. Gated community."
  },
  {
    id: 3,
    slug: "modern-studio-hurghada-mamsha",
    title: "Modern Studio on Mamsha, Hurghada",
    priceEUR: 95000,
    location: "Mamsha",
    type: "Studio",
    rooms: 1,
    size: 45,
    status: "available",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Compact, fully furnished studio steps from the promenade. Great rental potential."
  },
  {
    id: 4,
    slug: "family-apartment-old-sheraton",
    title: "Family Apartment, Old Sheraton",
    priceEUR: 175000,
    location: "Old Sheraton",
    type: "Apartment",
    rooms: 3,
    size: 110,
    status: "sold",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Well-located family apartment with balcony and community pool. Sold but kept for archive/demonstration."
  },
  {
    id: 5,
    slug: "luxury-penthouse-intercontinental",
    title: "Luxury Penthouse, Intercontinental Area",
    priceEUR: 720000,
    location: "Intercontinental",
    type: "Penthouse",
    rooms: 5,
    size: 350,
    status: "available",
    image: "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Exclusive penthouse with private roof terrace and panoramic views. High-end finishes."
  },
  {
    id: 6,
    slug: "beachfront-apartment-old-kawther",
    title: "Beachfront Apartment, Old Kawther",
    priceEUR: 240000,
    location: "Old Kawther",
    type: "Apartment",
    rooms: 2,
    size: 85,
    status: "available",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Direct beach access, modern renovation, excellent rental occupancy."
  },
  {
    id: 7,
    slug: "garden-villa-arabia",
    title: "Garden Villa, Arabia District",
    priceEUR: 330000,
    location: "Arabia",
    type: "Villa",
    rooms: 4,
    size: 200,
    status: "reserved",
    image: "https://images.unsplash.com/photo-1505692952041-5a6a3b7a2f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505692952041-5a6a3b7a2f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Comfortable villa with private garden, shaded terraces and good access to services."
  },
  {
    id: 8,
    slug: "sea-side-studio-el-gouna",
    title: "Sea-side Studio, El Gouna Marina",
    priceEUR: 110000,
    location: "El Gouna",
    type: "Studio",
    rooms: 1,
    size: 50,
    status: "available",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Cozy studio near the marina, ideal for holiday rentals."
  },
  {
    id: 9,
    slug: "lux-resort-apartment-sahl-hasheesh",
    title: "Resort Apartment, Sahl Hasheesh",
    priceEUR: 199000,
    location: "Sahl Hasheesh",
    type: "Apartment",
    rooms: 2,
    size: 98,
    status: "available",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "Apartment inside an upscale resort complex with access to facilities and beach."
  },
  {
    id: 10,
    slug: "seafront-apartment-al-ahyaa",
    title: "Seafront Apartment, Al Ahyaa",
    priceEUR: 265000,
    location: "Al Ahyaa",
    type: "Apartment",
    rooms: 3,
    size: 130,
    status: "available",
    image: "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691723518-36a58f3a7b4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=1600&q=80"
    ],
    description: "High-floor apartment with balcony facing the sea. Modern kitchen and finishes."
  }
];
