import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Star, Users, Trophy, 
  Play, BookOpen, Award, Zap, Search, 
  ChevronRight, PlayCircle, Globe, ShieldCheck
} from 'lucide-react';

/* ─── Data Statis ─── */
const features = [
  { icon: BookOpen, title: 'Konten Terstruktur', desc: 'Jalur belajar yang tersusun rapi dari pemula hingga mahir, bukan video acak.', color: 'bg-blue-100 text-blue-600' },
  { icon: Award, title: 'Sertifikat Resmi', desc: 'Sertifikat digital ber-QR Code yang bisa langsung dibagikan ke LinkedIn.', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Star, title: 'Instruktur Berpengalaman', desc: 'Diajarkan langsung oleh praktisi yang sudah mengajar ribuan siswa WAC.', color: 'bg-amber-100 text-amber-600' },
  { icon: Zap, title: 'Gamifikasi & Streak', desc: 'Poin, badge, dan leaderboard agar belajar terasa seru dan tidak membosankan.', color: 'bg-purple-100 text-purple-600' },
  { icon: Users, title: 'Komunitas Aktif', desc: 'Forum diskusi, Live Q&A, dan sesi belajar bersama setiap minggu.', color: 'bg-rose-100 text-rose-600' },
  { icon: Trophy, title: 'Kurikulum Relevan', desc: 'Materi diperbarui secara berkala sesuai kebutuhan dunia kerja terkini.', color: 'bg-orange-100 text-orange-600' },
];

const steps = [
  { num: '01', title: 'Daftar Gratis', desc: 'Buat akun hanya dengan email dalam 30 detik.' },
  { num: '02', title: 'Mulai Belajar', desc: 'Pilih kursus, tonton video, dan kerjakan latihan soal.' },
  { num: '03', title: 'Raih Sertifikat', desc: 'Selesaikan kursus dan dapatkan sertifikat yang diakui industri.' },
];

const popularCourses = [
  { title: 'Excel Mastery: From Zero to Hero', instructor: 'Sari Kusuma', students: 4821, rating: 4.9, level: 'Pemula', duration: '8 jam', color: 'from-emerald-400 to-teal-600' },
  { title: 'Word Professional: Laporan & Proposal', instructor: 'Budi Santoso', students: 3205, rating: 4.8, level: 'Pemula', duration: '5 jam', color: 'from-blue-400 to-indigo-600' },
  { title: 'PowerPoint Storytelling Pro', instructor: 'Sari Kusuma', students: 2987, rating: 4.7, level: 'Menengah', duration: '6 jam', color: 'from-orange-400 to-red-500' },
];

const instructors = [
  { name: 'Sari Kusuma', role: 'Expert in Microsoft Office', bio: 'Telah melatih lebih dari 50+ perusahaan multinasional dalam optimasi workflow kantor.', avatar: 'SK' },
  { name: 'Budi Santoso', role: 'Certified Data Analyst', bio: 'Spesialis dalam otomasi data menggunakan Excel VBA dan Power Query.', avatar: 'BS' },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
        {/* Deep Premium Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -mr-40 -mt-40" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full -ml-20 -mb-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
           <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-10 backdrop-blur-md">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
              Platform Belajar Office #1 di Indonesia
           </div>
           
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter italic">
              Kuasai Office, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                Percepat Karir
              </span>
           </h1>

           <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl font-medium">
              Tingkatkan produktivitas Anda dengan kurikulum terstruktur yang dirancang khusus untuk dunia kerja modern. <span className="text-white font-bold">100% Gratis untuk memulai.</span>
           </p>

           {/* MAIN SEARCH BAR (PRD Section 4) */}
           <form onSubmit={handleSearch} className="w-full max-w-2xl relative mb-16 group">
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl group-hover:bg-blue-600/30 transition-all rounded-full" />
              <div className="relative flex items-center p-2 bg-white rounded-[28px] shadow-2xl">
                 <div className="pl-6 pr-4 text-slate-400">
                    <Search size={24} />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Mau jago apa hari ini? Contoh: 'Excel Pivot Table'..."
                   className="flex-1 py-4 text-slate-900 font-bold outline-none placeholder-slate-400 bg-transparent"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
                    CARI KURSUS
                 </button>
              </div>
           </form>

           <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3"><Users size={16} className="text-blue-500" /> 10.000+ Pelajar</div>
              <div className="flex items-center gap-3"><BookOpen size={16} className="text-blue-500" /> 50+ Materi Premium</div>
              <div className="flex items-center gap-3"><Award size={16} className="text-blue-500" /> Sertifikat Valid</div>
           </div>
        </div>
      </section>

      {/* ── FITUR & TENTANG (id="about") ── */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight italic">
                  Mengapa Memilih <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">WAC LMS?</span>
               </h2>
               <p className="text-lg text-slate-500 mt-6 font-medium">Kami bukan sekadar kumpulan video tutorial. Kami adalah ekosistem pembelajaran yang dirancang untuk hasil nyata di karir Anda.</p>
            </div>
            <div className="hidden md:block">
               <div className="w-24 h-24 bg-slate-50 rounded-full border-4 border-white shadow-xl flex items-center justify-center rotate-12">
                  <Globe size={40} className="text-blue-600" />
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group bg-white animate-slide-up">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${f.color} group-hover:scale-110 transition-transform duration-500`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KURSUS POPULER ── */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Kursus <span className="text-blue-600 text-5xl">Terpopuler</span></h2>
              <p className="text-slate-400 mt-2 font-medium">Pilihan favorit ribuan pelajar profesional setiap bulannya.</p>
            </div>
            <Link to="/courses" className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 text-slate-900 font-black text-xs rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm uppercase tracking-widest">
              Lihat Katalog Lengkap <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((c, i) => (
              <Link to="/courses" key={i}
                className="bg-white rounded-[48px] overflow-hidden border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all group p-4">
                <div className={`h-56 bg-gradient-to-br ${c.color} rounded-[36px] relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <PlayCircle size={64} className="text-white opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {c.level}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-1">
                     <div className="w-2 h-2 bg-white/40 rounded-full" />
                     <div className="w-2 h-2 bg-white/40 rounded-full" />
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1 italic">{c.title}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Bersama {c.instructor}</p>
                  <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-amber-400 text-amber-400" />
                        <span className="font-black text-slate-900 text-sm">{c.rating}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">({c.students.toLocaleString()} SISWA)</span>
                    </div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">FREE ACCESS</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUKTUR (id="instructor") ── */}
      <section id="instructor" className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight italic">Belajar Langsung dari <span className="text-blue-600">Pakar</span></h2>
            <p className="text-slate-400 mt-4 text-lg font-medium max-w-2xl mx-auto">Instruktur kami adalah praktisi bersertifikat yang memiliki pengalaman nyata di industri.</p>
         </div>
         <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {instructors.map((ins, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 bg-slate-50 rounded-[48px] border border-slate-100 hover:shadow-xl transition-all group">
                 <div className="w-24 h-24 bg-slate-900 text-white rounded-[32px] flex items-center justify-center text-3xl font-black italic shadow-2xl mb-8 group-hover:-translate-y-2 transition-transform">
                    {ins.avatar}
                 </div>
                 <h4 className="text-2xl font-black text-slate-900 italic tracking-tight">{ins.name}</h4>
                 <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2 mb-4">{ins.role}</p>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium">"{ins.bio}"</p>
                 <div className="mt-8 flex gap-3">
                    <button className="px-5 py-2.5 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 hover:text-white transition-all">Lihat Profil</button>
                    <button className="px-5 py-2.5 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 hover:text-white transition-all">Hubungi</button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── CARA KERJA ── */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full -left-20 -bottom-20" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black italic tracking-tight mb-4">Cara Kerjanya <span className="text-blue-500">Sangat Mudah</span></h2>
          <p className="text-slate-400 text-lg mb-20 font-medium">Hanya butuh 3 langkah untuk transformasi karir Anda.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-slate-800 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-4xl font-black italic text-white mb-8 shadow-2xl shadow-blue-900/40 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    {s.num}
                  </div>
                  <h3 className="text-xl font-black italic mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA AKHIR ── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[28px] flex items-center justify-center mx-auto mb-10 shadow-lg border border-blue-100">
              <Zap size={40} className="animate-pulse" />
           </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight italic">Siap Menjadi <span className="text-blue-600 text-7xl block md:inline">Terbaik?</span></h2>
          <p className="text-slate-400 text-lg mb-12 font-medium max-w-2xl mx-auto">Bergabunglah dengan <span className="text-slate-900 font-bold underline decoration-blue-500 decoration-4 underline-offset-4">10.000+ pelajar</span> lainnya yang sudah meningkatkan karir mereka bersama WAC.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to="/register"
               className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-3xl text-sm transition-all shadow-2xl shadow-blue-900/20 hover:-translate-y-1 uppercase tracking-widest">
               Daftar Gratis Sekarang
               <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
             </Link>
             <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-slate-100 text-slate-900 font-black rounded-3xl text-sm hover:bg-slate-200 transition-all uppercase tracking-widest">
                <PlayCircle size={20} /> Preview Materi
             </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-slate-300">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-blue-500" /> Sertifikat Sah
             </div>
             <div className="w-1 h-1 bg-slate-200 rounded-full" />
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-blue-500" /> Akses Selamanya
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
