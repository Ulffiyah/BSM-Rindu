export const APP_CONFIG = {
  name: "BSN Rindu Al Ihya",
  tagline: "Eco-Pesantren & Rumah Inovasi",
  description: "BSN Rindu Al Ihya adalah inisiatif pengelolaan limbah berbasis pesantren yang memberdayakan santri untuk mengolah sampah menjadi produk bernilai guna dan inovatif.",
  contact: {
    address: "Komp. Pondok Pesantren Al-Ihya, Kelurahan Karta, Kec. Demang, Jawa Barat",
    phone: "+62 821-xxxx-xxxx",
    email: "pesantren@bsm-rindu.id",
    instagram: "@bsmrindu_alihya",
  }
};

export const STATISTICS = [
  { label: "Santri Kreatif", value: "850+", icon: "Users" },
  { label: "Sampah Pesantren (Kg)", value: "25,000+", icon: "Trash2" },
  { label: "Produk Santri", value: "120+", icon: "Lightbulb" },
  { label: "Sertifikat Edukasi", value: "450+", icon: "Award" },
];

export const EDUCATION_CLASSES = [
  {
    title: "Budidaya Maggot BSF",
    schedule: "Setiap Kamis Sore",
    desc: "Pelatihan intensif mengolah limbah organik kantin pesantren menggunakan larva Black Soldier Fly menjadi pakan ternak berkualitas.",
    mentor: "Tim Bio-Ihya",
    category: "Eco-Tech",
    price: 50000,
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Daur Ulang Limbah Kreatif",
    schedule: "Jumat Berkah",
    desc: "Mengubah limbah anorganik (plastik & kain) menjadi produk bernilai seni tinggi seperti tas kitab, sajadah travel, dan dekorasi asrama.",
    mentor: "Rumah Kreasi Rindu",
    category: "Workshop",
    price: 35000,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Fiqih Lingkungan (Ekologi)",
    schedule: "Kajian Rutin Sabtu",
    desc: "Bedah kitab dan pemahaman mendalam tentang kewajiban menjaga alam dalam perspektif hukum Islam untuk santri milenial.",
    mentor: "K.H. Ihya Ulumudin",
    category: "Kajian",
    price: 0,
    image: "https://images.unsplash.com/photo-1540914120281-17c2a2b34914?auto=format&fit=crop&q=80&w=600"
  }
];

export const WASTE_PRICES = [
  { category: "Plastik & Kertas", items: [
    { name: "Botol Minum Santri", price: 3500, unit: "kg" },
    { name: "Kardus Kitab/Buku", price: 2500, unit: "kg" },
    { name: "Plastik Kemasan", price: 1500, unit: "kg" },
  ]},
  { category: "Limbah Dapur", items: [
    { name: "Sisa Makanan Kantin", price: 0, unit: "kg (Compost)" },
    { name: "Minyak Jelantah", price: 5000, unit: "liter" },
  ]},
];

export const SERVICES = [
  {
    title: "Eco-Pesantren",
    description: "Sistem pengumpulan sampah sistematis dari setiap asrama dan kantin pesantren untuk menciptakan lingkungan belajar yang bersih dan asri.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Workshop Santri",
    description: "Pusat pelatihan bagi santri untuk belajar teknik daur ulang inovatif, mengubah limbah menjadi fasilitas pendukung pesantren.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Produk Berkah",
    description: "Galeri produk daur ulang karya santri, mulai dari perabotan asrama hingga pupuk organik untuk kebun pesantren.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800",
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Tas Kitab Santriwati",
    price: 45000,
    image: "https://images.unsplash.com/photo-1591193680689-d4e5d6d510d9?auto=format&fit=crop&q=80&w=400",
    desc: "Tas ramah lingkungan dari kain perca asrama."
  },
  {
    id: 2,
    name: "Lampu Hias Residu",
    price: 125000,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400",
    desc: "Estetika tinggi dari kristal plastik olahan."
  },
  {
    id: 3,
    name: "Maggot Kering (Super Feed)",
    price: 15000,
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=400",
    desc: "Pakan ternak tinggi protein hasil olahan limbah organik asrama."
  },
  {
    id: 4,
    name: "Pupuk Organik Cair 1L",
    price: 15000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    desc: "Nutrisi alami dari pengolahan limbah kantin pesantren."
  }
];

export const NEWS = [
  {
    id: 1,
    title: "Workshop Maggot Al-Ihya Sukses Digelar",
    date: "25 Apr 2024",
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lebih dari 100 santri antusias mengikuti pelatihan budidaya maggot BSF sebagai solusi limbah."
  },
  {
    id: 2,
    title: "Ekspor Kriya Residu ke Luar Kota",
    date: "20 Apr 2024",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=600",
    excerpt: "Produk kriya hasil tangan santri mulai diminati pasar luar kota sebagai souvenir ramah lingkungan."
  }
];

export const MATERIALS = [
  {
    id: 1,
    title: "E-Book: Panduan Pemilahan Sampah Pesantren",
    type: "PDF",
    size: "2.4 MB"
  },
  {
    id: 2,
    title: "Video Tutorial: Membuat Kompos Takakura",
    type: "Video",
    size: "15:30"
  }
];

export const INNOVATIONS = [
  { name: "Bangku Santri Recycled", desc: "Perabotan kuat dari olahan plastik residu asrama." },
  { name: "Pupuk Organik Al-Ihya", desc: "Pengolahan limbah organik kantin menjadi nutrisi tanaman." },
  { name: "Kerajinan Tas Kitab", desc: "Wadah kitab karya santriwati dari kain perca dan plastik." },
];
