/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
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
  Coins,
  LogIn,
  BookOpen,
  GraduationCap,
  Award,
  Lock,
  User,
  ShoppingBag,
  ShoppingCart,
  Info,
  Calendar,
  Heart,
  MessageCircle,
  Newspaper,
  FileText,
  PlusCircle,
  CreditCard,
  Send,
  Clock,
  LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { APP_CONFIG, STATISTICS, WASTE_PRICES, SERVICES, INNOVATIONS, EDUCATION_CLASSES, PRODUCTS, NEWS, MATERIALS } from "./constants";

const Navbar = ({ onOpenModal, onOpenLogin, isLoggedIn, cartCount, onOpenCart }: { 
  onOpenModal: () => void, 
  onOpenLogin: () => void, 
  isLoggedIn: boolean, 
  cartCount: number,
  onOpenCart: () => void 
}) => {
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
    { name: "Edukasi", href: "#education" },
    { name: "Belanja", href: "#shop" },
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
            BSN RINDU <span className="text-emerald-500">AL-IHYA</span>
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
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenLogin}
              className={`text-sm font-bold flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isScrolled ? "text-slate-700 border-slate-200 hover:bg-slate-50" : "text-white border-white/20 hover:bg-white/10"}`}
            >
              <LogIn size={16} /> {isLoggedIn ? "Profil Saya" : "Masuk Akun"}
            </button>
            <button 
              onClick={onOpenModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg active:scale-95"
            >
              Setor Sampah
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold"
            >
              Setor Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = ({ onOpenModal, isLoggedIn, userProfile, onOpenProfile }: { onOpenModal: () => void, isLoggedIn: boolean, userProfile: any, onOpenProfile: () => void }) => {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <button 
                onClick={onOpenModal}
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group"
              >
                Setor Sampah Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#shop"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
              >
                Jelajahi Produk
              </a>
            </div>
          </motion.div>

          {isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:flex justify-end hidden"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[3rem] w-full max-w-sm text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <User size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg border-2 border-emerald-400">
                      {userProfile.name.substring(0, 1)}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-emerald-400 tracking-widest mb-0.5">Ahlan wa Sahlan,</p>
                      <h4 className="text-xl font-black">{userProfile.name}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[10px] uppercase font-black text-emerald-300 mb-1">Saldo Tabungan</p>
                      <p className="text-lg font-black">Rp {userProfile.balance.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[10px] uppercase font-black text-emerald-300 mb-1">Total Setoran</p>
                      <p className="text-lg font-black">{userProfile.wasteTotal} Kg</p>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenProfile}
                    className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    Lihat Profil Lengkap <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-emerald-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=1000" 
                alt="Pesantren Environment" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-[2.5rem] p-8 text-white hidden md:block shadow-xl">
              <Info size={40} className="mb-4 opacity-50" />
              <p className="font-bold text-xl leading-tight">Visi Kami</p>
              <p className="text-emerald-100 text-sm mt-2 font-medium">Mewujudkan Pesantren Al-Ihya sebagai pelopor pesantren ramah lingkungan di Indonesia.</p>
            </div>
          </motion.div>
          
          <div>
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Mengenal BSN Rindu Al-Ihya</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Membangun Peradaban Hijau Dari <span className="text-emerald-500">Bilik Pesantren</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              BSN Rindu Al Ihya dikelola sepenuhnya oleh santri. Kami mengambil tanggung jawab penuh untuk menjemput sampah dari setiap asrama, memilahnya, dan mengolahnya menjadi produk bernilai ekonomi.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Khidmat Lingkungan</h4>
                  <p className="text-slate-500 text-sm">Menjaga kebersihan pesantren adalah bagian dari iman dan khidmat santri kepada alam.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Inovasi Berkelanjutan</h4>
                  <p className="text-slate-500 text-sm">Sampah bukan akhir, melainkan awal dari produk inovatif yang membantu operasional pesantren.</p>
                </div>
              </div>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95">
              Lihat Profil Lengkap <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const IconMap: { [key: string]: any } = {
    Users: Users,
    Trash2: Trash2,
    Lightbulb: Lightbulb,
    Award: Award,
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

const PriceDisplay = ({ onAction }: { onAction: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(WASTE_PRICES[0].category);

  return (
    <>
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
                <span className="text-2xl font-black text-emerald-600">
                  {item.price === 0 ? "Bantu Olah" : `Rp ${item.price.toLocaleString("id-ID")}`}
                </span>
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
              <p className="font-bold text-xl">Sampah Asrama Sudah Penuh?</p>
              <p className="text-white/80">Laporkan setoran sampah sekarang untuk dijemput.</p>
            </div>
          </div>
          <button 
            onClick={onAction}
            className="bg-white text-emerald-700 px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-emerald-50 transition-colors whitespace-nowrap"
          >
            Lapor Setoran
          </button>
        </div>
      </div>
    </>
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
                    <p className="text-white/40">Founder BSN Rindu Al-Ihya</p>
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

const EducationSection = ({ onRegister }: { onRegister: (className: string) => void }) => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-emerald-50/30 -skew-y-6 origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Kelas Kreatif Santri</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Tingkatkan <span className="text-emerald-600 italic font-serif">Skill & Taqwa</span> Lewat Alam
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg border-l-4 border-emerald-500 pl-6">
            Program beasiswa pelatihan untuk santri terpilih yang ingin berkontribusi aktif dalam program kemandirian pesantren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_CLASSES.map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all p-4 group"
            >
              <div className="relative h-56 rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                  {cls.category}
                </div>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <Calendar size={14} /> {cls.schedule}
                  </div>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h4 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">{cls.title}</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
                  {cls.desc}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-600 mb-8 bg-slate-50 p-3 rounded-2xl">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-[10px]">IH</div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Mentor Utama</p>
                    {cls.mentor}
                  </div>
                </div>
                <button 
                  onClick={() => onRegister(cls.title)}
                  className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  Daftar Kelas Sekarang <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Kabar BSN</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Update Berita Terkini</h3>
          <p className="text-slate-500">Informasi seputar aktivitas dan inovasi terbaru di pesantren Al-Ihya.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {NEWS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all"
            >
              <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-emerald-600 text-xs font-bold mb-2 uppercase">{item.date}</p>
                <h4 className="text-xl font-black text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                <button className="text-emerald-600 font-bold text-sm flex items-center gap-1">Baca Selengkapnya <ChevronRight size={16} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsSection = () => {
  return (
    <section id="materials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">Materi & Panduan Mandiri</h3>
              <p className="text-emerald-100/70 mb-8 max-w-md">Unduh berbagai materi edukasi pengelolaan bank sampah untuk diterapkan di rumah atau lingkungan Anda.</p>
              <div className="space-y-4">
                {MATERIALS.map((mat) => (
                  <div key={mat.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center">
                        {mat.type === "PDF" ? <FileText size={20} /> : <BookOpen size={20} />}
                      </div>
                      <div>
                        <p className="font-bold">{mat.title}</p>
                        <p className="text-xs text-emerald-300">{mat.type} • {mat.size}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Request Materi Baru?</h4>
              <p className="text-sm text-emerald-100/60 mb-6">Punya topik menarik yang ingin dibahas? Kirimkan usulan materi Anda kepada tim pengajar kami.</p>
              <button className="w-full bg-emerald-500 py-3 rounded-xl font-black hover:bg-emerald-400 transition-all">Hubungi Tim Edukasi</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeedbackSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-black text-slate-800 mb-6">Kirim Saran & Feedback</h3>
        <p className="text-slate-500 mb-10">Bantu kami terus berbenah untuk menciptakan pesantren yang lebih hijau dan berkah.</p>
        <form className="max-w-2xl mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Terima kasih! Saran Anda telah kami terima."); }}>
          <input 
            required
            type="text" 
            placeholder="Nama Lengkap Anda" 
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 bg-white shadow-sm" 
          />
          <textarea 
            required
            placeholder="Tuliskan saran atau masukan Anda di sini..." 
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 bg-white h-40 shadow-sm"
          ></textarea>
          <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
            Kirim Masukan <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

const ShopSection = ({ onAddToCart, onBuyNow, onSeeAll }: { 
  onAddToCart: (product: any) => void, 
  onBuyNow: (product: any) => void,
  onSeeAll: () => void 
}) => {
  return (
    <section id="shop" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Galeri Kreativitas</h2>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">Produk Inovasi <br /> <span className="text-emerald-500">Karya Santri</span></h3>
          </div>
          <button 
            onClick={onSeeAll}
            className="flex items-center gap-2 font-bold text-slate-800 hover:text-emerald-600 transition-colors group"
          >
            Lihat Semua Produk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white px-3 py-1 rounded-full text-[10px] font-black text-emerald-600 border border-emerald-100 shadow-sm uppercase tracking-widest">
                    Stok Tersedia
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-emerald-600 transition-colors">{product.name}</h4>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed">{product.desc}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-600 tracking-tighter">Rp {product.price.toLocaleString("id-ID")}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="flex items-center justify-center gap-2 py-3.5 bg-emerald-50 text-emerald-600 rounded-2xl font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all border border-emerald-100"
                    >
                      <ShoppingCart size={16} />
                      +CART
                    </button>
                    <button 
                      onClick={() => onBuyNow(product)}
                      className="flex items-center justify-center gap-2 py-3.5 bg-emerald-600 text-white rounded-2xl font-black text-xs hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                    >
                      BELI SEKARANG
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
                BSN RINDU <span className="text-emerald-500">AL-IHYA</span>
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
  const [view, setView] = useState<'home' | 'dashboard'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<{product: any, quantity: number}[]>([]);
  const [adminMode, setAdminMode] = useState<string | null>(null); // 'news', 'product', 'class', 'material'
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPengurus, setIsPengurus] = useState(false);
  const [loginRole, setLoginRole] = useState('pengurus');
  const [userProfile, setUserProfile] = useState({
    name: "Ahmad Santri",
    dorm: "Asrama Al-Ihya 3",
    nis: "2024.08.001",
    joinDate: "01 Januari 2024",
    balance: 75000,
    wasteTotal: 24.5,
    rank: "Santri Hijau",
    points: 1250,
    classesJoined: ["Budidaya Maggot BSF"]
  });

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCartCheckout = () => {
    let text = `*PESANAN KERANJANG BSN RINDU AL-IHYA*\n`;
    text += `----------------------------------\n`;
    cart.forEach(item => {
      text += `- ${item.product.name} x${item.quantity} (Rp ${(item.product.price * item.quantity).toLocaleString("id-ID")})\n`;
    });
    text += `----------------------------------\n`;
    text += `*Total Pembayaran: Rp ${cartTotal.toLocaleString("id-ID")}*\n\n`;
    text += `Nama: ${userProfile.name}\n`;
    text += `Lokasi: ${userProfile.dorm}\n`;
    text += `Catatan: Mohon diproses segera, Syukron.`;
    
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
    setCart([]);
    setIsCartOpen(false);
  };

  const [selectedClassId, setSelectedClassId] = useState("");
  const [paymentStep, setPaymentStep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedClass = EDUCATION_CLASSES.find(c => c.title === selectedClassId);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const role = formData.get("role") as string;
    const username = formData.get("username") as string;

    setTimeout(() => {
      setIsLoggedIn(true);
      if (role === "pengurus") {
        setIsPengurus(true);
        setIsAdmin(true); // Super admin is also admin
        setUserProfile(prev => ({ ...prev, name: "Pengurus BSN", dorm: "Manajemen Unit BSN" }));
        setView('dashboard');
      } else if (role === "admin") {
        setIsAdmin(true);
        setIsPengurus(false);
        setUserProfile(prev => ({ ...prev, name: "Admin BSN", dorm: "Operasional Bank Sampah" }));
        setView('dashboard');
      } else {
        setIsAdmin(false);
        setIsPengurus(false);
        if (username) {
          setUserProfile(prev => ({ ...prev, name: username }));
        }
      }
      setIsSubmitting(false);
      setIsLoginOpen(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsPengurus(false);
    setView('home');
    setIsProfileOpen(false);
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsSubmitting(false);
      setIsSignupOpen(false);
    }, 1500);
  };

  const handleSubmitReport = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 2000);
    }, 1500);
  };

  const handleRegisterSuccess = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (selectedClass) {
        setUserProfile(prev => ({
          ...prev,
          classesJoined: [...prev.classesJoined, selectedClass.title]
        }));
      }
      setTimeout(() => {
        setSubmitted(false);
        setIsRegisterOpen(false);
        setPaymentStep(false);
      }, 2000);
    }, 1500);
  };

  const handleRegisterClick = (className: string) => {
    setSelectedClassId(className);
    setPaymentStep(false);
    setIsRegisterOpen(true);
  };

  const handleBuyClick = (product: any) => {
    setSelectedProduct(product);
    setPaymentStep(false);
    setIsShopModalOpen(true);
  };

  const openWhatsAppOrder = (item: string) => {
    const text = `Assalamu'alaikum, saya ingin memesan ${item} dari BSN Rindu Al-Ihya.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (view === 'dashboard' && isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex">
        {/* Sidebar */}
        <aside className="w-72 bg-emerald-900 text-white flex flex-col p-8 fixed h-full z-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-emerald-500 p-2 rounded-xl">
              <Recycle size={24} />
            </div>
            <span className="font-bold text-xl uppercase tracking-tighter">BSN <span className="text-emerald-400">DASHBOARD</span></span>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { id: 'news', label: 'Berita & Artikel', icon: Newspaper, role: 'pengurus' },
              { id: 'product', label: 'Produk Marketplace', icon: ShoppingBag, role: 'pengurus' },
              { id: 'class', label: 'Kelas Edukasi', icon: GraduationCap, role: 'pengurus' },
              { id: 'material', label: 'Materi Belajar', icon: FileText, role: 'pengurus' },
              { id: 'reports', label: 'Laporan Setoran', icon: Recycle, role: 'admin' },
              { id: 'feedback', label: 'Saran & Feedback', icon: MessageCircle, role: 'admin' },
            ].filter(item => item.role === 'admin' || (item.role === 'pengurus' && isPengurus)).map((item) => (
              <button 
                key={item.id}
                onClick={() => setAdminMode(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${adminMode === item.id ? "bg-emerald-500 text-emerald-950" : "text-emerald-100/60 hover:bg-white/5 hover:text-white"}`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-black">SA</div>
              <div>
                <p className="font-bold text-sm">{userProfile.name}</p>
                <p className="text-[10px] text-emerald-300 uppercase font-black">{isPengurus ? "Pengurus BSN" : "Admin BSN (Ops)"}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setView('home')} className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl text-xs font-black transition-all">LIHAT WEB</button>
              <button onClick={handleLogout} className="flex-1 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white py-3 rounded-xl text-xs font-black transition-all">KELUAR</button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 ml-72 p-12">
          <header className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-3xl font-black text-slate-800">Panel Kendali Pengurus</h1>
              <p className="text-slate-500">Kelola operasional harian BSN Rindu Al-Ihya</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Kas Masuk Hari Ini</p>
                <p className="text-xl font-black text-emerald-600">Rp 450.000</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Setoran Pending</p>
                <p className="text-xl font-black text-emerald-600">12 Item</p>
              </div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {!adminMode ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div className="col-span-full bg-emerald-600 p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4">Selamat Datang, {userProfile.name}!</h2>
                    <p className="text-emerald-100 max-w-xl text-lg">Pilih menu di samping untuk mulai mengelola konten website, validasi nasabah, atau memantau transaksi masuk hari ini.</p>
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 blur-3xl translate-x-1/2"></div>
                </div>

                {/* Dashboard Widgets */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-4">Aktifitas Terakhir</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><Info size={14} /></div>
                        <div>
                          <p className="font-bold text-slate-700">Setoran Baru dari Asrama A</p>
                          <p className="text-[10px] text-slate-400">2 menit yang lalu</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={adminMode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Kelola {adminMode}</h2>
                  <button onClick={() => setAdminMode(null)} className="text-slate-400 hover:text-slate-600 flex items-center gap-2 font-bold text-sm">
                    TUTUP PANEL <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Judul / Nama Item</label>
                      <input type="text" placeholder={`Contoh: Promo Produk ${adminMode} Baru`} className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Konten / Deskripsi</label>
                      <textarea placeholder="Tuliskan detail selengkap mungkin agar nasabah tertarik..." className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none transition-all h-48"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Harga / Biaya (Opsional)</label>
                        <input type="number" placeholder="Rp 0" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Kategori</label>
                        <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none appearance-none">
                          <option>UMUM</option>
                          <option>DARURAT</option>
                          <option>PENAWARAN</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100">
                      Publikasikan Sekarang <PlusCircle size={22} />
                    </button>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest text-center border-b pb-4">Panduan Pengurus</h4>
                    <ul className="space-y-4 text-sm text-slate-600">
                      <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></div> Gunakan bahasa yang sopan dan mencerminkan adab pesantren.</li>
                      <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></div> Pastikan foto produk yang diunggah memiliki kualitas yang baik.</li>
                      <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></div> Berita yang diupdate akan otomatis terkirim melalui notifikasi web kepada santri.</li>
                      <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></div> Hubungi IT Al-Ihya jika terjadi kendala teknis pada database.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-emerald-500 selection:text-white">
      <Navbar 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenLogin={() => isLoggedIn ? setIsProfileOpen(true) : setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        cartCount={cart.reduce((s, h) => s + h.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <main>
        <Hero 
          onOpenModal={() => setIsModalOpen(true)} 
          isLoggedIn={isLoggedIn}
          userProfile={userProfile}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        
        {/* Price Section */}
        <section id="prices" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Informasi Harga</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-4">Update Harga Sampah Hari Ini</h3>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Harga khusus santri. Hasil pengumpulan sampah akan dikonversi menjadi saldo kemandirian asrama.
              </p>
            </div>

            <PriceDisplay onAction={() => setIsModalOpen(true)} />
          </div>
        </section>

        <EducationSection onRegister={handleRegisterClick} />
        <ShopSection onAddToCart={addToCart} onBuyNow={handleBuyClick} onSeeAll={() => setIsAllProductsOpen(true)} />
        <NewsSection />
        <MaterialsSection />
        <InnovationSection />
        <FeedbackSection />
        
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
                  Mari menjaga kesucian dan kebersihan lingkungan pesantren bersama. Laporkan setoran sampah asrama Anda sekarang.
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
      <AnimatePresence>
        {isShopModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShopModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">Beli Produk</h3>
                    <p className="text-emerald-600 font-bold text-sm tracking-tight capitalize">{selectedProduct?.name}</p>
                  </div>
                  <button onClick={() => setIsShopModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                    <X />
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingBag size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Pesan Berhasil!</h4>
                    <p className="text-slate-500">Produk akan segera disiapkan dan dikirim ke lokasi Anda.</p>
                  </div>
                ) : !paymentStep ? (
                  <form onSubmit={(e) => { e.preventDefault(); setPaymentStep(true); }} className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 border border-slate-100 mb-4">
                      <img src={selectedProduct?.image} className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <p className="font-bold text-slate-800">{selectedProduct?.name}</p>
                        <p className="text-emerald-600 font-black">Rp {selectedProduct?.price.toLocaleString("id-ID")}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <input 
                        required
                        type="text" 
                        defaultValue={isLoggedIn ? userProfile.name : ""}
                        placeholder="Nama Lengkap Penerima" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <input 
                        required
                        type="text" 
                        defaultValue={isLoggedIn ? userProfile.dorm : ""}
                        placeholder="Alamat Lengkap / Asrama" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <input 
                        required
                        type="tel" 
                        placeholder="Nomor WhatsApp Aktif" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <textarea 
                        placeholder="Catatan Pesanan / Saran untuk BSN" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none h-24"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      Lanjut Pembelian <ArrowRight size={20} />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-slate-400 text-sm italic">Pilih Metode Pembayaran</p>
                    </div>
                    
                    <div className="space-y-3">
                      <button 
                        onClick={handleRegisterSuccess}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                            <Wallet size={20} />
                          </div>
                          <div className="text-left font-bold text-slate-800">DANA</div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>

                      <button 
                        onClick={handleRegisterSuccess}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center">
                            <Coins size={20} />
                          </div>
                          <div className="text-left font-bold text-slate-800">Saldo BSN</div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>
                      
                      <button 
                        onClick={() => openWhatsAppOrder(selectedProduct?.name)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center">
                            <MessageCircle size={20} />
                          </div>
                          <div className="text-left font-bold text-slate-800">Order via WhatsApp</div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>

                      <button 
                        onClick={() => openWhatsAppOrder(selectedClassId)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center">
                            <MessageCircle size={20} />
                          </div>
                          <div className="text-left font-bold text-slate-800">Order via WhatsApp</div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>
                    </div>

                    <button onClick={() => setPaymentStep(false)} className="w-full py-3 text-slate-400 font-bold text-sm">
                      Kembali ke Data Diri
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAllProductsOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAllProductsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Katalog Produk <span className="text-emerald-500">BSN</span></h3>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest leading-none mt-1">Inovasi Kreasi Santri Al-Ihya</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsAllProductsOpen(false)} 
                  className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {PRODUCTS.map((product) => (
                    <div key={product.id} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-emerald-600 shadow-sm border border-emerald-100">
                          {product.price.toLocaleString("id-ID")}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors uppercase text-sm tracking-tight">{product.name}</h4>
                          <p className="text-slate-500 text-[11px] mb-4 line-clamp-2 leading-relaxed">{product.desc}</p>
                        </div>
                        <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/60">
                          <button 
                            onClick={() => { addToCart(product); }}
                            className="w-full py-3 bg-white text-emerald-600 border border-emerald-100 rounded-xl font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
                          >
                            <ShoppingCart size={14} /> +KERANJANG
                          </button>
                          <button 
                            onClick={() => { handleBuyClick(product); }}
                            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-black text-xs hover:bg-emerald-700 transition-all flex items-center justify-center shadow-lg shadow-emerald-100 shadow-none border border-emerald-600"
                          >
                            BELI SEKARANG
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 border-t bg-slate-50 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Semua pendapatan hasil penjualan kembali untuk operasional Bank Sampah Pesantren</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[120] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <ShoppingCart size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-800">Keranjang Belanja</h3>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest">{cart.length} Item Tersimpan</p>
                  </div>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-slate-500 font-bold">Keranjang Anda masih kosong</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-4 text-emerald-600 font-black text-sm">Mulai Belanja Sekarang</button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div key={item.product.id} layout className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={item.product.image} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-1">{item.product.name}</h4>
                        <p className="text-emerald-600 font-black text-sm mb-2">Rp {item.product.price.toLocaleString("id-ID")}</p>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => {
                              setCart(prev => prev.map(i => i.product.id === item.product.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
                            }}
                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600"
                          >-</button>
                          <span className="font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => {
                              setCart(prev => prev.map(i => i.product.id === item.product.id ? { ...i, quantity: i.quantity + 1 } : i))
                            }}
                            className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600"
                          >+</button>
                          <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-red-400 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t bg-slate-50 rounded-t-[2rem]">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-slate-500 font-bold">Subtotal</p>
                    <p className="text-2xl font-black text-slate-800">Rp {cartTotal.toLocaleString("id-ID")}</p>
                  </div>
                  <button 
                    onClick={handleCartCheckout}
                    className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3"
                  >
                    Checkout Sekarang <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 bg-emerald-600 p-8 text-white">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/10">
                      <User size={48} />
                    </div>
                    <h3 className="text-xl font-black">{userProfile.name}</h3>
                    <p className="text-emerald-100 text-sm">{userProfile.dorm}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-xs text-emerald-200 uppercase font-black tracking-wider">{isAdmin ? "Total Kas BSM" : "Target Setoran Asrama"}</p>
                      <p className="text-2xl font-black">Rp {isAdmin ? "12.450.000" : "5.000.000"}</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-xs text-emerald-200 uppercase font-black tracking-wider">{isAdmin ? "Semua Nasabah" : "Jadwal Tugas"}</p>
                      <p className="text-2xl font-black">{isAdmin ? "856 Santri" : "Asrama A & B"}</p>
                    </div>
                  </div>
                        <button 
                          onClick={handleLogout}
                          className="w-full mt-8 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all font-black flex items-center justify-center gap-2"
                        >
                          <LogOut size={16} /> Keluar Akun
                        </button>
                      </div>
                      
                      <div className="md:w-2/3 p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h4 className="text-xl font-black text-slate-800">{isAdmin ? "Panel Kendali Pengurus" : "Profil Lengkap Santri"}</h4>
                          <button onClick={() => setIsProfileOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                            <X />
                          </button>
                        </div>
                        
                        <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                          {(!isAdmin && !isPengurus) && (
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1">ID Nasabah (NIS)</p>
                                <p className="font-bold text-slate-700">{userProfile.nis}</p>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Bergabung Sejak</p>
                                <p className="font-bold text-slate-700">{userProfile.joinDate}</p>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Peringkat</p>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                  <p className="font-bold text-emerald-600">{userProfile.rank}</p>
                                </div>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Total Poin</p>
                                <p className="font-bold text-emerald-700">{userProfile.points} Pts</p>
                              </div>
                            </div>
                          )}

                          {(!isAdmin && !isPengurus) && (
                            <div>
                              <h5 className="font-black text-slate-800 text-sm mb-4 flex items-center gap-2">
                                <Clock size={16} className="text-emerald-500" /> Aktifitas & Capaian Terakhir
                              </h5>
                              <div className="space-y-3">
                                {[
                                  { icon: Recycle, title: "Setoran 5kg Plastik", date: "Hari ini", points: "+50 Pts" },
                                  { icon: GraduationCap, title: "Lulus Kelas Maggot", date: "2 hari lalu", points: "+200 Pts" },
                                  { icon: Award, title: "Badge Santri Teladan", date: "Kemarin", points: "Achievement" },
                                ].map((activity, idx) => (
                                  <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2x">
                                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                      <activity.icon size={18} />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-bold text-slate-800">{activity.title}</p>
                                      <p className="text-[10px] text-slate-400 font-bold">{activity.date}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-xs font-black text-emerald-600">{activity.points}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {isAdmin ? (
                      <div className="space-y-8">
                        {isPengurus && (
                          <div>
                            <p className="text-sm font-black text-slate-400 uppercase mb-4 text-emerald-600">Menu Pengurus Pusat (All Access)</p>
                            <div className="grid grid-cols-2 gap-3">
                              <button onClick={() => setAdminMode('news') || setView('dashboard')} className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-left hover:bg-emerald-100 transition-all group">
                                <Newspaper size={24} className="text-emerald-600 mb-2" />
                                <p className="font-bold text-slate-800 text-xs">Update Berita</p>
                              </button>
                              <button onClick={() => setAdminMode('product') || setView('dashboard')} className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-left hover:bg-emerald-100 transition-all group">
                                <PlusCircle size={24} className="text-emerald-600 mb-2" />
                                <p className="font-bold text-slate-800 text-xs">Tambah Produk</p>
                              </button>
                              <button onClick={() => setAdminMode('class') || setView('dashboard')} className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-left hover:bg-emerald-100 transition-all group">
                                <GraduationCap size={24} className="text-emerald-600 mb-2" />
                                <p className="font-bold text-slate-800 text-xs">Tambah Kelas</p>
                              </button>
                              <button onClick={() => setAdminMode('material') || setView('dashboard')} className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-left hover:bg-emerald-100 transition-all group">
                                <FileText size={24} className="text-emerald-600 mb-2" />
                                <p className="font-bold text-slate-800 text-xs">Upload Materi</p>
                              </button>
                            </div>
                          </div>
                        )}

                        {adminMode && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
                            <div className="flex justify-between items-center mb-4">
                              <h5 className="font-black text-slate-800 uppercase text-xs">Form Input {adminMode}</h5>
                              <button onClick={() => setAdminMode(null)} className="text-slate-400 hover:text-slate-600">
                                <X size={16} />
                              </button>
                            </div>
                            <div className="space-y-3">
                              <input type="text" placeholder={`Judul ${adminMode}`} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none" />
                              <textarea placeholder={`Deskripsi / Isi ${adminMode}`} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none h-24"></textarea>
                              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-black text-sm">Publikasikan Sekarang</button>
                            </div>
                          </motion.div>
                        )}

                        <div>
                          <p className="text-sm font-black text-slate-400 uppercase mb-3 text-emerald-600">Laporan Setoran Masuk (Pending)</p>
                          <div className="space-y-3">
                            {[
                              { dorm: "Asrama Al-Ihya 3", name: "Santri Zaid", type: "Plastik", weight: "4.5kg" },
                              { dorm: "Asrama Al-Baqarah", name: "Santri Yusuf", type: "Kertas", weight: "12kg" }
                            ].map((item, idx) => (
                              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div>
                                  <p className="font-bold text-slate-800">{item.dorm}</p>
                                  <p className="text-xs text-slate-500">{item.name} • {item.type}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-black text-emerald-600">{item.weight}</p>
                                  <button className="text-[10px] bg-emerald-600 text-white px-2 py-1 rounded-md font-bold mt-1">Validasi</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-400 uppercase mb-3">Monitoring Maggot</p>
                          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-600">Suhu Reaktor</span>
                              <span className="font-bold text-emerald-700">28.5°C</span>
                            </div>
                            <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full w-[85%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm font-black text-slate-400 uppercase mb-3">Kelas Yang Diikuti</p>
                          <div className="space-y-3">
                            {userProfile.classesJoined.map(cls => (
                              <div key={cls} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                                  <BookOpen size={20} />
                                </div>
                                <span className="font-bold text-slate-700">{cls}</span>
                                <div className="ml-auto text-[10px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-black">AKTIF</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-black text-slate-400 uppercase mb-3">Aktivitas Terakhir</p>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white border-b border-slate-100">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                                  <Recycle size={20} />
                                </div>
                                <div>
                                  <p className="font-bold text-slate-700 text-sm">Setor Kertas HVS</p>
                                  <p className="text-[10px] text-slate-400">24 Apr 2024</p>
                                </div>
                              </div>
                              <p className="font-black text-emerald-600">+2.5 Kg</p>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white border-b border-slate-100">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                                  <Recycle size={20} />
                                </div>
                                <div>
                                  <p className="font-bold text-slate-700 text-sm">Setor Botol Plastik</p>
                                  <p className="text-[10px] text-slate-400">22 Apr 2024</p>
                                </div>
                              </div>
                              <p className="font-black text-emerald-600">+1.2 Kg</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRegisterOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRegisterOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">Daftar Kelas Edukasi</h3>
                    <p className="text-emerald-600 font-bold text-sm">{selectedClassId}</p>
                  </div>
                  <button onClick={() => setIsRegisterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                    <X />
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <GraduationCap size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Pendaftaran Berhasil!</h4>
                    <p className="text-slate-500">Silakan cek riwayat Anda di profil untuk detail jadwal.</p>
                  </div>
                ) : !paymentStep ? (
                  <form onSubmit={(e) => { e.preventDefault(); setPaymentStep(true); }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap Santri</label>
                      <input 
                        required
                        type="text" 
                        defaultValue={isLoggedIn ? userProfile.name : ""}
                        placeholder="Masukkan nama Anda" 
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Asrama / Alamat</label>
                        <input 
                          required
                          type="text" 
                          defaultValue={isLoggedIn ? userProfile.dorm : ""}
                          placeholder="Lokasi Anda" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">NIS / Identitas</label>
                        <input 
                          required
                          type="text" 
                          placeholder="NIS atau No. KTP" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                    </div>

                    <textarea 
                      placeholder="Pesan / Saran Pendaftaran" 
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none h-20"
                    ></textarea>

                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <p className="text-slate-700 text-xs font-bold mb-1">Infaq Pelatihan:</p>
                      <p className="text-xl font-black text-emerald-700">
                        {selectedClass?.price === 0 ? "GRATIS" : `Rp ${selectedClass?.price.toLocaleString("id-ID")}`}
                      </p>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      Lanjut ke Pembayaran <ArrowRight size={20} />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-slate-400 text-sm">Total Pembayaran</p>
                      <p className="text-3xl font-black text-slate-800">Rp {selectedClass?.price.toLocaleString("id-ID")}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-700">Pilih Metode Pembayaran:</p>
                      <button 
                        onClick={handleRegisterSuccess}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                            <Wallet size={20} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-800">DANA</p>
                            <p className="text-[10px] text-slate-400">Pembayaran instan via DANA</p>
                          </div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>

                      <button 
                        onClick={handleRegisterSuccess}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center">
                            <Coins size={20} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-800">Saldo Tabungan BSM</p>
                            <p className="text-[10px] text-slate-400">Saldo saat ini: Rp {userProfile.balance.toLocaleString("id-ID")}</p>
                          </div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>

                      <button 
                        onClick={() => openWhatsAppOrder(selectedClassId)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center">
                            <MessageCircle size={20} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-800">WhatsApp (Pesan Serius)</p>
                            <p className="text-[10px] text-slate-400">Konfirmasi via admin WhatsApp</p>
                          </div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setPaymentStep(false)}
                      className="w-full py-3 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                    >
                      Kembali ke Data Diri
                    </button>
                    
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-50">
                    <User size={30} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">Masuk BSN Rindu Al-Ihya</h3>
                  <p className="text-slate-400 text-sm">Akses portal pengelolaan bank sampah</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-4">
                    <label className="flex-1 text-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="pengurus" 
                        checked={loginRole === 'pengurus'} 
                        onChange={(e) => setLoginRole(e.target.value)}
                        className="hidden peer" 
                      />
                      <span className="block py-2.5 rounded-xl text-[10px] font-black peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-sm transition-all text-slate-500">PENGURUS BSN</span>
                    </label>
                    <label className="flex-1 text-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="admin" 
                        checked={loginRole === 'admin'} 
                        onChange={(e) => setLoginRole(e.target.value)}
                        className="hidden peer" 
                      />
                      <span className="block py-2.5 rounded-xl text-[10px] font-black peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-sm transition-all text-slate-500">ADMIN (OPS)</span>
                    </label>
                    <label className="flex-1 text-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="role" 
                        value="user" 
                        checked={loginRole === 'user'} 
                        onChange={(e) => setLoginRole(e.target.value)}
                        className="hidden peer" 
                      />
                      <span className="block py-2.5 rounded-xl text-[10px] font-black peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-sm transition-all text-slate-500">SANTRI</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      required
                      name="username"
                      placeholder={loginRole === 'user' ? "Nama Lengkap" : "Username / NIS"} 
                      className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                    />
                  </div>
                  {loginRole !== 'user' && (
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="password" 
                        required
                        name="password"
                        placeholder="Kata Sandi" 
                        className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs py-2 px-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-500 select-none">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      Ingat Saya
                    </label>
                    {loginRole !== 'user' && <a href="#" className="text-emerald-600 font-bold hover:underline">Lupa Sandi?</a>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-emerald-200 active:scale-95 mt-4 flex items-center justify-center"
                  >
                    {isSubmitting ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Masuk Sekarang"}
                  </button>
                  <p className="text-center text-slate-400 text-sm mt-6">
                    Belum punya akun? <button type="button" onClick={() => setIsLoginOpen(false) || setIsSignupOpen(true)} className="text-emerald-600 font-bold hover:underline">Daftar Mandiri</button>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {isSignupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSignupOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-50">
                    <User size={30} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">Daftar Akun Baru</h3>
                  <p className="text-slate-400 text-sm">Masuk ke ekosistem BSM Rindu Al-Ihya</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Nama Lengkap Santri" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                  />
                  <input 
                    type="text" 
                    required
                    placeholder="Nomor Induk Santri (NIS)" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                  />
                  <input 
                    type="password" 
                    required
                    placeholder="Buat Kata Sandi" 
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                  />
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-emerald-200 active:scale-95 mt-4 flex items-center justify-center"
                  >
                    {isSubmitting ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Daftar Akun"}
                  </button>
                  <p className="text-center text-slate-400 text-sm mt-6">
                    Sudah punya akun? <button type="button" onClick={() => setIsSignupOpen(false) || setIsLoginOpen(true)} className="text-emerald-600 font-bold hover:underline">Masuk Sini</button>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Setor Sampah Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black text-slate-800">Formulir Setor Sampah</h3>
                  <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                    <X />
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Recycle size={40} className="animate-spin-slow" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Berhasil Terkirim!</h4>
                    <p className="text-slate-500">Pengurus akan segera memvalidasi setoran asrama Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReport} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Nama Santri / Asrama</label>
                      <input 
                        required
                        type="text" 
                        defaultValue={isLoggedIn ? `${userProfile.name} - ${userProfile.dorm}` : ""}
                        placeholder="Contoh: Santri Ahmad - Asrama Al-Ihya" 
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Jenis Sampah</label>
                        <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none">
                          {WASTE_PRICES.map(cat => 
                            cat.items.map(item => (
                              <option key={item.name} value={item.name}>{item.name}</option>
                            ))
                          )}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Berat (Est. Kg)</label>
                        <input 
                          required
                          type="number" 
                          placeholder="Kg" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Pesan / Lokasi Penjemputan</label>
                      <textarea 
                        rows={3}
                        placeholder="Misal: Samping pintu gerbang asrama..." 
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Memproses...
                        </>
                      ) : (
                        <>
                          Kirim Laporan <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
