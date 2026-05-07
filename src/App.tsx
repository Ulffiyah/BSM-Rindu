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
  Play,
  CreditCard,
  DollarSign,
  Send,
  Clock,
  LogOut,
  Bell,
  Pencil,
  TrendingUp
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
          <span className={`font-display font-black text-xl tracking-tight ${isScrolled ? "text-slate-800" : "text-white"}`}>
            RINDU BSN <span className="text-emerald-500">AL-IHYA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-widest font-bold transition-all relative group ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 transition-all hover:scale-110 ${isScrolled ? "text-slate-700" : "text-white"}`}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button 
              onClick={onOpenLogin}
              className={`text-xs uppercase tracking-widest font-extrabold flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all ${isScrolled ? "text-slate-700 border-slate-200 hover:bg-slate-50" : "text-white border-white/20 hover:bg-white/10"}`}
            >
              <LogIn size={16} /> {isLoggedIn ? "Profil Saya" : "Portal Pengurus"}
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
                onOpenLogin();
              }}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold"
            >
              {isLoggedIn ? "Profil Saya" : "Portal Pengurus"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = ({ onOpenModal, isLoggedIn, userProfile, onOpenProfile }: { onOpenModal: () => void, isLoggedIn: boolean, userProfile: any, onOpenProfile: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-950">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-400/10 blur-[100px] rounded-full animate-pulse delay-700"></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
          alt="Recycling Workshop"
          className="w-full h-full object-cover opacity-30 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-emerald-300 text-[10px] font-black uppercase tracking-[0.2em] mb-10"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
              Bank Sampah Niaga • Berbasis Pesantren
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter mb-8">
              Pesantren <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Terpadu & Bersih</span>
            </h1>
            <p className="text-emerald-50/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
              Inisiatif <span className="text-emerald-300">{APP_CONFIG.name}</span> membangun ekosistem sirkular, mengelola limbah menjadi berkah dari bilik santri.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#shop"
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-5 rounded-[2rem] font-display font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 group active:scale-95"
              >
                Mulai Belanja <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#innovation"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-[2rem] font-display font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Jelajahi Inovasi
              </a>
            </div>
          </motion.div>

          {isLoggedIn ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="lg:flex justify-end hidden"
            >
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[4rem] w-full max-w-md text-white shadow-[0_50px_80px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                  <Recycle size={200} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center font-display font-black text-3xl shadow-2xl border-4 border-white/20">
                      {userProfile.name.substring(0, 1)}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-emerald-400 tracking-[0.3em] mb-1">Status Mudabbir</p>
                      <h4 className="text-2xl font-display font-black tracking-tighter leading-none">{userProfile.name}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-[9px] uppercase font-black text-emerald-400 tracking-widest mb-2 opacity-60">Tabungan</p>
                      <p className="text-xl font-display font-black leading-none">Rp {userProfile.balance.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-[9px] uppercase font-black text-emerald-400 tracking-widest mb-2 opacity-60">Item Terbeli</p>
                      <p className="text-xl font-display font-black leading-none">{userProfile.classesJoined.length} <span className="text-xs">Kelas</span></p>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenProfile}
                    className="w-full bg-white text-emerald-950 py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95"
                  >
                    Dashboard Profil <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="hidden lg:flex justify-end">
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative"
               >
                  <div className="w-80 h-80 rounded-[4rem] border-4 border-emerald-500/30 overflow-hidden p-4 rotate-6 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1593113503873-e4f1bc3c5747?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover rounded-[3rem]"
                    />
                  </div>
                  <div className="absolute -bottom-10 -left-20 bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <Coins size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sampah Jadi Uang</p>
                        <p className="text-lg font-display font-black text-slate-800">Cairkan Instan!</p>
                      </div>
                    </div>
                  </div>
               </motion.div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const AboutSection = ({ onSeeProfile }: { onSeeProfile: () => void }) => {
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
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
          
          <div className="lg:pl-10">
            <h2 className="text-emerald-600 font-display font-black uppercase tracking-[0.2em] text-xs mb-4">Mengenal Rindu BSN Al-Ihya</h2>
            <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Membangun Peradaban <br /> 
              <span className="text-emerald-500">Hijau Dari Bilik Santri</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic border-l-4 border-emerald-500 pl-6">
              "Rindu BSN Al-Ihya dikelola sepenuhnya oleh santri. Kami mengambil tanggung jawab penuh untuk menjemput sampah, memilahnya, and mengolahnya menjadi berkah ekonomi."
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-5 items-start p-6 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="font-display font-black text-xl text-slate-800 mb-1">Khidmat Lingkungan</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Menjaga kebersihan pesantren adalah bagian dari iman dan khidmat santri kepada alam.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-6 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h4 className="font-display font-black text-xl text-slate-800 mb-1">Inovasi Berkelanjutan</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Sampah bukan akhir, melainkan awal dari produk inovatif yang membantu operasional pesantren.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onSeeProfile}
              className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-600 transition-all active:scale-95 shadow-xl"
            >
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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((stat, i) => {
            const Icon = IconMap[stat.icon];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col p-8 rounded-[3rem] bg-slate-50 hover:bg-emerald-600 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-black/10 transition-colors"></div>
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-emerald-600 mb-8 shadow-xl shadow-slate-200 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Icon size={30} />
                </div>
                <div className="text-4xl font-display font-black text-slate-800 mb-2 group-hover:text-white transition-colors">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-emerald-100 transition-colors">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ onLearnMore }: { onLearnMore: (serviceTitle: string) => void }) => {
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
                <button 
                  onClick={() => onLearnMore(service.title)}
                  className="flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-4 transition-all"
                >
                  Pelajari Lebih Lanjut <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const InnovationSection = ({ onContactFounder }: { onContactFounder: () => void }) => {
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Innovation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              <button 
                onClick={onContactFounder}
                className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-left hover:bg-white/20 transition-all group"
              >
                <p className="italic text-emerald-200 mb-4 font-serif">
                  "Inovasi paving block dari plastik residu kami kini telah digunakan di taman-taman warga sebagai uji coba keberlanjutan."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">IH</div>
                    <div className="text-sm">
                      <p className="font-bold">Ihya Ulumudin</p>
                      <p className="text-white/40">Founder Rindu BSN Al-Ihya</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection = ({ classes, onRegister }: { classes: any[], onRegister: (className: string) => void }) => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-emerald-50/30 -skew-y-6 origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-display font-black uppercase tracking-[0.2em] text-xs mb-4">Kelas Kreatif Santri</h2>
            <h3 className="text-5xl font-display font-black text-slate-900 leading-[0.9] tracking-tighter">
              Tingkatkan <br />
              <span className="text-emerald-600 italic font-serif">Skill & Taqwa</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg border-l-4 border-emerald-500 pl-8 font-medium">
            Program beasiswa pelatihan untuk santri terpilih yang ingin berkontribusi aktif dalam kemandirian pesantren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {classes.map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[4rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all p-5 group flex flex-col h-full"
            >
              <div className="relative h-64 rounded-[3rem] overflow-hidden mb-8">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                  {cls.isNew && (
                    <div className="px-3 py-1 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg animate-pulse">
                      BUKA BARU
                    </div>
                  )}
                  {cls.videoLink && (
                    <div className="px-3 py-1 bg-emerald-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                      <Play size={10} /> VIDEO COURSE
                    </div>
                  )}
                  <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                    {cls.category}
                  </div>
                </div>
                <div className="absolute bottom-6 left-8 text-white">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                    <Calendar size={14} /> {cls.schedule}
                  </div>
                </div>
              </div>
              
              <div className="px-5 pb-5 flex-1 flex flex-col">
                <h4 className="text-3xl font-display font-black text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors leading-none tracking-tighter">{cls.title}</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3 font-medium">
                  {cls.desc}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-600 mb-8 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xs">IH</div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Mentor Utama</p>
                      <p className="text-slate-800 font-bold">{cls.mentor}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRegister(cls.title)}
                    className="w-full py-5 rounded-[2rem] bg-slate-900 text-white font-display font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                  >
                    Daftar Kelas <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = ({ news, onReadMore }: { news: any[], onReadMore: (newsTitle: string) => void }) => {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Kabar BSN</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Update Berita Terkini</h3>
          <p className="text-slate-500">Informasi seputar aktivitas dan inovasi terbaru di pesantren Al-Ihya.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, i) => (
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
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-emerald-600 text-xs font-black uppercase tracking-widest">{item.date}</p>
                  {(item.date === "Hari Ini" || item.isNew) && (
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black uppercase animate-pulse">Terbaru</span>
                  )}
                </div>
                <h4 className="text-xl font-black text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                <button 
                  onClick={() => onReadMore(item.title)}
                  className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-3 transition-all"
                >
                  Baca Selengkapnya <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsSection = ({ materials, onDownload, onRequest }: { 
  materials: any[], 
  onDownload: (mat: any) => void,
  onRequest: () => void 
}) => {
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
                {materials.map((mat) => (
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
                    <button 
                      onClick={() => onDownload(mat)}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Request Materi Baru?</h4>
              <p className="text-sm text-emerald-100/60 mb-6">Punya topik menarik yang ingin dibahas? Kirimkan usulan materi Anda kepada tim pengajar kami.</p>
              <button 
                onClick={onRequest}
                className="w-full bg-emerald-500 py-3 rounded-xl font-black hover:bg-emerald-400 transition-all active:scale-95 shadow-lg"
              >
                Hubungi Tim Edukasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeedbackSection = ({ onSendFeedback }: { onSendFeedback: (name: string, message: string) => void }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-black text-slate-800 mb-6">Kirim Saran & Feedback</h3>
        <p className="text-slate-500 mb-10">Bantu kami terus berbenah untuk menciptakan pesantren yang lebih hijau dan berkah.</p>
        <form 
          className="max-w-2xl mx-auto space-y-4" 
          onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            onSendFeedback(formData.get('name') as string, formData.get('message') as string);
            e.currentTarget.reset();
            alert("Terima kasih! Saran Anda telah kami terima."); 
          }}
        >
          <input 
            required
            name="name"
            type="text" 
            placeholder="Nama Lengkap Anda" 
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 bg-white shadow-sm" 
          />
          <textarea 
            required
            name="message"
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

const ShopSection = ({ products, onAddToCart, onBuyNow, onSeeAll }: { 
  products: any[],
  onAddToCart: (product: any) => void, 
  onBuyNow: (product: any) => void,
  onSeeAll: () => void 
}) => {
  return (
    <section id="shop" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-emerald-600 font-display font-black uppercase tracking-[0.2em] text-xs mb-4">Galeri Kreativitas</h2>
            <h3 className="text-5xl font-display font-black text-slate-900 leading-[0.9] tracking-tighter">Produk Inovasi <br /> <span className="text-emerald-500 italic">Karya Santri</span></h3>
          </div>
          <button 
            onClick={onSeeAll}
            className="flex items-center gap-3 font-display font-black text-xs uppercase tracking-widest text-slate-800 hover:text-emerald-600 transition-colors group"
          >
            Lihat Semua Produk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, i) => (
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
                  {product.isNew ? (
                    <div className="bg-emerald-600 px-3 py-1 rounded-full text-[10px] font-black text-white shadow-lg uppercase tracking-widest animate-bounce">
                      Produk Baru
                    </div>
                  ) : (
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-emerald-600 border border-emerald-100 shadow-sm uppercase tracking-widest">
                      Stok Tersedia
                    </div>
                  )}
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
                RINDU BSN <span className="text-emerald-500">AL-IHYA</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed mb-8">
              {APP_CONFIG.description}
            </p>
          <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${APP_CONFIG.contact.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={`mailto:${APP_CONFIG.contact.email}`}
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20"
              >
                <Mail size={24} />
              </a>
              <a 
                href={`https://wa.me/${APP_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Layanan</a></li>
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
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notifications, setNotifications] = useState<{id: number, type: 'order' | 'feedback', title: string, content: string, time: string, isRead: boolean}[]>([]);
  const [dynamicProducts, setDynamicProducts] = useState(PRODUCTS);
  const [dynamicClasses, setDynamicClasses] = useState(EDUCATION_CLASSES);
  const [dynamicNews, setDynamicNews] = useState(NEWS);
  const [dynamicMaterials, setDynamicMaterials] = useState(MATERIALS);
  const [cart, setCart] = useState<{product: any, quantity: number}[]>([]);
  const [selectedCartItems, setSelectedCartItems] = useState<number[]>([]); // Array of product IDs
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'payment'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<string>("Transfer Bank (BSI)");
  const [adminMode, setAdminMode] = useState<string | null>(null); // 'news', 'product', 'class', 'material'
  const [selectedFinanceMonth, setSelectedFinanceMonth] = useState(new Date().toLocaleDateString("id-ID", { month: 'long', year: 'numeric' }));
  const [editingItem, setEditingItem] = useState<{ type: string, id: number } | null>(null);
  const [totalWasteToday, setTotalWasteToday] = useState(1245.5); // Initial mockup value
  const [totalBalance, setTotalBalance] = useState(15750000); // Initial mockup value (15.75M)
  const [financialHistory, setFinancialHistory] = useState([
    { id: 1, date: "05 Mei 2026", user: "Santri Ahmad", amount: 150000, type: "Masuk", note: "Pembelian Tas Daur Ulang", method: "Transfer BSI" },
    { id: 2, date: "04 Mei 2026", user: "Asrama Al-Ihya", amount: 75000, type: "Masuk", note: "Pembelian Pupuk Organik", method: "Cash" },
  ]);
  
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
        if (existing.quantity >= product.stock) {
          alert(`Maaf, stok ${product.name} hanya tersedia ${product.stock} unit.`);
          return prev;
        }
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      if (product.stock <= 0) {
        alert(`Maaf, stok ${product.name} saat ini sedang kosong.`);
        return prev;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const cartTotal = cart
    .filter(item => selectedCartItems.includes(item.product.id))
    .reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const addNotification = (type: 'order' | 'feedback' | 'news' | 'report', title: string, content: string) => {
    const newNotif = {
      id: Date.now(),
      type,
      title,
      content,
      time: new Date().toLocaleString("id-ID", { hour: '2-digit', minute: '2-digit' }),
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleCartCheckout = () => {
    const selectedItems = cart.filter(item => selectedCartItems.includes(item.product.id));
    
    if (selectedItems.length === 0) {
      alert("Pilih item yang ingin dibeli terlebih dahulu!");
      return;
    }

    let text = `*PESANAN KERANJANG RINDU BSN AL-IHYA*\n`;
    text += `----------------------------------\n`;
    let orderSummary = "";
    selectedItems.forEach(item => {
      const line = `- ${item.product.name} x${item.quantity} (Rp ${(item.product.price * item.quantity).toLocaleString("id-ID")})\n`;
      text += line;
      orderSummary += line;
    });
    text += `----------------------------------\n`;
    text += `*Metode Pembayaran: ${paymentMethod}*\n`;
    text += `*Total Pembayaran: Rp ${cartTotal.toLocaleString("id-ID")}*\n\n`;
    text += `Nama: ${userProfile.name}\n`;
    text += `Lokasi: ${userProfile.dorm}\n`;
    text += `Catatan: Mohon diproses segera, Syukron.\n\n`;
    text += `_Terima kasih telah mendukung program sirkular Rindu BSN Al-Ihya._`;
    
    // Add notification for Admin
    addNotification('order', 'Pesanan Baru!', `Pesanan masuk senilai Rp ${cartTotal.toLocaleString("id-ID")} dari ${userProfile.name} (Bayar: ${paymentMethod})\n${orderSummary}`);
    
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
    
    // Remove only selected items from cart and deduct stock
    setDynamicProducts(prev => prev.map(p => {
      const purchased = selectedItems.find(i => i.product.id === p.id);
      return purchased ? { ...p, stock: Math.max(0, p.stock - purchased.quantity) } : p;
    }));

    setCart(prev => prev.filter(item => !selectedCartItems.includes(item.product.id)));
    setSelectedCartItems([]);
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  const [selectedClassId, setSelectedClassId] = useState("");
  const [paymentStep, setPaymentStep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedClass = dynamicClasses.find(c => c.title === selectedClassId);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const role = formData.get("role") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setTimeout(() => {
      if (role === "pengurus" && username === "pengurus" && password === "bsn2026") {
        setIsLoggedIn(true);
        setIsPengurus(true);
        setIsAdmin(true); 
        setUserProfile(prev => ({ ...prev, name: "Pengurus BSN", dorm: "Manajemen Unit BSN" }));
        setView('dashboard');
        setIsLoginOpen(false);
      } else if (role === "admin" && username === "admin" && password === "bsnops2026") {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setIsPengurus(false);
        setUserProfile(prev => ({ ...prev, name: "Admin BSN", dorm: "Operasional Bank Sampah" }));
        setView('dashboard');
        setIsLoginOpen(false);
      } else {
        alert("Kredensial tidak valid. Hanya Pengurus dan Admin yang diizinkan masuk.");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsPengurus(false);
    setView('home');
    setIsProfileOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState<{ title: string, content: string, type?: string } | null>(null);

  const openDetail = (title: string, content: string, type: string = 'info') => {
    setSelectedItem({ title, content, type });
  };

  const handleProcessOrder = (id: number) => {
    const notif = notifications.find(n => n.id === id);
    if (!notif) return;

    // Extract amount and details for financial history
    const amountMatch = notif.content.match(/Rp ([\d.]+)/);
    const amount = amountMatch ? parseInt(amountMatch[1].replace(/\./g, '')) : 0;
    
    // Improved regex to capture name more accurately from notifications
    // Notification content looks like: "Pesanan masuk senilai Rp 150.000 dari Santri Ahmad (Bayar: ...)\n..."
    const userNameMatch = notif.content.match(/dari (.*?)(?:\s\(|\s\n|$)/);
    const userName = userNameMatch ? userNameMatch[1] : "Santri";
    
    const methodMatch = notif.content.match(/Bayar: (.*?)\)/);
    const method = methodMatch ? methodMatch[1] : "Unknown";

    if (amount > 0) {
      setTotalBalance(prev => prev + amount);
      setFinancialHistory(prev => [{
        id: Date.now(),
        date: new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }),
        user: userName,
        amount: amount,
        type: "Masuk",
        note: notif.title === "Pendaftaran Kelas!" ? "Pendaftaran Kelas" : "Pembelian Produk",
        method: method
      }, ...prev]);
    }

    setNotifications(prev => prev.filter(n => n.id !== id));
    addNotification('feedback', 'Sistem', 'Pesanan Anda telah diproses oleh pengurus!');
    alert("Pesanan berhasil diproses! Saldo kas rekening telah diperbarui.");
  };

  const handleExportFinance = () => {
    const header = "ID,Tanggal,User,Keterangan,Metode,Jumlah,Tipe\n";
    const csvContent = financialHistory.map(h => 
      `${h.id},"${h.date}","${h.user}","${h.note}","${h.method}",${h.amount},"${h.type}"`
    ).join("\n");
    
    const blob = new Blob([header + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Laporan_Keuangan_Rindu_BSN_${new Date().toJSON().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Laporan keuangan berhasil diunduh dalam format CSV.");
  };

  const handleSubmitReport = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const reporter = formData.get('reporter') as string;
    const type = formData.get('type') as string;
    const amount = formData.get('amount') as string;
    const notes = formData.get('notes') as string;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      addNotification('feedback', 'Sistem', 'Laporan Anda telah diterima.');
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 2000);
    }, 1500);
  };

  const handlePaymentSuccess = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      if (selectedClass) {
        setUserProfile(prev => ({
          ...prev,
          classesJoined: [...prev.classesJoined, selectedClass.title]
        }));
        addNotification('order', 'Pendaftaran Kelas!', `Pendaftaran baru untuk kelas ${selectedClass.title} dari ${userProfile.name} (Saldo/DANA)`);
        
        // WhatsApp notification with video link
        const waText = `Halo ${userProfile.name}, pendaftaran Anda untuk kelas *${selectedClass.title}* telah berhasil! \n\nBerikut adalah link video materi Anda: \n${selectedClass.videoLink || 'Akan segera menyusul'} \n\nSelamat belajar!`;
        setTimeout(() => {
          window.open(`https://wa.me/${userProfile.phone || '6281234567890'}?text=${encodeURIComponent(waText)}`, "_blank");
        }, 1000);
      } else if (selectedProduct) {
        addNotification('order', 'Pembelian Produk!', `Pembelian produk ${selectedProduct.name} seharga Rp ${selectedProduct.price.toLocaleString("id-ID")} dari ${userProfile.name} (Saldo/DANA)`);
      }

      setTimeout(() => {
        setSubmitted(false);
        setIsRegisterOpen(false);
        setIsShopModalOpen(false);
        setPaymentStep(false);
        setSelectedClassId("");
        setSelectedProduct(null);
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
    const text = `Assalamu'alaikum, saya ingin memesan ${item} dari Rindu BSN Al-Ihya.`;
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
              { id: 'notifications', label: 'Notifikasi & Order', icon: Bell, role: 'pengurus' },
              { id: 'finance', label: 'Keuangan & Kas', icon: Wallet, role: 'pengurus' },
              { id: 'feedback', label: 'Saran & Feedback', icon: MessageCircle, role: 'pengurus' },
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
              <p className="text-slate-500">Kelola operasional harian Rindu BSN Al-Ihya</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Kas Masuk Hari Ini</p>
                <p className="text-xl font-black text-emerald-600">Rp {financialHistory.filter(h => h.date.includes(new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long' }))).reduce((s, h) => s + h.amount, 0).toLocaleString("id-ID")}</p>
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
                    {financialHistory.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><ShoppingBag size={14} /></div>
                        <div>
                          <p className="font-bold text-slate-700">Pemasukkan dari {h.user}</p>
                          <p className="text-[10px] text-slate-400">{h.date}</p>
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
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">{adminMode === 'notifications' ? 'Notifikasi & Pesanan' : `Kelola ${adminMode}`}</h2>
                  <button onClick={() => setAdminMode(null)} className="text-slate-400 hover:text-slate-600 flex items-center gap-2 font-bold text-sm">
                    TUTUP PANEL <X size={18} />
                  </button>
                </div>

                {adminMode === 'notifications' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                      {notifications.length === 0 ? (
                        <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                          <Bell size={80} className="mx-auto text-slate-200 mb-6 animate-bounce-slow" />
                          <h4 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tighter mb-2">Semua Bersih!</h4>
                          <p className="text-slate-400 text-sm font-medium">Belum ada pesanan atau feedback baru saat ini.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {notifications.map(notif => (
                            <motion.div 
                              key={notif.id}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className={`p-1 rounded-[2.5rem] border transition-all hover:shadow-2xl overflow-hidden group ${
                                notif.type === 'order' ? 'bg-emerald-50/50 border-emerald-100 hover:border-emerald-300' : 
                                'bg-blue-50/50 border-blue-100 hover:border-blue-300'
                              }`}
                            >
                              <div className="bg-white p-8 rounded-[2.2rem] flex flex-col md:flex-row gap-8 items-start">
                                <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform ${
                                  notif.type === 'order' ? 'bg-emerald-600 text-white shadow-emerald-200' : 
                                  'bg-blue-600 text-white shadow-blue-200'
                                }`}>
                                  {notif.type === 'order' ? <ShoppingBag size={32} /> : 
                                   <MessageCircle size={32} />}
                                </div>
                                <div className="flex-1 w-full">
                                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                    <div>
                                      <div className="flex items-center gap-3 mb-1">
                                        <h5 className="font-display font-black text-xl text-slate-800 tracking-tighter capitalize">{notif.title}</h5>
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                          notif.type === 'order' ? 'bg-emerald-100 text-emerald-700' : 
                                          'bg-blue-100 text-blue-700'
                                        }`}>
                                          {notif.type === 'order' ? 'Pesanan Baru' : 
                                           'Feedback'}
                                        </span>
                                      </div>
                                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={12} /> {notif.time}
                                      </p>
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                      {notif.type === 'order' && (
                                        <button 
                                          onClick={() => handleProcessOrder(notif.id)}
                                          className="flex-1 md:flex-none px-6 py-3 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95"
                                        >
                                          Proses Sekarang
                                        </button>
                                      )}
                                      <button 
                                        onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
                                        className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all border border-slate-100"
                                      >
                                        <Trash2 size={18} />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="bg-slate-50/50 p-6 rounded-[1.5rem] border border-slate-100/50">
                                    <p className="text-slate-600 text-sm leading-relaxed font-bold whitespace-pre-line">
                                      {notif.content}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h4 className="font-display font-black uppercase text-[10px] tracking-widest mb-8 text-emerald-400">Ringkasan Hari Ini</h4>
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <span className="text-white/60 font-medium uppercase text-[10px] tracking-widest">Saldo Rekening Kas</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-white/30 text-lg font-bold italic">Rp</span>
                              <span className="text-4xl font-display font-black text-emerald-400">{totalBalance.toLocaleString("id-ID")}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60 font-medium uppercase text-[10px] tracking-widest">Pesanan Baru</span>
                            <span className="text-2xl font-display font-black text-emerald-400">{notifications.filter(n => n.type === 'order').length}</span>
                          </div>
                          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                            <p className="text-[10px] uppercase font-black text-emerald-400 mb-1">Total Sampah Terkumpul</p>
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-display font-black text-white">{totalWasteToday.toLocaleString("id-ID")}</span>
                              <span className="text-emerald-400 font-bold text-sm">Kg</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60 font-medium uppercase text-[10px] tracking-widest">Feedback</span>
                            <span className="text-3xl font-display font-black text-blue-400">{notifications.filter(n => n.type === 'feedback').length}</span>
                          </div>
                          <div className="pt-8 border-t border-white/10">
                            <p className="text-[10px] text-white/30 leading-relaxed font-bold italic text-center">
                              "Kedisiplinan adalah kunci kesuksesan bersama."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-emerald-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-emerald-200">
                        <h4 className="font-display font-black uppercase text-[10px] tracking-widest mb-4">Butuh Bantuan?</h4>
                        <p className="text-sm text-emerald-100 mb-6 font-medium">Hubungi Admin Pusat jika terjadi kendala pada sistem atau database santri.</p>
                        <button className="w-full bg-white text-emerald-600 py-4 rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-50 transition-colors">WhatsApp Support</button>
                      </div>
                    </div>
                  </div>
                ) : adminMode === 'finance' ? (
                  <div className="space-y-8 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Total Saldo Kas</p>
                        <h4 className="text-3xl font-display font-black text-slate-800">Rp {totalBalance.toLocaleString("id-ID")}</h4>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600">
                          <TrendingUp size={14} /> +12% dari bulan lalu
                        </div>
                      </div>
                      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Pemasukkan Hari Ini</p>
                        <h4 className="text-3xl font-display font-black text-slate-800">
                          Rp {financialHistory
                            .filter(h => h.date.includes(new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long' })))
                            .reduce((s, h) => s + h.amount, 0)
                            .toLocaleString("id-ID")
                          }
                        </h4>
                        <p className="mt-4 text-xs font-bold text-slate-400 italic">Berdasarkan data input terbaru</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Transaksi Terakhir</p>
                        <h4 className="text-3xl font-display font-black text-slate-800">{financialHistory.length} Transaksi</h4>
                        <p className="mt-4 text-xs font-bold text-slate-400 italic">Terekam dalam database</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm">
                      <div className="p-10 border-b border-slate-100 flex justify-between items-center">
                        <div>
                          <h4 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tighter">Jurnal Keuangan Bulanan</h4>
                          <p className="text-slate-400 text-sm font-medium">Catatan otomatis dari hasil penjualan marketplace dan pendaftaran kelas</p>
                        </div>
                        <div className="flex gap-4">
                          <select 
                            value={selectedFinanceMonth}
                            onChange={(e) => setSelectedFinanceMonth(e.target.value)}
                            className="px-6 py-3 bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none border border-slate-200 focus:border-emerald-500"
                          >
                             <option>{new Date().toLocaleDateString("id-ID", { month: 'long', year: 'numeric' })}</option>
                             <option>April 2026</option>
                             <option>Maret 2026</option>
                          </select>
                          <button 
                            onClick={handleExportFinance}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                          >
                            <FileText size={16} /> Export CSV
                          </button>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                              <th className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tanggal</th>
                              <th className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Santri/Pelanggan</th>
                              <th className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Item / Keterangan</th>
                              <th className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">Metode Bayar</th>
                              <th className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Jumlah</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                            {financialHistory
                              .filter(item => {
                                const [selMonth, selYear] = selectedFinanceMonth.split(' ');
                                return item.date.includes(selMonth) && item.date.includes(selYear);
                              })
                              .map((item) => (
                              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-6 px-8 text-xs font-bold text-slate-500">{item.date}</td>
                                <td className="py-6 px-8">
                                  <p className="text-sm font-black text-slate-800">{item.user}</p>
                                </td>
                                <td className="py-6 px-8">
                                  <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase rounded-lg border border-emerald-100">Masuk</span>
                                    <span className="text-sm font-medium text-slate-600">{item.note}</span>
                                  </div>
                                </td>
                                <td className="py-6 px-8">
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.method}</span>
                                </td>
                                <td className="py-6 px-8 text-right">
                                  <span className="text-sm font-black text-emerald-600">Rp {item.amount.toLocaleString("id-ID")}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-black text-slate-800 uppercase text-sm tracking-widest">{editingItem ? `Edit ${adminMode}` : `Tambah ${adminMode} Baru`}</h4>
                        {editingItem && (
                          <button 
                            onClick={() => {
                              setEditingItem(null);
                              const form = document.getElementById('admin-form') as HTMLFormElement;
                              if (form) form.reset();
                            }}
                            className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-widest"
                          >
                            Batal Edit
                          </button>
                        )}
                      </div>
                      <form 
                        id="admin-form"
                        className="space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const title = formData.get('title') as string;
                          const desc = formData.get('desc') as string;
                          const price = formData.get('price') ? parseInt(formData.get('price') as string) : 0;
                          const category = formData.get('category') as string;
                          const image = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800";

                          if (editingItem) {
                            const vLink = formData.get('videoLink') as string;
                            switch(adminMode) {
                              case 'news':
                                setDynamicNews(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, excerpt: desc.substring(0, 100) + '...', desc, category: category || item.category } : item));
                                break;
                              case 'product':
                                setDynamicProducts(prev => prev.map(item => item.id === editingItem.id ? { ...item, name: title, desc, price: price || item.price } : item));
                                break;
                              case 'class':
                                setDynamicClasses(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, desc, category: category || item.category, price: price || item.price, videoLink: vLink } : item));
                                break;
                              case 'material':
                                setDynamicMaterials(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, type: category || item.type } : item));
                                break;
                            }
                            addNotification('feedback', 'Sistem', `${adminMode} berhasil diperbarui.`);
                          } else {
                            switch(adminMode) {
                              case 'news':
                                setDynamicNews(prev => [{ id: Date.now(), title, excerpt: desc.substring(0, 100) + '...', desc, date: "Hari Ini", image, category: category || "Berita", isNew: true }, ...prev]);
                                break;
                              case 'product':
                                const stockValue = parseInt(formData.get('stock') as string) || 0;
                                setDynamicProducts(prev => [{ id: Date.now(), name: title, desc, price: price || 15000, image, stock: stockValue, isNew: true }, ...prev]);
                                break;
                              case 'class':
                                const vLink = formData.get('videoLink') as string;
                                setDynamicClasses(prev => [{ id: Date.now(), title, desc, category: category || "Umum", image, schedule: "Jadwal Segera", price: price || 0, isNew: true, videoLink: vLink }, ...prev]);
                                break;
                              case 'material':
                                setDynamicMaterials(prev => [{ id: Date.now(), title, type: category || "PDF", size: "2.4 MB" }, ...prev]);
                                break;
                            }
                            addNotification('feedback', 'Sistem', `Konten ${adminMode} berhasil dipublikasikan ke Beranda.`);
                          }
                          
                          e.currentTarget.reset();
                          setEditingItem(null);
                          setAdminMode(null);
                        }}
                      >
                        <div>
                          <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Judul / Nama Item</label>
                          <input 
                            required 
                            name="title" 
                            type="text" 
                            key={editingItem ? `edit-${editingItem.id}` : 'new'}
                            defaultValue={editingItem ? (
                              adminMode === 'news' ? dynamicNews.find(i => i.id === editingItem.id)?.title :
                              adminMode === 'product' ? dynamicProducts.find(i => i.id === editingItem.id)?.name :
                              adminMode === 'class' ? dynamicClasses.find(i => i.id === editingItem.id)?.title :
                              adminMode === 'material' ? dynamicMaterials.find(i => i.id === editingItem.id)?.title : ''
                            ) : ''}
                            placeholder={`Contoh: Promo Produk ${adminMode} Baru`} 
                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none transition-all" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Konten / Deskripsi</label>
                          <textarea 
                            required 
                            name="desc" 
                            key={editingItem ? `edit-desc-${editingItem.id}` : 'new-desc'}
                            defaultValue={editingItem ? (
                              adminMode === 'news' ? dynamicNews.find(i => i.id === editingItem.id)?.desc :
                              adminMode === 'product' ? dynamicProducts.find(i => i.id === editingItem.id)?.desc :
                              adminMode === 'class' ? dynamicClasses.find(i => i.id === editingItem.id)?.desc : ''
                            ) : ''}
                            placeholder="Tuliskan detail selengkap mungkin agar nasabah tertarik..." 
                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none transition-all h-24 lg:h-32"
                          ></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Harga / Biaya (Rp)</label>
                            <input 
                              name="price" 
                              type="number" 
                              key={editingItem ? `edit-price-${editingItem.id}` : 'new-price'}
                              defaultValue={editingItem ? (
                                adminMode === 'product' ? dynamicProducts.find(i => i.id === editingItem.id)?.price :
                                adminMode === 'class' ? dynamicClasses.find(i => i.id === editingItem.id)?.price : 0
                              ) : 0}
                              placeholder="Rp 0" 
                              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Kategori / Tipe</label>
                            <input 
                              name="category" 
                              type="text" 
                              key={editingItem ? `edit-cat-${editingItem.id}` : 'new-cat'}
                              defaultValue={editingItem ? (
                                adminMode === 'news' ? dynamicNews.find(i => i.id === editingItem.id)?.category :
                                adminMode === 'class' ? dynamicClasses.find(i => i.id === editingItem.id)?.category :
                                adminMode === 'material' ? dynamicMaterials.find(i => i.id === editingItem.id)?.type : ''
                              ) : ''}
                              placeholder="Contoh: Kriya, PDF, Kajian" 
                              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none" 
                            />
                          </div>
                          {adminMode === 'class' && (
                            <div className="col-span-2">
                              <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Link Video (YouTube/Lainnya)</label>
                              <input 
                                name="videoLink" 
                                type="url" 
                                key={editingItem ? `edit-video-${editingItem.id}` : 'new-video'}
                                defaultValue={editingItem ? dynamicClasses.find(i => i.id === editingItem.id)?.videoLink : ''}
                                placeholder="https://youtube.com/..." 
                                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none" 
                              />
                            </div>
                          )}
                          {adminMode === 'product' && (
                            <div>
                              <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide">Jumlah Stok</label>
                              <input 
                                name="stock" 
                                type="number" 
                                key={editingItem ? `edit-stock-${editingItem.id}` : 'new-stock'}
                                defaultValue={editingItem ? dynamicProducts.find(i => i.id === editingItem.id)?.stock : 10}
                                placeholder="0" 
                                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none" 
                              />
                            </div>
                          )}
                        </div>
                        <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100">
                          {editingItem ? 'Simpan Perubahan' : 'Publikasikan Sekarang'} <PlusCircle size={22} />
                        </button>
                      </form>
                    </div>

                    <div className="flex flex-col h-full bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 overflow-hidden">
                      <h4 className="font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest text-center border-b pb-4">Daftar {adminMode} Terpasang</h4>
                      <div className="flex-1 overflow-y-auto space-y-4 max-h-[600px] pr-2 custom-scrollbar">
                        {adminMode === 'news' && dynamicNews.map(item => (
                          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center group">
                            <div className="flex-1 mr-4">
                              <p className="font-bold text-slate-800 line-clamp-1">{item.title}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.date} • {item.category}</p>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => setEditingItem({ type: 'news', id: item.id })} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100"><Pencil size={16} /></button>
                              <button onClick={() => setDynamicNews(prev => prev.filter(i => i.id !== item.id))} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"><Trash2 size={16} /></button>
                            </div>
                          </div>
                        ))}
                        {adminMode === 'product' && dynamicProducts.map(item => (
                          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center group">
                            <div className="flex-1 mr-4">
                              <p className="font-bold text-slate-800 line-clamp-1">{item.name}</p>
                              <div className="flex items-center gap-2">
                                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Rp {item.price.toLocaleString("id-ID")}</p>
                                <span className="text-[8px] px-1.5 py-0.5 bg-slate-50 text-slate-400 border border-slate-100 rounded-full">Stok: {item.stock}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => setEditingItem({ type: 'product', id: item.id })} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100"><Pencil size={16} /></button>
                              <button onClick={() => setDynamicProducts(prev => prev.filter(i => i.id !== item.id))} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"><Trash2 size={16} /></button>
                            </div>
                          </div>
                        ))}
                        {adminMode === 'class' && dynamicClasses.map(item => (
                          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center group">
                            <div className="flex-1 mr-4">
                              <p className="font-bold text-slate-800 line-clamp-1">{item.title}</p>
                              <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{item.schedule}</p>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => setEditingItem({ type: 'class', id: item.id })} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100"><Pencil size={16} /></button>
                              <button onClick={() => setDynamicClasses(prev => prev.filter(i => i.id !== item.id))} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"><Trash2 size={16} /></button>
                            </div>
                          </div>
                        ))}
                        {adminMode === 'material' && dynamicMaterials.map(item => (
                          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center group">
                            <div className="flex-1 mr-4">
                              <p className="font-bold text-slate-800 line-clamp-1">{item.title}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.type} • {item.size}</p>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => setEditingItem({ type: 'material', id: item.id })} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100"><Pencil size={16} /></button>
                              <button onClick={() => setDynamicMaterials(prev => prev.filter(i => i.id !== item.id))} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"><Trash2 size={16} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <p className="text-[10px] text-slate-400 font-bold text-center leading-relaxed italic">
                          "Hover kursor pada item untuk memunculkan tombol edit dan hapus."
                        </p>
                      </div>
                    </div>
                  </div>
                )}
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
        <AboutSection onSeeProfile={() => openDetail("Profil Rindu BSN Al-Ihya", "Rindu BSN Al-Ihya adalah unit usaha mandiri milik Pesantren Al-Ihya yang fokus pada pengelolaan limbah sirkular. Kami memiliki visi menciptakan lingkungan pesantren zero-waste sekaligus memberdayakan ekonomi santri melalui produk-produk daur ulang inovatif.")} />
        <StatsSection />
        <ServicesSection onLearnMore={(title) => {
          const desc = SERVICES.find(s => s.title === title)?.description || "";
          openDetail(title, desc + "\n\nLayanan ini dikelola oleh tim profesional santri dengan standar kualitas tinggi yang menjamin kepuasan nasabah dan kebersihan lingkungan.", "service");
        }} />
        

        <EducationSection 
          classes={dynamicClasses}
          onRegister={handleRegisterClick} 
        />
        <ShopSection 
          products={dynamicProducts}
          onAddToCart={addToCart} 
          onBuyNow={handleBuyClick} 
          onSeeAll={() => setIsAllProductsOpen(true)} 
        />
        <NewsSection 
          news={dynamicNews} 
          onReadMore={(title) => {
            const item = dynamicNews.find(n => n.title === title);
            openDetail(title, item?.excerpt + "\n\nSelengkapnya: " + item?.desc || "", "news");
          }}
        />
        <MaterialsSection 
          materials={dynamicMaterials} 
          onDownload={(mat) => alert(`Mengunduh materi: ${mat.title}\nFormat: ${mat.type}\nUkuran: ${mat.size}\n\nFile Anda akan segera tersedia di folder unduhan (Simulasi).`)}
          onRequest={() => openDetail("Request Materi", "Silakan hubungi tim kurikulum kami untuk pengajuan materi baru terkait lingkungan hidup dan kewirausahaan santri.", "request")}
        />
        <InnovationSection onContactFounder={() => openDetail("Catatan Founder", "Inovasi adalah ruh dari setiap pergerakan kami. Kami percaya bahwa sampah plastik bukanlah musuh, melainkan sumber daya yang belum berada di tangan yang tepat. Melalui teknologi pavblok, kami ingin membuktikan bahwa pesantren adalah inkubator solusi umat.", "innovation")} />
        <FeedbackSection onSendFeedback={(name, message) => addNotification('feedback', `Feedback dari ${name}`, message)} />
        
        {/* Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
              >
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                      {selectedItem.type || 'Detail'}
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="p-2 bg-slate-100 rounded-2xl text-slate-400 hover:text-slate-600 transition-colors">
                      <X size={24} />
                    </button>
                  </div>
                  <h3 className="text-4xl font-display font-black text-slate-800 mb-8 leading-tight tracking-tighter">{selectedItem.title}</h3>
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <p className="text-slate-600 text-lg leading-relaxed font-medium whitespace-pre-line italic">
                      "{selectedItem.content}"
                    </p>
                  </div>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => {
                        openWhatsAppOrder(`Tanya tentang: ${selectedItem.title}`);
                        setSelectedItem(null);
                      }}
                      className="flex-1 bg-emerald-600 text-white py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-100 flex items-center justify-center gap-3"
                    >
                      Tanya Lanjut (WA) <MessageCircle size={18} />
                    </button>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="flex-1 bg-slate-900 text-white py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
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
                  Mari menjaga kesucian dan kebersihan lingkungan pesantren bersama. Mulailah gaya hidup ramah lingkungan dari bilik santri.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => openWhatsAppOrder("Kerjasama Zero Waste")}
                    className="bg-white text-emerald-800 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Hubungi Pengurus
                  </button>
                  <button 
                    onClick={() => openWhatsAppOrder("Konsultasi Pengelolaan Sampah")}
                    className="bg-emerald-500/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all active:scale-95"
                  >
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
                      <input 
                        required
                        type="email" 
                        placeholder="Alamat Email (untuk pemberitahuan)" 
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
                        onClick={handlePaymentSuccess}
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
                        onClick={handlePaymentSuccess}
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
                  {dynamicProducts.map((product) => (
                    <div key={product.id} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-emerald-600 shadow-sm border border-emerald-100">
                            Rp {product.price.toLocaleString("id-ID")}
                          </div>
                          <div className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm border ${product.stock > 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                            {product.stock > 0 ? `Stok: ${product.stock}` : 'Habis'}
                          </div>
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
                            disabled={product.stock <= 0}
                            className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border ${product.stock > 0 ? 'bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white' : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'}`}
                          >
                            <ShoppingCart size={14} /> {product.stock > 0 ? '+KERANJANG' : 'STOK HABIS'}
                          </button>
                          <button 
                            onClick={() => { if(product.stock > 0) handleBuyClick(product); }}
                            disabled={product.stock <= 0}
                            className={`w-full py-3 rounded-xl font-black text-xs transition-all flex items-center justify-center shadow-lg shadow-none border ${product.stock > 0 ? 'bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600' : 'bg-slate-200 text-white border-slate-200 cursor-not-allowed'}`}
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
                    {checkoutStep === 'cart' ? <ShoppingCart size={20} /> : <CreditCard size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-800">
                      {checkoutStep === 'cart' ? 'Keranjang Belanja' : 'Pembayaran'}
                    </h3>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest">
                      {checkoutStep === 'cart' ? `${cart.length} Item Tersimpan` : `${selectedCartItems.length} Item Terpilih`}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    setTimeout(() => setCheckoutStep('cart'), 300);
                  }} 
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                >
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {checkoutStep === 'cart' ? (
                  <>
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-20">
                        <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                          <ShoppingBag size={40} />
                        </div>
                        <p className="text-slate-500 font-bold">Keranjang Anda masih kosong</p>
                        <button onClick={() => setIsCartOpen(false)} className="mt-4 text-emerald-600 font-black text-sm">Mulai Belanja Sekarang</button>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center bg-emerald-50 p-4 rounded-2xl border border-emerald-100 mb-6">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={selectedCartItems.length === cart.length} 
                              onChange={(e) => {
                                if (e.target.checked) setSelectedCartItems(cart.map(i => i.product.id));
                                else setSelectedCartItems([]);
                              }}
                              className="w-5 h-5 accent-emerald-500 rounded-lg cursor-pointer" 
                            />
                            <span className="text-sm font-black text-emerald-800 uppercase tracking-widest">Pilih Semua</span>
                          </label>
                          <span className="text-[10px] bg-emerald-500 text-white px-2 py-1 rounded-full font-bold">{selectedCartItems.length} terpilih</span>
                        </div>
                        
                        {cart.map((item) => (
                          <motion.div key={item.product.id} layout className={`flex gap-4 p-4 rounded-2xl border transition-all ${selectedCartItems.includes(item.product.id) ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-100/50' : 'bg-slate-50 border-slate-100 opacity-80'}`}>
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                              <img src={item.product.image} className="w-full h-full object-cover" />
                              <div className="absolute top-1 left-1">
                                <input 
                                  type="checkbox" 
                                  checked={selectedCartItems.includes(item.product.id)}
                                  onChange={() => {
                                    if (selectedCartItems.includes(item.product.id)) {
                                      setSelectedCartItems(selectedCartItems.filter(id => id !== item.product.id));
                                    } else {
                                      setSelectedCartItems([...selectedCartItems, item.product.id]);
                                    }
                                  }}
                                  className="w-5 h-5 accent-emerald-600 rounded-lg shadow-lg cursor-pointer" 
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-800 text-sm mb-0.5 line-clamp-1">{item.product.name}</h4>
                              <div className="flex items-center gap-2 mb-3">
                                <p className="text-emerald-600 font-black text-xs">Rp {item.product.price.toLocaleString("id-ID")}</p>
                                <span className="text-[9px] text-slate-400 font-bold border border-slate-200 px-1.5 rounded-full">Stok: {item.product.stock}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => {
                                      setCart(prev => prev.map(i => i.product.id === item.product.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
                                    }}
                                    className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 text-xs font-bold"
                                  >-</button>
                                  <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                  <button 
                                    onClick={() => {
                                      setCart(prev => prev.map(i => i.product.id === item.product.id ? { ...i, quantity: Math.min(item.product.stock, i.quantity + 1) } : i))
                                    }}
                                    className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors text-xs font-bold ${item.quantity >= item.product.stock ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-600'}`}
                                  >+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.product.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Ringkasan Belanja</h4>
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3">
                        {cart.filter(i => selectedCartItems.includes(i.product.id)).map(item => (
                          <div key={item.product.id} className="flex justify-between items-center text-sm">
                            <span className="text-slate-600 font-medium">{item.product.name} x {item.quantity}</span>
                            <span className="font-bold text-slate-800">Rp {(item.product.price * item.quantity).toLocaleString("id-ID")}</span>
                          </div>
                        ))}
                        <div className="pt-3 mt-3 border-t border-slate-200 flex justify-between items-center">
                          <span className="text-slate-500 font-bold">Total Pembayaran</span>
                          <span className="text-lg font-black text-emerald-600">Rp {cartTotal.toLocaleString("id-ID")}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Pilih Metode Pembayaran</p>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { id: 'bsi', label: 'Transfer Bank (BSI)', icon: Wallet, desc: '9123847291 (An. Rindu BSN)' },
                          { id: 'wallet', label: 'E-Wallet (Dana/OVO)', icon: CreditCard, desc: '0821-2345-6789' },
                          { id: 'cash', label: 'Tunai di Kantin BSN', icon: DollarSign, desc: 'Bayar saat ambil barang' },
                          { id: 'points', label: 'Poin Rindu BSN', icon: Award, desc: 'Gunakan saldo poin harian' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setPaymentMethod(method.label)}
                            className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${paymentMethod === method.label ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-100/50 scale-[1.02]' : 'bg-white border-slate-200 hover:border-emerald-200'}`}
                          >
                            <div className="flex items-center gap-4 text-left">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === method.label ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <method.icon size={20} />
                              </div>
                              <div>
                                <p className={`text-sm font-black ${paymentMethod === method.label ? 'text-emerald-700' : 'text-slate-700'}`}>{method.label}</p>
                                <p className="text-[10px] text-slate-400 font-medium">{method.desc}</p>
                              </div>
                            </div>
                            {paymentMethod === method.label && (
                              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t bg-slate-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                  {checkoutStep === 'cart' ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-2 px-2">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Terpilih ({selectedCartItems.length} item)</p>
                          <p className="text-xl font-black text-slate-800">Rp {cartTotal.toLocaleString("id-ID")}</p>
                        </div>
                        <button 
                          disabled={selectedCartItems.length === 0}
                          onClick={() => setCheckoutStep('payment')}
                          className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center gap-3 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                        >
                          Checkout <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setCheckoutStep('cart')}
                        className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-600 transition-all"
                      >
                        <ShoppingBag size={24} />
                      </button>
                      <button 
                        onClick={handleCartCheckout}
                        className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3"
                      >
                        Konfirmasi & Bayar <ArrowRight size={22} />
                      </button>
                    </div>
                  )}
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
                      <p className="text-xs text-emerald-200 uppercase font-black tracking-wider">{isAdmin ? "Total Kas BSN" : "Status Aktif Santri"}</p>
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
                                  { icon: ShoppingBag, title: "Pembelian Tas Kitab", date: "Hari ini", amount: "Rp 45.000" },
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

                        {adminMode === 'notifications' && (
                          <div className="space-y-4">
                            {notifications.length === 0 ? (
                              <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200">
                                <Bell size={48} className="mx-auto text-slate-200 mb-4" />
                                <p className="text-slate-400 font-bold">Belum ada notifikasi baru</p>
                              </div>
                            ) : (
                              notifications.map(notif => (
                                <div key={notif.id} className={`p-5 rounded-3xl border ${
                                  notif.type === 'order' ? 'bg-emerald-50 border-emerald-100' : 
                                  notif.type === 'news' ? 'bg-purple-50 border-purple-100' :
                                  notif.type === 'report' ? 'bg-indigo-50 border-indigo-100' :
                                  'bg-blue-50 border-blue-100'
                                } flex gap-4`}>
                                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                                    notif.type === 'order' ? 'bg-emerald-500 text-white' : 
                                    notif.type === 'news' ? 'bg-purple-500 text-white' :
                                    notif.type === 'report' ? 'bg-indigo-500 text-white' :
                                    'bg-blue-500 text-white'
                                  }`}>
                                    {notif.type === 'order' ? <ShoppingBag size={20} /> : 
                                     notif.type === 'news' ? <Newspaper size={20} /> :
                                     notif.type === 'report' ? <Recycle size={20} /> :
                                     <MessageCircle size={20} />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                      <h5 className="font-black text-slate-800 uppercase text-xs tracking-tighter">{notif.title}</h5>
                                      <span className="text-[10px] font-bold text-slate-400">{notif.time}</span>
                                    </div>
                                    <p className="text-slate-600 text-xs whitespace-pre-line leading-relaxed">{notif.content}</p>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        )}

                        {adminMode && adminMode !== 'notifications' && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
                            <div className="flex justify-between items-center mb-4">
                              <h5 className="font-black text-slate-800 uppercase text-xs">Form Input {adminMode}</h5>
                              <button onClick={() => setAdminMode(null)} className="text-slate-400 hover:text-slate-600">
                                <X size={16} />
                              </button>
                            </div>
                            <form 
                              className="space-y-3"
                              onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const title = formData.get('title') as string;
                                const desc = formData.get('desc') as string;
                                const price = formData.get('price') ? parseInt(formData.get('price') as string) : 0;
                                const category = formData.get('category') as string;
                                const image = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"; 

                                switch(adminMode) {
                                  case 'news':
                                    setDynamicNews(prev => [{
                                      id: Date.now(),
                                      title,
                                      excerpt: desc.substring(0, 100) + '...',
                                      desc,
                                      date: "Hari Ini",
                                      image,
                                      category: category || "Terbaru",
                                      isNew: true
                                    }, ...prev]);
                                    break;
                                  case 'product':
                                    setDynamicProducts(prev => [{
                                      id: Date.now(),
                                      name: title,
                                      desc,
                                      price: price || 15000,
                                      image,
                                      stock: 10,
                                      isNew: true
                                    }, ...prev]);
                                    break;
                                  case 'class':
                                    setDynamicClasses(prev => [{
                                      id: Date.now(),
                                      title,
                                      desc,
                                      category: category || "Umum",
                                      image,
                                      schedule: "Jadwal Segera",
                                      price: price || 0,
                                      isNew: true
                                    }, ...prev]);
                                    break;
                                  case 'material':
                                    setDynamicMaterials(prev => [{
                                      id: Date.now(),
                                      title,
                                      type: category || "PDF",
                                      size: "1.2 MB"
                                    }, ...prev]);
                                    break;
                                }
                                e.currentTarget.reset();
                                setAdminMode(null);
                                setIsProfileOpen(false);
                                addNotification('news', 'Sistem', `Update ${adminMode} baru telah diterbitkan.`);
                                alert(`${adminMode} successfully published!`);
                              }}
                            >
                              <div className="space-y-4">
                                <input required name="title" type="text" placeholder={`Judul ${adminMode}`} className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500" />
                                <textarea required name="desc" placeholder={`Keterangan ${adminMode}`} className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 h-24"></textarea>
                                <div className="grid grid-cols-2 gap-4">
                                  <input name="price" type="number" placeholder="Harga/Biaya (Rp)" className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none" />
                                  <input name="category" type="text" placeholder="Kategori/Label" className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none" />
                                </div>
                              </div>
                              <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-black mt-4 shadow-lg hover:shadow-emerald-200 transition-all">
                                Publikasikan Item
                              </button>
                            </form>
                          </motion.div>
                        )}

                        <div>
                          <p className="text-sm font-black text-slate-400 uppercase mb-3 text-emerald-600">Pesanan Masuk Terbaru (Pending)</p>
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
                                  <p className="font-bold text-slate-700 text-sm">Pembelian Produk</p>
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
                                  <p className="font-bold text-slate-700 text-sm">Lulus Kelas Edukasi</p>
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="0812xxxx" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="santri@email.com" 
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
                        onClick={handlePaymentSuccess}
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
                        onClick={handlePaymentSuccess}
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
                  <h3 className="text-2xl font-black text-slate-800">Masuk Rindu BSN Al-Ihya</h3>
                  <p className="text-slate-400 text-sm">Akses portal pengelolaan bank sampah</p>
                </div>

                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl mb-6">
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-2">Default Credentials:</p>
                    <div className="space-y-1 text-xs text-emerald-700 font-medium">
                      <p>• {loginRole === 'pengurus' ? 'Pengurus: pengurus / bsn2026' : 'Admin: admin / bsnops2026'}</p>
                    </div>
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
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      required
                      name="username"
                      placeholder="Username / Kantor" 
                      className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium"
                    />
                  </div>
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
                  <div className="flex items-center justify-between text-xs py-2 px-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-500 select-none">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      Ingat Saya
                    </label>
                    <a href="#" className="text-emerald-600 font-bold hover:underline">Lupa Sandi?</a>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-emerald-200 active:scale-95 mt-4 flex items-center justify-center"
                  >
                    {isSubmitting ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Masuk Sekarang"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
