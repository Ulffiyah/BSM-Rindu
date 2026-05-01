/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Trash2, 
  Users, 
  Lightbulb, 
  Wallet, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail, 
  Menu, 
  X,
  ArrowRight,
  Leaf,
  Recycle,
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { APP_CONFIG, STATISTICS, WASTE_PRICES, SERVICES, INNOVATIONS } from "./constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Harga", href: "#prices" },
    { name: "Inovasi", href: "#innovation" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
            <Recycle size={24} />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-800" : "text-white"}`}>
            BSM <span className="text-emerald-500">RINDU</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg active:scale-95">
            Setor Sampah
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? "text-slate-800" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 text-lg font-medium border-b border-slate-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">
              Hubungi Kami
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Recycling Environment"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 px-4 py-2 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Leaf size={14} className="animate-pulse" />
            Pengelolaan Sampah Mandiri Berbasis Pesantren
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Pesantren Bersih <br /> 
            <span className="text-emerald-400 font-serif italic text-4xl md:text-6xl">Santri Berdikari</span>
          </h1>
          <p className="text-emerald-50/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Inisiatif {APP_CONFIG.name} hadir untuk mencuci bersih lingkungan pesantren dan mengolah limbah santri menjadi keberkahan ekonomi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group">
              Cek Harga Sampah <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
              Jelajahi Inovasi
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const StatsSection = () => {
  const IconMap: { [key: string]: any } = {
    Users: Users,
    Trash2: Trash2,
    Lightbulb: Lightbulb,
    MapPin: MapPin,
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, i) => {
            const Icon = IconMap[stat.icon];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100/50 hover:border-emerald-200 transition-colors"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-200">
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Program Pesantren</h2>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Dari Pesantren, Oleh Santri, Untuk Lingkungan
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm text-lg italic">
            "Kami tidak hanya mengumpulkan sampah, kami menciptakan ekosistem berkelanjutan."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-4 transition-all">
                  Pelajari Lebih Lanjut <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PriceSection = () => {
  const [activeCategory, setActiveCategory] = useState(WASTE_PRICES[0].category);

  return (
    <section id="prices" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Informasi Harga</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Update Harga Sampah Hari Ini</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Harga dapat berubah sewaktu-waktu sesuai dengan kondisi pasar daur ulang global. Pastikan sampah dalam keadaan bersih dan kering.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {WASTE_PRICES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat.category 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" 
                  : "bg-slate-100 text-slate-600 hover:bg-emerald-50"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 max-w-4xl mx-auto overflow-hidden">
          <div className="space-y-4">
            {WASTE_PRICES.find(c => c.category === activeCategory)?.items.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                    {i + 1}
                  </div>
                  <span className="font-bold text-slate-700 text-lg">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-600">Rp {item.price.toLocaleString("id-ID")}</span>
                  <span className="text-slate-400 text-sm font-medium ml-2">/ {item.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-emerald-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Coins size={32} />
              </div>
              <div>
                <p className="font-bold text-xl">Sudah mengumpulkan sampah?</p>
                <p className="text-white/80">Jadwalkan penjemputan sampahmu sekarang.</p>
              </div>
            </div>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-emerald-50 transition-colors whitespace-nowrap">
              Jadwalkan Penjemputan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InnovationSection = () => {
  return (
    <section id="innovation" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/30 blur-3xl -skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase mb-8 border border-emerald-500/30">
              <Lightbulb size={16} /> Rumah Inovasi
            </div>
            <h2 className="text-5xl font-black mb-8 leading-tight">
              Inovasi Santri <br />
              <span className="text-emerald-400">Khas Al-Ihya</span>
            </h2>
            <p className="text-emerald-50/60 text-lg leading-relaxed mb-10 max-w-xl">
              Sampah dari asrama dan kantin tidak lagi menjadi beban. Melalui tangan kreatif para santri, limbah diubah menjadi fasilitas pendukung kegiatan belajar mengajar di pesantren.
            </p>
            
            <div className="space-y-6">
              {INNOVATIONS.map((inn, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 font-bold text-xl shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{inn.name}</h4>
                    <p className="text-white/50">{inn.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1591193680689-d4e5d6d510d9?auto=format&fit=crop&q=80&w=1000" 
                alt="Innovation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <p className="italic text-emerald-200 mb-4 font-serif">
                  "Inovasi paving block dari plastik residu kami kini telah digunakan di taman-taman warga sebagai uji coba keberlanjutan."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">IH</div>
                  <div className="text-sm">
                    <p className="font-bold">Ihya Ulumudin</p>
                    <p className="text-white/40">Founder BSM Rindu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Recycle size={32} />
              </div>
              <span className="font-bold text-3xl tracking-tight">
                BSM <span className="text-emerald-500">RINDU</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed mb-8">
              {APP_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20">
                <Mail size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Layanan</a></li>
              <li><a href="#prices" className="hover:text-emerald-400 transition-colors">Harga Sampah</a></li>
              <li><a href="#innovation" className="hover:text-emerald-400 transition-colors">Rumah Inovasi</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Kemitraan Masyarakat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Kontak</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="text-emerald-500 shrink-0" size={24} />
                <span>{APP_CONFIG.contact.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-emerald-500 shrink-0" size={24} />
                <span>{APP_CONFIG.contact.phone}</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-emerald-500 shrink-0" size={24} />
                <span>{APP_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {APP_CONFIG.name}. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for Green Earth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <PriceSection />
        <InnovationSection />
        
        {/* Contact CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Wujudkan Pesantren <br /> Nol Sampah (Zero Waste)
                </h2>
                <p className="text-emerald-50/70 text-xl max-w-2xl mx-auto mb-12">
                  Bergabunglah menjadi mitra BSM Rindu hari ini. Mari menjaga kesucian dan kebersihan lingkungan pesantren bersama.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-white text-emerald-800 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                    Hubungi Pengurus
                  </button>
                  <button className="bg-emerald-500/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all active:scale-95">
                    Konsultasi Gratis
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
