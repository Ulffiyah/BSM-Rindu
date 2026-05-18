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
  CheckCircle,
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
  Settings,
  TrendingUp,
  UserCircle,
  BarChart3,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { APP_CONFIG, STATISTICS, WASTE_PRICES, SERVICES, EDUCATION_CLASSES, PRODUCTS, NEWS, MATERIALS } from "./constants";

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


const Hero = ({ onOpenModal, isLoggedIn, userProfile, onOpenProfile, isPelanggan = false }: { onOpenModal: () => void, isLoggedIn: boolean, userProfile: any, onOpenProfile: () => void, isPelanggan?: boolean }) => {
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
                      <p className="text-[10px] font-black uppercase text-emerald-400 tracking-[0.3em] mb-1">{isPelanggan ? "Customer BSN" : "Status Mudabbir"}</p>
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

const AboutSection = ({ onSeeProfile, onSeeProgram, isAdminView = false, onEditSection }: { onSeeProfile: () => void, onSeeProgram: () => void, isAdminView?: boolean, onEditSection?: () => void }) => {
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
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-emerald-600 font-display font-black uppercase tracking-[0.2em] text-xs">Mengenal Rindu BSN Al-Ihya</h2>
              {isAdminView && (
                <button 
                  onClick={onEditSection}
                  className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-black text-[10px] uppercase tracking-widest border border-emerald-100 hover:bg-emerald-100 transition-all flex items-center gap-2"
                >
                  <Pencil size={12} /> Edit Profil & Program
                </button>
              )}
            </div>
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
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onSeeProfile}
                className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-600 transition-all active:scale-95 shadow-xl"
              >
                Profil Rindu BSN <ChevronRight size={18} />
              </button>
              <button 
                onClick={onSeeProgram}
                className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-10 py-5 rounded-[2rem] font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-100 transition-all active:scale-95 shadow-xl"
              >
                Program BSN <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = ({ stats, isAdminView = false, onEditSection }: { stats: typeof STATISTICS, isAdminView?: boolean, onEditSection?: () => void }) => {
  const IconMap: { [key: string]: any } = {
    Users: Users,
    Trash2: Trash2,
    Lightbulb: Lightbulb,
    Award: Award,
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {isAdminView && (
          <div className="flex justify-end mb-4">
            <button 
              onClick={onEditSection}
              className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-black text-[10px] uppercase tracking-widest border border-emerald-100 hover:bg-emerald-100 transition-all flex items-center gap-2"
            >
              <Pencil size={12} /> Edit Statistik
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
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

const ServicesSection = ({ onLearnMore, services, news, onReadMore, isAdminView = false, onEditSection }: { 
  onLearnMore: (title: string) => void, 
  services: typeof SERVICES, 
  news: any[],
  onReadMore: (title: string) => void,
  isAdminView?: boolean, 
  onEditSection?: () => void 
}) => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Program & Aktivitas Pesantren</h2>
              {isAdminView && (
                <button 
                  onClick={onEditSection}
                  className="px-4 py-2 bg-white text-emerald-600 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200 hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Pencil size={12} /> Edit Konten
                </button>
              )}
            </div>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Kabar Terbaru & Program Unggulan Santri
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm text-lg italic">
            "Kami mengolah limbah menjadi berkah, menciptakan ekosistem sirkular yang berkelanjutan."
          </p>
        </div>

        <div className="space-y-12">
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
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

          {/* News Grid (Horizontal Layout) */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
            {news.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 border border-slate-100"
              >
                <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-emerald-600 text-xs font-black uppercase tracking-widest">{item.date}</p>
                    {(item.date === "Hari Ini" || item.isNew) && (
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[8px] font-black uppercase animate-pulse">Terbaru</span>
                    )}
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-2 leading-tight">{item.title}</h4>
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



const MaterialsSection = ({ materials, config, onDownload, onRequest, isAdminView = false, onEditSection }: { 
  materials: any[], 
  config: { title: string, subtitle: string, requestTitle: string, requestSubtitle: string, requestButton: string },
  onDownload: (mat: any) => void,
  onRequest: () => void,
  isAdminView?: boolean,
  onEditSection?: () => void
}) => {
  return (
    <section id="materials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-black">{config.title}</h3>
                {isAdminView && (
                  <button 
                    onClick={onEditSection}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10 transition-all flex items-center gap-2"
                  >
                    <Pencil size={12} /> Edit Konten
                  </button>
                )}
              </div>
              <p className="text-emerald-100/70 mb-8 max-w-md">{config.subtitle}</p>
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
              <h4 className="text-xl font-bold mb-4">{config.requestTitle}</h4>
              <p className="text-sm text-emerald-100/60 mb-6">{config.requestSubtitle}</p>
              <button 
                onClick={onRequest}
                className="w-full bg-emerald-500 py-3 rounded-xl font-black hover:bg-emerald-400 transition-all active:scale-95 shadow-lg"
              >
                {config.requestButton}
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

const Footer = ({ contact }: { contact: { whatsapp: string, email: string, name: string } }) => {
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
                href={`mailto:${contact.email}`}
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-black/20"
              >
                <Mail size={24} />
              </a>
              <a 
                href={`https://wa.me/${contact.whatsapp}`}
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
                <span>+{contact.whatsapp}</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-emerald-500 shrink-0" size={24} />
                <span>{contact.email}</span>
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
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'payment' | 'confirmation'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<string>("Transfer BRI (VA)");
  const [financeCategory, setFinanceCategory] = useState<'all' | 'marketplace' | 'class'>('all');
  const [adminMode, setAdminMode] = useState<string | null>(null); // 'news', 'product', 'class', 'material'
  const [selectedFinanceMonth, setSelectedFinanceMonth] = useState(new Date().toLocaleDateString("id-ID", { month: 'long', year: 'numeric' }));
  const [editingItem, setEditingItem] = useState<{ type: string, id: number } | null>(null);
  const [totalWasteToday, setTotalWasteToday] = useState(1245.5); // Initial mockup value
  const [totalBalance, setTotalBalance] = useState(15750000); // Initial mockup value (15.75M)
  const [financialHistory, setFinancialHistory] = useState([
    { id: 1, date: new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }), user: "Sistem", amount: 15750000, type: "Masuk", note: "Saldo Awal Kas BSN", method: "Internal", category: 'all' },
  ]);
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPengurus, setIsPengurus] = useState(false);
  const [isPelanggan, setIsPelanggan] = useState(false);
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

  const [contactInfo, setContactInfo] = useState({
    whatsapp: "6282123456789",
    email: APP_CONFIG.contact.email,
    name: "Admin BSN Al-Ihya"
  });

  const [rinduProfile, setRinduProfile] = useState("Rindu BSN Al-Ihya adalah unit usaha mandiri milik Pesantren Al-Ihya yang fokus pada pengelolaan limbah sirkular. Kami memiliki visi menciptakan lingkungan pesantren zero-waste sekaligus memberdayakan ekonomi santri melalui produk-produk daur ulang inovatif.");
  const [programProfile, setProgramProfile] = useState("Program Bank Sampah Nusantara (BSN) di Al-Ihya mencakup edukasi pemilahan sampah, workshop daur ulang kreatif, hingga konversi sampah menjadi nilai ekonomi (Tabungan Santri).");
  const [bankAccount, setBankAccount] = useState({
    bankName: "BRI",
    accountNumber: "0123-0100-3456-508",
    accountName: "PENGURUS BSN AL-IHYA (BRI)"
  });

  const [stats, setStats] = useState(STATISTICS);
  const [services, setServices] = useState(SERVICES);
  const [materialsConfig, setMaterialsConfig] = useState({
    title: "Materi & Panduan Mandiri",
    subtitle: "Unduh berbagai materi edukasi pengelolaan bank sampah untuk diterapkan di rumah atau lingkungan Anda.",
    requestTitle: "Request Materi Baru?",
    requestSubtitle: "Punya topik menarik yang ingin dibahas? Kirimkan usulan materi Anda kepada tim pengajar kami.",
    requestButton: "Hubungi Tim Edukasi"
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
    
    setIsSubmitting(true);
    setVerificationStep("Sinkronisasi Mutasi...");
    
    setTimeout(() => {
      setVerificationStep("Mencocokkan Nominal...");
      setTimeout(() => {
        setVerificationStep("Pembayaran Terverifikasi!");
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setVerificationStep("");
          
          window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
          
          // Remove only selected items from cart and deduct stock
          setDynamicProducts(prev => prev.map(p => {
            const purchased = selectedItems.find(i => i.product.id === p.id);
            return purchased ? { ...p, stock: Math.max(0, p.stock - purchased.quantity) } : p;
          }));

          // Add to financial history
          setFinancialHistory(prev => [
            {
              id: Date.now(),
              date: new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }),
              user: userProfile.name,
              amount: cartTotal,
              type: "Masuk",
              note: "Pembelian Produk (Keranjang)",
              method: paymentMethod,
              category: 'marketplace'
            },
            ...prev
          ]);
          setTotalBalance(prev => prev + cartTotal);

          setTimeout(() => {
            setSubmitted(false);
            setCart(prev => prev.filter(item => !selectedCartItems.includes(item.product.id)));
            setSelectedCartItems([]);
            setCheckoutStep('cart');
            setIsCartOpen(false);
          }, 3000);
        }, 1000);
      }, 1500);
    }, 1200);
  };

  const [selectedClassId, setSelectedClassId] = useState("");
  const [paymentStep, setPaymentStep] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [verificationStep, setVerificationStep] = useState<string>("");

  // Automatic Payment Simulation for Virtual Account
  useEffect(() => {
    if (isConfirmingPayment && selectedPaymentMethod?.includes('Bank')) {
      const timer = setTimeout(() => {
        handlePaymentSuccess();
      }, 7000); // 7 seconds simulation for "Waiting for payment"
      return () => clearTimeout(timer);
    }
  }, [isConfirmingPayment, selectedPaymentMethod]);

  useEffect(() => {
    if (checkoutStep === 'confirmation' && paymentMethod?.includes('Bank')) {
      const timer = setTimeout(() => {
        handleCartCheckout();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [checkoutStep, paymentMethod]);

  const selectedClass = dynamicClasses.find(c => c.title === selectedClassId);

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name') as string || formData.get('userName') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string || formData.get('dorm') as string || formData.get('nasabahAddress') as string;

    // Capture user info for history and set as Pelanggan if not already specific role
    if (!isAdmin && !isPengurus) {
      setIsLoggedIn(true);
      setIsPelanggan(true);
      setUserProfile(prev => ({
        ...prev,
        name: name || prev.name,
        phone: phone || prev.phone,
        dorm: address || prev.dorm
      }));
    }
    
    setPaymentStep(true);
  };

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
        setIsAdmin(false); 
        setIsPelanggan(false);
        setUserProfile(prev => ({ ...prev, name: "Pengurus BSN", dorm: "Manajemen Unit BSN" }));
        setView('dashboard');
        setIsLoginOpen(false);
      } else if (role === "admin" && username === "admin" && password === "bsnops2026") {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setIsPengurus(false);
        setIsPelanggan(false);
        setUserProfile(prev => ({ ...prev, name: "Admin BSN", dorm: "Operasional Bank Sampah" }));
        setView('dashboard');
        setIsLoginOpen(false);
      } else {
        alert("Kredensial tidak valid.");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsPengurus(false);
    setIsPelanggan(false);
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
        method: method,
        category: notif.title === "Pendaftaran Kelas!" ? "class" : "marketplace"
      }, ...prev]);
    }

    setNotifications(prev => prev.filter(n => n.id !== id));
    addNotification('feedback', 'Sistem', 'Pesanan Anda telah diproses oleh pengurus!');
    alert("Pesanan berhasil diproses! Saldo kas rekening telah diperbarui.");
  };

  const handleExportFinance = () => {
    const header = "ID,Tanggal,User,Keterangan,Metode,Jumlah,Tipe,Kategori\n";
    const csvContent = financialHistory.map(h => 
      `${h.id},"${h.date}","${h.user}","${h.note}","${h.method}",${h.amount},"${h.type}","${h.category || 'all'}"`
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
    setVerificationStep("Mengecek Rekening...");
    
    // Simulate multi-step verification process
    setTimeout(() => {
      setVerificationStep("Memverifikasi Nominal...");
      setTimeout(() => {
        setVerificationStep("Sinkronisasi Mutasi Bank...");
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setVerificationStep("");
          
          if (selectedClass) {
            setUserProfile(prev => ({
              ...prev,
              classesJoined: [...prev.classesJoined, selectedClass.title]
            }));
            addNotification('order', 'Pendaftaran Kelas!', `Pendaftaran baru untuk kelas ${selectedClass.title} dari ${userProfile.name} (${selectedPaymentMethod})`);
            
            // Add to financial history
            setFinancialHistory(prev => [
              {
                id: Date.now(),
                date: new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }),
                user: userProfile.name,
                amount: selectedClass.price,
                type: "Masuk",
                note: `Pendaftaran: ${selectedClass.title}`,
                method: selectedPaymentMethod || "Transfer",
                category: 'class'
              },
              ...prev
            ]);
            setTotalBalance(prev => prev + selectedClass.price);

            // WhatsApp notification with video link
            const waText = `Halo ${userProfile.name}, pendaftaran Anda untuk kelas *${selectedClass.title}* telah berhasil! \n\nBerikut adalah link video materi Anda: \n${selectedClass.videoLink || 'Akan segera menyusul'} \n\nSelamat belajar!`;
            setTimeout(() => {
              window.open(`https://wa.me/${userProfile.phone || contactInfo.whatsapp}?text=${encodeURIComponent(waText)}`, "_blank");
            }, 1000);
          } else if (selectedProduct) {
            addNotification('order', 'Pembelian Produk!', `Pembelian produk ${selectedProduct.name} seharga Rp ${selectedProduct.price.toLocaleString("id-ID")} dari ${userProfile.name} (${selectedPaymentMethod})`);
            
            // Add to financial history
            setFinancialHistory(prev => [
              {
                id: Date.now(),
                date: new Date().toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' }),
                user: userProfile.name,
                amount: selectedProduct.price,
                type: "Masuk",
                note: `Beli: ${selectedProduct.name}`,
                method: selectedPaymentMethod || "Transfer",
                category: 'marketplace'
              },
              ...prev
            ]);
            setTotalBalance(prev => prev + selectedProduct.price);
            
            // Deduct stock for quick buy as well
            setDynamicProducts(prev => prev.map(p => 
              p.id === selectedProduct.id ? { ...p, stock: Math.max(0, p.stock - 1) } : p
            ));
          }

          setTimeout(() => {
            setSubmitted(false);
            setIsRegisterOpen(false);
            setIsShopModalOpen(false);
            setPaymentStep(false);
            setIsConfirmingPayment(false);
            setSelectedClassId("");
            setSelectedProduct(null);
          }, 3000);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const handleRegisterClick = (className: string) => {
    setSelectedClassId(className);
    setPaymentStep(false);
    setIsConfirmingPayment(false);
    setIsRegisterOpen(true);
  };

  const handleBuyClick = (product: any) => {
    setSelectedProduct(product);
    setPaymentStep(false);
    setIsConfirmingPayment(false);
    setIsShopModalOpen(true);
  };

  const openWhatsAppOrder = (item: string) => {
    const text = `Assalamu'alaikum, saya ingin memesan ${item} dari Rindu BSN Al-Ihya.`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (view === 'dashboard' && (isAdmin || isPengurus)) {
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

          <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
            {/* GRUP PENGURUS: KONTEN */}
            {isPengurus && (
              <div>
                <h3 className="px-5 mb-3 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] opacity-50">Menu Pengurus</h3>
                <div className="space-y-1">
                  {[
                    { id: 'news', label: 'Berita & Artikel', icon: Newspaper },
                    { id: 'product', label: 'Produk Marketplace', icon: ShoppingBag },
                    { id: 'class', label: 'Kelas Edukasi', icon: GraduationCap },
                    { id: 'material', label: 'Materi Belajar', icon: FileText },
                    { id: 'notifications', label: 'Notifikasi & Order', icon: Bell },
                  ].map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => setAdminMode(item.id)}
                      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold transition-all ${adminMode === item.id ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20" : "text-emerald-100/60 hover:bg-white/5 hover:text-white"}`}
                    >
                      <item.icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* GRUP ADMIN: SISTEM */}
            {isAdmin && (
              <div>
                <h3 className="px-5 mb-3 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] opacity-50">Pengaturan Admin</h3>
                <div className="space-y-1">
                  {[
                    { id: 'settings_profile', label: 'Profil & Kontak', icon: UserCircle },
                    { id: 'settings_account', label: 'Rekening Bank', icon: CreditCard },
                    { id: 'settings_stats', label: 'Statistik Data', icon: BarChart3 },
                    { id: 'settings_services', label: 'Layanan Utama', icon: Briefcase },
                    { id: 'settings_material', label: 'Info Materi Belajar', icon: Info },
                    { id: 'finance', label: 'Keuangan & Kas', icon: Wallet },
                    { id: 'feedback', label: 'Saran & Feedback', icon: MessageCircle },
                  ].map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => setAdminMode(item.id)}
                      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold transition-all ${adminMode === item.id ? "bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20" : "text-emerald-100/60 hover:bg-white/5 hover:text-white"}`}
                    >
                      <item.icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
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
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
                    {adminMode === 'notifications' ? 'Notifikasi & Pesanan' : 
                     adminMode === 'feedback' ? 'Saran & Feedback Nasabah' : 
                     adminMode.startsWith('settings_') ? `Pengaturan ${adminMode.replace('settings_', '').replace('profile', 'Profil').replace('account', 'Rekening').replace('stats', 'Statistik').replace('services', 'Layanan')}` :
                     `Kelola ${adminMode}`}
                  </h2>
                  <button onClick={() => setAdminMode(null)} className="text-slate-400 hover:text-slate-600 flex items-center gap-2 font-bold text-sm">
                    TUTUP PANEL <X size={18} />
                  </button>
                </div>

                {adminMode === 'notifications' || adminMode === 'feedback' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                      {(adminMode === 'feedback' ? notifications.filter(n => n.type === 'feedback') : notifications).length === 0 ? (
                        <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                          <Bell size={80} className="mx-auto text-slate-200 mb-6 animate-bounce-slow" />
                          <h4 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tighter mb-2">Semua Bersih!</h4>
                          <p className="text-slate-400 text-sm font-medium">Belum ada pesanan atau feedback baru saat ini.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {(adminMode === 'feedback' ? notifications.filter(n => n.type === 'feedback') : notifications).map(notif => (
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
                        <button 
                          onClick={() => openWhatsAppOrder("Bantuan Sistem (Support Pengurus)")}
                          className="w-full bg-white text-emerald-600 py-4 rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-50 transition-colors active:scale-95 transition-all"
                        >
                          WhatsApp Support
                        </button>
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
                      <div className="p-10 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                          <h4 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tighter mb-1">Jurnal Keuangan Bulanan</h4>
                          <p className="text-slate-400 text-sm font-medium">Catatan otomatis dari hasil penjualan marketplace dan pendaftaran kelas</p>
                          
                          <div className="flex items-center gap-2 mt-6">
                            {[
                              { id: 'all', label: 'Semua Transaksi' },
                              { id: 'marketplace', label: 'E-Marketplace' },
                              { id: 'class', label: 'Pendaftaran Kelas' }
                            ].map(cat => (
                              <button
                                key={cat.id}
                                onClick={() => setFinanceCategory(cat.id as any)}
                                className={`px-5 py-2.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${
                                  financeCategory === cat.id 
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
                                    : 'bg-white text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-slate-100'
                                }`}
                              >
                                {cat.label}
                              </button>
                            ))}
                          </div>
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
                                const matchesDate = item.date.includes(selMonth) && item.date.includes(selYear);
                                const matchesCategory = financeCategory === 'all' || item.category === financeCategory || item.category === 'all';
                                return matchesDate && matchesCategory;
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
                        <h4 className="font-black text-slate-800 uppercase text-sm tracking-widest">{adminMode?.startsWith('settings_') ? 'Form Edit Pengaturan' : (editingItem ? `Edit ${adminMode}` : `Tambah ${adminMode} Baru`)}</h4>
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
                          
                          if (adminMode === 'settings_profile') {
                            const wa = formData.get('whatsapp') as string;
                            const email = formData.get('email') as string;
                            const contactName = formData.get('contactName') as string;
                            const rProfile = formData.get('rinduProfile') as string;
                            const pProfile = formData.get('programProfile') as string;
                            setContactInfo({ whatsapp: wa, email: email, name: contactName });
                            setRinduProfile(rProfile);
                            setProgramProfile(pProfile);
                            addNotification('feedback', 'Sistem', 'Profil & Kontak berhasil diperbarui.');
                            setAdminMode(null);
                            return;
                          }

                          if (adminMode === 'settings_account') {
                            const bName = formData.get('bankName') as string;
                            const bNum = formData.get('accountNumber') as string;
                            const bAccName = formData.get('accountName') as string;
                            setBankAccount({ bankName: bName, accountNumber: bNum, accountName: bAccName });
                            addNotification('feedback', 'Sistem', 'Data Rekening berhasil diperbarui.');
                            setAdminMode(null);
                            return;
                          }

                          if (adminMode === 'settings_stats') {
                            const newStats = stats.map((s, idx) => ({
                              ...s,
                              value: formData.get(`stat_value_${idx}`) as string
                            }));
                            setStats(newStats);
                            addNotification('feedback', 'Sistem', 'Statistik Beranda berhasil diperbarui.');
                            setAdminMode(null);
                            return;
                          }

                          if (adminMode === 'settings_services') {
                            const newServices = services.map((s, idx) => ({
                              ...s,
                              title: formData.get(`service_title_${idx}`) as string,
                              image: formData.get(`service_image_${idx}`) as string,
                              description: formData.get(`service_desc_${idx}`) as string
                            }));
                            setServices(newServices);
                            addNotification('feedback', 'Sistem', 'Layanan Utama berhasil diperbarui.');
                            setAdminMode(null);
                            return;
                          }

                          if (adminMode === 'settings_material') {
                            setMaterialsConfig({
                              title: formData.get('mat_title') as string,
                              subtitle: formData.get('mat_subtitle') as string,
                              requestTitle: formData.get('req_title') as string,
                              requestSubtitle: formData.get('req_subtitle') as string,
                              requestButton: formData.get('req_btn') as string
                            });
                            addNotification('feedback', 'Sistem', 'Header Materi Berhasil diperbarui.');
                            setAdminMode(null);
                            return;
                          }

                          const title = formData.get('title') as string;
                          const desc = formData.get('desc') as string;
                          const price = formData.get('price') ? parseInt(formData.get('price') as string) : 0;
                          const category = formData.get('category') as string;
                          const image = formData.get('image') as string || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800";

                          if (editingItem) {
                            const vLink = formData.get('videoLink') as string;
                            switch(adminMode) {
                              case 'news':
                                setDynamicNews(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, excerpt: desc.substring(0, 100) + '...', desc, category: category || item.category, image } : item));
                                break;
                              case 'product':
                                setDynamicProducts(prev => prev.map(item => item.id === editingItem.id ? { ...item, name: title, desc, price: price || item.price, image } : item));
                                break;
                              case 'class':
                                setDynamicClasses(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, desc, category: category || item.category, price: price || item.price, videoLink: vLink, image } : item));
                                break;
                              case 'material':
                                setDynamicMaterials(prev => prev.map(item => item.id === editingItem.id ? { ...item, title, type: category || item.type, image } : item));
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
                                if (!editingItem) {
                                  const matTitle = formData.get('mat_title') as string;
                                  const matSub = formData.get('mat_subtitle') as string;
                                  if (matTitle || matSub) {
                                    setMaterialsConfig(prev => ({ ...prev, title: matTitle || prev.title, subtitle: matSub || prev.subtitle }));
                                  }
                                }
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
                        {adminMode === 'settings_profile' ? (
                          <div className="space-y-8">
                            <div className="space-y-4">
                              <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em]">Profil Utama</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Profil Rindu BSN</label>
                                  <textarea name="rinduProfile" defaultValue={rinduProfile} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm h-32"></textarea>
                                </div>
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Profil Program BSN</label>
                                  <textarea name="programProfile" defaultValue={programProfile} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm h-32"></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                              <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em]">Konten Nara Hubung</h5>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Nama Admin</label>
                                  <input name="contactName" type="text" defaultValue={contactInfo.name} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">WhatsApp (62...)</label>
                                  <input name="whatsapp" type="text" defaultValue={contactInfo.whatsapp} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Email Official</label>
                                  <input name="email" type="email" defaultValue={contactInfo.email} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : adminMode === 'settings_account' ? (
                          <div className="space-y-4 max-w-md mx-auto py-8">
                            <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em] mb-4 text-center">Rekening Pembayaran</h5>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Nama Bank</label>
                              <input name="bankName" type="text" defaultValue={bankAccount.bankName} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Nomor Rekening</label>
                              <input name="accountNumber" type="text" defaultValue={bankAccount.accountNumber} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Atas Nama (Pemilik)</label>
                              <input name="accountName" type="text" defaultValue={bankAccount.accountName} className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                            </div>
                          </div>
                        ) : adminMode === 'settings_stats' ? (
                          <div className="space-y-4 py-8">
                            <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em] mb-6">Statistik Utama Beranda</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {stats.map((stat, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase leading-tight">{stat.label}</label>
                                  <input 
                                    name={`stat_value_${idx}`} 
                                    type="text" 
                                    defaultValue={stat.value} 
                                    className="w-full px-4 py-2 rounded-xl border border-white focus:border-emerald-500 outline-none text-sm font-bold shadow-inner" 
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : adminMode === 'settings_services' ? (
                          <div className="space-y-6 py-4">
                            <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em]">Layanan Utama (Services)</h5>
                            <div className="grid grid-cols-1 gap-4">
                              {services.map((service, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Judul Layanan</label>
                                      <input name={`service_title_${idx}`} type="text" defaultValue={service.title} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                    </div>
                                    <div>
                                      <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest text-emerald-600">URL Gambar (.jpg/URL)</label>
                                      <input name={`service_image_${idx}`} type="text" defaultValue={service.image} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-xs font-mono" />
                                    </div>
                                  </div>
                                  <div>
                                    <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Deskripsi Singkat</label>
                                    <textarea name={`service_desc_${idx}`} defaultValue={service.description} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm h-20"></textarea>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : adminMode === 'settings_material' ? (
                          <div className="space-y-6 py-4">
                            <h5 className="font-black text-emerald-600 text-xs uppercase tracking-[0.2em]">Header Seksi Materi</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                    <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">Judul Utama Seksi</label>
                                    <input name="mat_title" type="text" defaultValue={materialsConfig.title} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                  </div>
                                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                    <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">Deskripsi Header</label>
                                    <textarea name="mat_subtitle" defaultValue={materialsConfig.subtitle} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm h-32"></textarea>
                                  </div>
                                </div>
                                <div className="space-y-4 bg-emerald-50/30 p-8 rounded-[2rem] border border-emerald-100">
                                  <h6 className="font-bold text-emerald-800 text-sm mb-2 italic">Pengaturan Request Materi (Sidebar)</h6>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Judul Request</label>
                                        <input name="req_title" type="text" defaultValue={materialsConfig.requestTitle} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                      </div>
                                      <div>
                                        <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Teks Tombol</label>
                                        <input name="req_btn" type="text" defaultValue={materialsConfig.requestButton} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                      </div>
                                    </div>
                                    <div>
                                      <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Instruksi Request</label>
                                      <textarea name="req_subtitle" defaultValue={materialsConfig.requestSubtitle} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm h-24"></textarea>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        ) : adminMode === 'settings' ? (
                          <div className="space-y-6">
                            <p className="text-center py-12 text-slate-400 font-bold italic">Pilih kategori pengaturan di menu samping untuk memulai.</p>
                          </div>
                        ) : (
                          <>
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
                              <div className="col-span-2">
                                <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-wide text-emerald-600">URL Gambar (.jpg / .png)</label>
                                <input 
                                  required 
                                  name="image" 
                                  type="text" 
                                  key={editingItem ? `edit-image-${editingItem.id}` : 'new-image'}
                                  defaultValue={editingItem ? (
                                    adminMode === 'news' ? dynamicNews.find(i => i.id === editingItem.id)?.image :
                                    adminMode === 'product' ? dynamicProducts.find(i => i.id === editingItem.id)?.image :
                                    adminMode === 'class' ? dynamicClasses.find(i => i.id === editingItem.id)?.image :
                                    adminMode === 'material' ? dynamicMaterials.find(i => i.id === editingItem.id)?.image : ''
                                  ) : ''}
                                  placeholder="https://images.unsplash.com/..." 
                                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 outline-none transition-all font-mono text-xs" 
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
                              {adminMode === 'material' && !editingItem && (
                                <div className="col-span-2 space-y-4 bg-emerald-50/30 p-6 rounded-2xl border border-emerald-100/50 mb-4">
                                  <h5 className="font-black text-emerald-600 text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Settings size={14} /> Pengaturan Judul Seksi (Header)
                                  </h5>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Judul Seksi</label>
                                      <input name="mat_title" type="text" defaultValue={materialsConfig.title} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                    </div>
                                    <div>
                                      <label className="block text-[10px] font-black text-slate-400 mb-1 uppercase">Subjudul Seksi</label>
                                      <input name="mat_subtitle" type="text" defaultValue={materialsConfig.subtitle} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none text-sm font-bold" />
                                    </div>
                                  </div>
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
                          </>
                        )}
                        <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100">
                          {adminMode?.startsWith('settings_') ? 'Simpan Perubahan' : (editingItem ? 'Simpan Perubahan' : 'Publikasikan Sekarang')} <PlusCircle size={22} />
                        </button>
                      </form>
                    </div>

                    {!adminMode?.startsWith('settings_') && (
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
                  )}
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
          isPelanggan={isPelanggan}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
        <AboutSection 
          onSeeProfile={() => openDetail("Profil Rindu BSN Al-Ihya", rinduProfile)} 
          onSeeProgram={() => openDetail("Program Utama BSN", programProfile)}
          isAdminView={isAdmin || isPengurus}
          onEditSection={() => {
            setAdminMode('settings_profile');
            setView('dashboard');
          }}
        />
        <StatsSection 
          stats={stats} 
          isAdminView={isAdmin || isPengurus} 
          onEditSection={() => {
            setAdminMode('settings_stats');
            setView('dashboard');
          }}
        />
        <ServicesSection 
          services={services}
          news={dynamicNews}
          onReadMore={(title) => {
            const item = dynamicNews.find(n => n.title === title);
            openDetail(title, item?.excerpt + "\n\nSelengkapnya: " + item?.desc || "", "news");
          }}
          isAdminView={isAdmin || isPengurus}
          onEditSection={() => {
            setAdminMode('settings_services');
            setView('dashboard');
          }}
          onLearnMore={(title) => {
          const desc = services.find(s => s.title === title)?.description || "";
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
        <MaterialsSection 
          materials={dynamicMaterials} 
          config={materialsConfig}
          isAdminView={isAdmin || isPengurus}
          onEditSection={() => {
            setAdminMode('settings_material');
            setView('dashboard');
          }}
          onDownload={(mat) => alert(`Mengunduh materi: ${mat.title}\nFormat: ${mat.type}\nUkuran: ${mat.size}\n\nFile Anda akan segera tersedia di folder unduhan (Simulasi).`)}
          onRequest={() => openDetail(materialsConfig.requestTitle, materialsConfig.requestSubtitle + "\n\nSilakan hubungi tim kurikulum kami untuk pengajuan materi baru terkait lingkungan hidup dan kewirausahaan santri.", "request")}
        />
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
      <Footer contact={contactInfo} />
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
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
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
                        name="name"
                        type="text" 
                        defaultValue={userProfile.name !== "Santri Ahmad" && userProfile.name !== "Pengurus BSN" && userProfile.name !== "Admin BSN" ? userProfile.name : ""}
                        placeholder="Nama Lengkap Penerima" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <input 
                        required
                        name="address"
                        type="text" 
                        defaultValue={userProfile.dorm !== "Asrama Al-Ihya 3" && userProfile.dorm !== "Manajemen Unit BSN" && userProfile.dorm !== "Operasional Bank Sampah" ? userProfile.dorm : ""}
                        placeholder="Alamat Lengkap / Asrama" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="Nomor WhatsApp Aktif" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="Alamat Email (untuk pemberitahuan)" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                      />
                      <textarea 
                        name="notes"
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
                ) : isConfirmingPayment ? (
                  <div className="space-y-6">
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
                      <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Total Pembayaran</p>
                      <h4 className="text-3xl font-black text-slate-800">Rp {selectedProduct?.price.toLocaleString("id-ID")}</h4>
                      <p className="text-[10px] text-slate-400 mt-2">Metode: <span className="font-bold text-slate-600 uppercase">{selectedPaymentMethod}</span></p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Instruksi Pembayaran</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Silahkan lakukan pengiriman dana sesuai nominal di atas. Setelah selesai, klik tombol konfirmasi di bawah ini agar pesanan Anda dapat segera kami proses.
                        </p>
                      </div>

                      {selectedPaymentMethod.includes('VA') && (
                        <div className="p-5 bg-white border-2 border-dashed border-emerald-100 rounded-2xl text-center">
                          <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">BRI Virtual Account (Pengurus)</p>
                          <p className="text-2xl font-black text-slate-800 tracking-widest">8801 {userProfile.phone?.replace('08', '') || '1234 5678'}</p>
                          <p className="text-[10px] text-slate-400">Verifikasi Otomatis Ke BRI BSN</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col items-center justify-center gap-3 py-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-100">
                          <div className="h-full bg-emerald-600 animate-[progress-loading_10s_linear_infinite]"></div>
                        </div>
                        <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
                        <div className="text-center">
                          <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Sistem Sedang Menunggu Transaksi</p>
                          <p className="text-[9px] text-slate-400 mt-1">Gunakan Aplikasi Bank Anda untuk Transfer Ke VA di atas</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setIsConfirmingPayment(false)}
                        className="w-full py-3 rounded-xl font-bold text-slate-400 hover:text-slate-600 transition-all text-xs"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-slate-400 text-sm italic">Pilih Metode Pembayaran</p>
                    </div>
                    
                    <div className="space-y-3">
                      <button 
                        onClick={() => { setSelectedPaymentMethod('Saldo BSN'); setIsConfirmingPayment(true); }}
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
                        onClick={() => { setSelectedPaymentMethod('Transfer BRI (VA)'); setIsConfirmingPayment(true); }}
                        className="w-full p-0 text-left rounded-[2rem] overflow-hidden border border-emerald-100 hover:shadow-md transition-all group"
                      >
                        <div className="p-5 bg-emerald-50 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200/20 blur-2xl rounded-full"></div>
                          <p className="text-[10px] uppercase font-black text-emerald-600 mb-3 tracking-widest">Virtual Account BRI</p>
                          <div className="flex justify-between items-center relative z-10">
                            <div>
                              <p className="text-2xl font-display font-black text-emerald-600 tracking-widest my-1">8801 {userProfile.phone?.replace('08', '') || '12345678'}</p>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">BRI VA Pengurus BSN</p>
                            </div>
                            <div className="bg-white p-3 rounded-2xl shadow-md border border-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                              <CreditCard size={28} />
                            </div>
                          </div>
                        </div>
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
                ) : checkoutStep === 'confirmation' ? (
                  <div className="h-full flex flex-col justify-center items-center py-12 px-6">
                    {submitted ? (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center"
                      >
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                          <CheckCircle size={48} />
                        </div>
                        <h4 className="text-3xl font-black text-slate-800 mb-4 tracking-tighter">Pembayaran Berhasil!</h4>
                        <p className="text-slate-500 font-medium">Terima kasih atas kontribusi Anda pada Bank Sampah Nusantara Al-Ihya.</p>
                        <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                          <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">ID Transaksi</p>
                          <p className="font-mono text-sm text-slate-600">BSN-ORD-{Math.floor(Math.random() * 100000)}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="w-full space-y-8">
                        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 text-center relative overflow-hidden">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/20 blur-3xl rounded-full"></div>
                          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">Total Tagihan</p>
                          <h4 className="text-4xl font-black text-slate-800 tracking-tighter">Rp {cartTotal.toLocaleString("id-ID")}</h4>
                          <div className="mt-6 flex items-center justify-center gap-2">
                             <div className="px-3 py-1 bg-white border border-emerald-100 rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-widest">{paymentMethod}</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {paymentMethod?.includes('Bank') && (
                            <div className="p-6 bg-white border-2 border-dashed border-emerald-100 rounded-3xl text-center shadow-sm">
                              <p className="text-[10px] font-black text-emerald-600 uppercase mb-2 tracking-widest">BRI Virtual Account (Pengurus)</p>
                              <p className="text-3xl font-display font-black text-slate-800 tracking-widest mb-1">8801 {userProfile.phone?.replace('08', '') || '1234 5678'}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase">Verifikasi BRI BSN 24 Jam</p>
                            </div>
                          )}
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Detail Pesanan</h5>
                            <div className="space-y-2">
                              {cart.filter(i => selectedCartItems.includes(i.product.id)).map(item => (
                                <div key={item.product.id} className="flex justify-between text-xs font-bold">
                                  <span className="text-slate-500">{item.product.name} x {item.quantity}</span>
                                  <span className="text-slate-800">Rp {(item.product.price * item.quantity).toLocaleString("id-ID")}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-5 border-2 border-emerald-50 bg-emerald-50/10 rounded-2xl">
                             <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                               Silahkan konfirmasi jika Anda sudah melakukan pembayaran. Pesanan akan segera diproses oleh tim logistik BSN Al-Ihya setelah verifikasi selesai.
                             </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col items-center justify-center gap-3 py-8 bg-emerald-50/30 rounded-3xl border border-emerald-100 shadow-inner overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-100/50">
                              <div className="h-full bg-emerald-500 animate-[progress-loading_15s_linear_infinite]"></div>
                            </div>
                            <div className="relative">
                              <div className="w-12 h-12 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
                              <div className="absolute inset-0 flex items-center justify-center text-emerald-600">
                                <CreditCard size={16} />
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-black text-emerald-800 tracking-widest uppercase">Sinkronisasi Bank...</p>
                              <p className="text-[10px] text-emerald-600/70 font-medium mt-1">Jangan tutup halaman ini hingga status BERHASIL</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => setCheckoutStep('payment')}
                            className="w-full py-2 text-slate-400 font-bold text-xs"
                          >
                            Ganti Metode Pembayaran
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
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
                          { id: 'bri_va', label: 'Transfer BRI (VA)', icon: Wallet, desc: '8801 + No. HP (Pengurus BRIVA)' },
                          { id: 'cash', label: 'Tunai di Kantin BSN', icon: DollarSign, desc: 'Bayar langsung di lokasi' },
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
                        onClick={() => setCheckoutStep('confirmation')}
                        className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3"
                      >
                        Lanjut Konfirmasi <ArrowRight size={22} />
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
                      <p className="text-xs text-emerald-200 uppercase font-black tracking-wider">{isAdmin ? "Total Kas BSN" : isPelanggan ? "Total Belanja (Bulan Ini)" : "Status Aktif Santri"}</p>
                      <p className="text-2xl font-black">Rp {isAdmin ? "12.450.000" : isPelanggan ? "865.000" : "5.000.000"}</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-xs text-emerald-200 uppercase font-black tracking-wider">{isAdmin ? "Semua Nasabah" : isPelanggan ? "Item Dibeli" : "Jadwal Tugas"}</p>
                      <p className="text-2xl font-black">{isAdmin ? "856 Santri" : isPelanggan ? "12 Produk" : "Asrama A & B"}</p>
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
                          <h4 className="text-xl font-black text-slate-800">{isAdmin ? "Panel Kendali Pengurus" : isPelanggan ? "Riwayat Belanja Produk BSN" : "Profil Lengkap Santri"}</h4>
                          <button onClick={() => setIsProfileOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                            <X />
                          </button>
                        </div>
                        
                        <div className="space-y-8 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                          {(!isAdmin && !isPengurus && !isPelanggan) && (
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

                          {isPelanggan && (
                            <div className="grid grid-cols-1 gap-4">
                              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <p className="text-[10px] text-slate-400 uppercase font-black mb-1 tracking-widest">Alamat Pengiriman Default</p>
                                <p className="font-bold text-slate-700 text-lg leading-tight">Rumah Hunian / Kantor - Area Layanan BSN Al-Ihya</p>
                              </div>
                            </div>
                          )}

                          {(!isAdmin && !isPengurus) && (
                            <div>
                                <h5 className="font-black text-slate-800 text-sm mb-4 flex items-center gap-2">
                                  <Clock size={16} className="text-emerald-500" /> {isPelanggan ? "Daftar Pembelian Barang Daur Ulang" : "Aktifitas & Capaian Terakhir"}
                                </h5>
                                <div className="space-y-3">
                                  {isPelanggan ? [
                                    { icon: ShoppingBag, title: "Pembelian Tas Kitab Daur Ulang", date: "Hari ini", amount: "Rp 45.000", status: "Sedang Dikirim" },
                                    { icon: ShoppingBag, title: "Pupuk Organik Cair 1L", date: "05 Mei 2026", amount: "Rp 25.000", status: "Selesai" },
                                    { icon: ShoppingBag, title: "Pavblok Plastik (10 Pcs)", date: "28 April 2026", amount: "Rp 150.000", status: "Selesai" },
                                  ].map((activity, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                                      <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                        <activity.icon size={18} />
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800">{activity.title}</p>
                                        <div className="flex items-center gap-2">
                                          <p className="text-[10px] text-slate-400 font-bold">{activity.date}</p>
                                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                          <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{activity.status}</p>
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-xs font-black text-slate-800">{activity.amount}</p>
                                      </div>
                                    </div>
                                  )) : [
                                    { icon: ShoppingBag, title: "Pembelian Tas Kitab", date: "Hari ini", points: "+50 Pts" },
                                    { icon: GraduationCap, title: "Lulus Kelas Maggot", date: "2 hari lalu", points: "+200 Pts" },
                                    { icon: Award, title: "Badge Santri Teladan", date: "Kemarin", points: "Achievement" },
                                  ].map((activity, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
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
                              <button onClick={() => setAdminMode('contact') || setView('dashboard')} className="p-4 bg-purple-50 border border-purple-100 rounded-2xl text-left hover:bg-purple-100 transition-all group">
                                <Settings size={24} className="text-purple-600 mb-2" />
                                <p className="font-bold text-slate-800 text-xs">Nara Hubung</p>
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
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        defaultValue={userProfile.name !== "Santri Ahmad" && userProfile.name !== "Pengurus BSN" && userProfile.name !== "Admin BSN" ? userProfile.name : ""}
                        placeholder="Masukkan nama Anda" 
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Asrama / Alamat</label>
                        <input 
                          required
                          name="address"
                          type="text" 
                          defaultValue={userProfile.dorm !== "Asrama Al-Ihya 3" && userProfile.dorm !== "Manajemen Unit BSN" && userProfile.dorm !== "Operasional Bank Sampah" ? userProfile.dorm : ""}
                          placeholder="Lokasi Anda" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Identitas (Opsional)</label>
                        <input 
                          name="id_num"
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
                          name="phone"
                          type="tel" 
                          placeholder="0812xxxx" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="santri@email.com" 
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 outline-none"
                        />
                      </div>
                    </div>

                    <textarea 
                      name="notes"
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
                ) : isConfirmingPayment ? (
                  <div className="space-y-6">
                    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 text-center">
                      <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Total Infaq Pelatihan</p>
                      <h4 className="text-3xl font-black text-slate-800">
                        {selectedClass?.price === 0 ? "GRATIS" : `Rp ${selectedClass?.price.toLocaleString("id-ID")}`}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-2">Metode: <span className="font-bold text-slate-600 uppercase">{selectedPaymentMethod}</span></p>
                    </div>

                    {selectedPaymentMethod.includes('Bank') && (
                      <div className="p-5 bg-white border-2 border-dashed border-emerald-100 rounded-2xl text-center">
                        <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">BRI Virtual Account (Pengurus)</p>
                        <p className="text-2xl font-black text-slate-800 tracking-widest">8801 {userProfile.phone?.replace('08', '') || '1234 5678'}</p>
                        <p className="text-[10px] text-slate-400">Verifikasi Otomatis Ke BRI BSN</p>
                      </div>
                    )}

                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 italic text-xs text-slate-500 leading-relaxed text-center">
                      "Pendaftaran Anda akan dikonfirmasi secara otomatis setelah sistem memverifikasi transaksi. Mohon simpan bukti pembayaran Anda."
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col items-center justify-center gap-3 py-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-inner overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-100/50">
                          <div className="h-full bg-emerald-600 animate-[progress-loading_10s_linear_infinite]"></div>
                        </div>
                        <div className="relative">
                          <div className="w-12 h-12 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-ping"></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-black text-emerald-700 tracking-widest uppercase">Menunggu Dana Masuk...</p>
                          <p className="text-[9px] text-emerald-500 font-medium mt-1 italic">"Status akan otomatis terverifikasi tanpa perlu konfirmasi"</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setIsConfirmingPayment(false)}
                        className="w-full py-3 rounded-2xl font-bold text-slate-400 hover:bg-slate-100 transition-all border border-slate-100"
                      >
                        Ganti Metode
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <p className="text-slate-400 text-sm">Total Pembayaran</p>
                      <p className="text-3xl font-black text-slate-800">Rp {selectedClass?.price.toLocaleString("id-ID")}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-700">Pilih Metode Pembayaran:</p>
                      <button 
                        onClick={() => { setSelectedPaymentMethod('Saldo Tabungan BSM'); setIsConfirmingPayment(true); }}
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
                        onClick={() => { setSelectedPaymentMethod('Transfer BRI (VA)'); setIsConfirmingPayment(true); }}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                            <CreditCard size={20} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-800">Transfer Virtual Account BRI</p>
                            <p className="text-[10px] text-slate-400">VA Pengurus BRI BSN (24 Jam)</p>
                          </div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={20} />
                      </button>

                      <button 
                        onClick={() => { setSelectedPaymentMethod('WhatsApp Admin'); setIsConfirmingPayment(true); }}
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
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-2">Petunjuk Masuk:</p>
                    <div className="space-y-1 text-xs text-emerald-700 font-medium">
                      {loginRole === 'pengurus' && <p>• Pengurus: <span className="font-bold">pengurus / bsn2026</span></p>}
                      {loginRole === 'admin' && <p>• Admin: <span className="font-bold">admin / bsnops2026</span></p>}
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
                      <span className="block py-2.5 rounded-xl text-[10px] font-black peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:shadow-sm transition-all text-slate-500 uppercase">ADMIN</span>
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
