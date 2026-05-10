import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Star, Users, Clock, BookOpen, ChevronDown, 
  ChevronRight, Play, FileText, ClipboardList, 
  Lock, CheckCircle2, Share2, ArrowLeft, 
  ShieldCheck, Zap, Award, Info, PlayCircle
} from 'lucide-react';

const COURSE = {
  id: 1,
  title: 'Excel Mastery: From Zero to Hero',
  category: 'Microsoft Excel',
  level: 'Pemula',
  duration: '8 jam',
  students: 4821,
  rating: 4.9,
  ratingCount: 1243,
  instructor: { name: 'Sari Kusuma', avatar: 'SK', courses: 5, students: 12500, bio: 'Instruktur senior WAC dengan pengalaman melatih di berbagai perusahaan multinasional. Spesialisasi di Microsoft Excel & Business Intelligence.' },
  description: 'Kuasai Microsoft Excel dari dasar hingga tingkat mahir dalam satu kursus komprehensif. Pelajari formula, fungsi, pivot table, hingga dashboard interaktif yang akan meningkatkan produktivitas kerja Anda secara drastis.',
  outcomes: ['Memahami antarmuka dan navigasi Excel tingkat lanjut', 'Menguasai 50+ formula dan fungsi esensial industri', 'Membuat dashboard dan laporan visual yang interaktif', 'Menganalisis data besar menggunakan Pivot Table', 'Otomasi tugas rutin dengan Macro & VBA dasar'],
  prerequisites: ['Mampu mengoperasikan komputer dasar', 'Memiliki Microsoft Excel (Versi 2016 atau lebih baru)'],
  modules: [
    { id: 1, title: 'Pengenalan & Navigasi Dasar', lessons: [
      { title: 'Apa itu Microsoft Excel?', type: 'video', duration: '8 min', free: true },
      { title: 'Mengenal Antarmuka Excel Modern', type: 'video', duration: '12 min', free: true },
      { title: 'Navigasi Cell & Range Efisien', type: 'video', duration: '10 min', free: false },
      { title: 'Kuis: Dasar Navigasi', type: 'quiz', duration: '5 min', free: false },
    ]},
    { id: 2, title: 'Formula & Logika Esensial', lessons: [
      { title: 'Operator Matematika & Absolut', type: 'video', duration: '15 min', free: false },
      { title: 'Mastering SUM, AVERAGE, & COUNT', type: 'video', duration: '20 min', free: false },
      { title: 'Logika IF, AND, & OR Dasar', type: 'article', duration: '10 min', free: false },
      { title: 'Tugas: Membuat Laporan Keuangan', type: 'assignment', duration: '30 min', free: false },
    ]},
  ],
  reviews: [
    { name: 'Rina Handayani', avatar: 'RH', rating: 5, date: '2 hari lalu', comment: 'Sangat recommended! Penjelasan sangat jernih dan langsung bisa diterapkan di kantor.' },
    { name: 'Budi Santoso', avatar: 'BS', rating: 5, date: '1 minggu lalu', comment: 'Terbaik! Sertifikatnya sangat membantu saat saya melamar kerja.' },
  ],
};

function LessonIcon({ type, size = 16 }) {
  const icons = { video: <PlayCircle size={size} />, article: <FileText size={size} />, quiz: <ClipboardList size={size} />, assignment: <Zap size={size} /> };
  return icons[type] || <FileText size={size} />;
}

export default function CourseDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState(1);
  const c = COURSE;

  const totalLessons = c.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Premium Hero Section */}
      <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -left-40 -top-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 transition-all">
            <ArrowLeft size={16} /> Kembali ke Katalog
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-[10px] font-black uppercase tracking-widest">
                 <ShieldCheck size={14} /> Verified Course
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-tight">{c.title}</h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">{c.description}</p>
              
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-sm font-black text-white">{c.rating}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">({c.ratingCount.toLocaleString()} Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                   <Users size={16} className="text-blue-500" /> {c.students.toLocaleString()} Students
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                   <Clock size={16} className="text-blue-500" /> {c.duration} Content
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black italic text-lg shadow-lg shadow-blue-900/20">{c.instructor.avatar}</div>
                 <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Instruktur Utama</p>
                    <p className="text-sm font-black text-white italic">{c.instructor.name}</p>
                 </div>
              </div>
            </div>

            {/* Sticky Pricing/CTA Card */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-[48px] shadow-2xl shadow-slate-900/40 overflow-hidden sticky top-32 border border-slate-100">
                <div className="h-48 bg-slate-100 relative group overflow-hidden flex items-center justify-center">
                   <PlayCircle size={64} className="text-slate-200 group-hover:text-blue-600 transition-all group-hover:scale-110 z-10" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <div className="p-10 space-y-8">
                  <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-black text-slate-900 italic">FREE</span>
                     <span className="text-sm text-slate-400 font-bold line-through uppercase tracking-widest">Rp 499.000</span>
                  </div>
                  
                  <div className="space-y-3">
                     <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-3xl text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
                       Mulai Belajar Sekarang
                     </button>
                     <button className="w-full py-5 bg-slate-100 text-slate-600 font-black rounded-3xl text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                       <Share2 size={16} /> Bagikan Kursus
                     </button>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-50">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Fitur Kursus:</p>
                     {[
                       { icon: Award, text: 'Sertifikat Penyelesaian' },
                       { icon: BookOpen, text: 'Akses Materi Selamanya' },
                       { icon: ShieldCheck, text: 'Dukungan Forum Diskusi' },
                       { icon: Zap, text: 'Kuis & Latihan Praktek' }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                          <item.icon size={16} className="text-blue-500" />
                          {item.text}
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-10">
            {['overview', 'silabus', 'instruktur', 'ulasan'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`pb-5 pt-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all border-b-4 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-slide-up">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight italic mb-8 flex items-center gap-3">
                   Apa Yang Akan Anda <span className="text-blue-600">Pelajari</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {c.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                      <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                         <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-600 leading-relaxed">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex gap-6">
                 <Info className="text-blue-600 flex-shrink-0" size={32} />
                 <div>
                    <h3 className="text-lg font-black text-blue-900 mb-2 italic">Prasyarat Belajar</h3>
                    <ul className="space-y-2">
                      {c.prerequisites.map((p, i) => (
                        <li key={i} className="text-sm font-medium text-blue-800 flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {p}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'silabus' && (
            <div className="space-y-4 animate-slide-up">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight italic mb-8">Kurikulum <span className="text-blue-600">Terstruktur</span></h2>
              {c.modules.map((m, mIdx) => (
                <div key={m.id} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group">
                  <button 
                    onClick={() => setExpandedModule(expandedModule === m.id ? null : m.id)}
                    className="w-full flex items-center justify-between px-8 py-6 hover:bg-slate-50 transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest">MODUL {mIdx + 1}</span>
                       <h3 className="font-black text-slate-900 italic tracking-tight">{m.title}</h3>
                    </div>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${expandedModule === m.id ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {expandedModule === m.id && (
                    <div className="px-8 pb-8 space-y-2">
                      {m.lessons.map((l, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all group/item">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${l.free ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}`}>
                              {l.free ? <LessonIcon type={l.type} /> : <Lock size={16} />}
                            </div>
                            <div>
                               <p className="text-sm font-bold text-slate-700 leading-tight">{l.title}</p>
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{l.duration}</span>
                            </div>
                          </div>
                          {l.free && <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest shadow-sm">Preview</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'instruktur' && (
            <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm animate-slide-up">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="w-32 h-32 bg-slate-900 text-white rounded-[40px] flex items-center justify-center text-5xl font-black italic shadow-2xl flex-shrink-0">
                    {c.instructor.avatar}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight italic mb-2">{c.instructor.name}</h2>
                    <div className="flex gap-6 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1.5"><BookOpen size={14} /> {c.instructor.courses} Kursus</span>
                      <span className="flex items-center gap-1.5"><Users size={14} /> {c.instructor.students.toLocaleString()} Siswa</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">{c.instructor.bio}</p>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'ulasan' && (
            <div className="space-y-10 animate-slide-up">
               <div className="bg-slate-900 p-10 rounded-[48px] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-slate-900/40">
                  <div className="text-center">
                     <div className="text-7xl font-black italic text-blue-500 leading-none">{c.rating}</div>
                     <div className="flex justify-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}
                     </div>
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-4">Average Rating</p>
                  </div>
                  <div className="flex-1 w-full space-y-4">
                     {[5,4,3,2,1].map(n => (
                        <div key={n} className="flex items-center gap-4 group">
                           <span className="text-[10px] font-black text-slate-500 w-8">{n} Stars</span>
                           <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 rounded-full group-hover:bg-blue-400 transition-all" style={{ width: `${n === 5 ? 85 : 10}%` }} />
                           </div>
                           <span className="text-[10px] font-black text-slate-500 w-8">{n === 5 ? '85%' : '10%'}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-6">
                  {c.reviews.map((r, i) => (
                    <div key={i} className="bg-white p-8 rounded-[36px] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center font-black italic text-sm">{r.avatar}</div>
                             <div>
                                <p className="text-sm font-black text-slate-900 italic tracking-tight">{r.name}</p>
                                <div className="flex gap-0.5 mt-1">
                                   {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} className="fill-amber-400 text-amber-400" />)}
                                </div>
                             </div>
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{r.date}</span>
                       </div>
                       <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{r.comment}"</p>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Enroll button mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30">
        <button className="w-full py-5 bg-blue-600 text-white font-black rounded-3xl text-sm uppercase tracking-widest shadow-xl shadow-blue-200">
          Ikuti Kursus — GRATIS
        </button>
      </div>
    </div>
  );
}
