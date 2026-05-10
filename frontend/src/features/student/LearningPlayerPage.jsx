import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, CheckCircle2, Lock, Play, FileText,
  ClipboardList, ChevronDown, Maximize, Volume2, SlidersHorizontal,
  BookOpen, MessageSquare, PenLine, ArrowLeft, MoreVertical,
  CheckCircle, Video, Info
} from 'lucide-react';

const COURSE = {
  title: 'Excel dari Nol: Pemula Sampai Mahir',
  progress: 28,
  modules: [
    {
      id: 1, title: 'Pengenalan Excel & Navigasi Dasar',
      lessons: [
        { id: 1, title: 'Apa itu Microsoft Excel?', type: 'video', duration: '8 min', done: true },
        { id: 2, title: 'Mengenal Antarmuka Excel', type: 'video', duration: '12 min', done: true },
        { id: 3, title: 'Navigasi Cell & Range', type: 'video', duration: '10 min', done: false, current: true },
        { id: 4, title: 'Kuis: Pengenalan Excel', type: 'quiz', duration: '5 min', done: false },
      ],
    },
    {
      id: 2, title: 'Formula & Fungsi Dasar',
      lessons: [
        { id: 5, title: 'Operator Matematika Dasar', type: 'video', duration: '15 min', done: false },
        { id: 6, title: 'Fungsi SUM, AVERAGE, MIN, MAX', type: 'video', duration: '20 min', done: false },
        { id: 7, title: 'Fungsi IF dan Logika', type: 'article', duration: '10 min', done: false },
        { id: 8, title: 'Tugas: Membuat Laporan Sederhana', type: 'assignment', duration: '30 min', done: false },
      ],
    },
  ],
};

const CURRENT_LESSON = { id: 3, title: 'Navigasi Cell & Range', type: 'video' };

function LessonTypeIcon({ type, size = 16, active = false }) {
  const map = {
    video: <Video size={size} />,
    article: <FileText size={size} />,
    quiz: <ClipboardList size={size} />,
    assignment: <PenLine size={size} />,
  };
  return map[type] || <FileText size={size} />;
}

export default function LearningPlayerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedModule, setExpandedModule] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  const totalLessons = COURSE.modules.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = COURSE.modules.reduce((s, m) => s + m.lessons.filter(l => l.done).length, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Dynamic Header */}
      <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center px-8 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-6">
           <Link to="/dashboard/my-courses" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <ArrowLeft size={20} />
           </Link>
           <div>
              <h2 className="text-white font-black text-sm tracking-tight line-clamp-1">{COURSE.title}</h2>
              <div className="flex items-center gap-3 mt-1">
                 <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${(doneLessons / totalLessons) * 100}%` }} />
                 </div>
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{doneLessons}/{totalLessons} LESSONS DONE</span>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-4">
           <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`p-3 rounded-2xl transition-all ${sidebarOpen ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>
              <SlidersHorizontal size={20} />
           </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Learning Content Area */}
        <div className="flex-1 flex flex-col overflow-auto bg-slate-50">
          {/* Video / Content Container */}
          <div className="bg-black aspect-video w-full relative flex items-center justify-center group">
             {/* Fake Player Interface */}
             <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                <div className="text-center group-hover:scale-110 transition-transform duration-700">
                   <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-blue-900/50 cursor-pointer">
                      <Play size={40} className="fill-white ml-1" />
                   </div>
                   <p className="text-blue-400 text-xs font-black uppercase tracking-widest mt-6 italic">Playing Module {expandedModule}</p>
                </div>
             </div>

             {/* Overlays / Controls */}
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 w-full bg-white/20 rounded-full mb-6 relative cursor-pointer">
                   <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: '45%' }} />
                   <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-xl" />
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <button className="text-white hover:text-blue-400 transition-colors"><Play size={24} className="fill-white" /></button>
                      <button className="text-white hover:text-blue-400 transition-colors"><Volume2 size={24} /></button>
                      <span className="text-white/60 font-black text-xs tracking-tighter">04:12 / 12:45</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <button className="text-xs font-black text-white bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all uppercase tracking-widest">1.5x Speed</button>
                      <button className="text-white hover:text-blue-400 transition-colors"><Maximize size={22} /></button>
                   </div>
                </div>
             </div>
          </div>

          {/* Details Below Content */}
          <div className="bg-white p-10 flex-1 border-t border-slate-200">
             <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-100">
                   <div>
                      <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">{CURRENT_LESSON.title}</h1>
                      <div className="flex items-center gap-3 mt-2">
                         <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <LessonTypeIcon type="video" size={14} /> Video Lesson
                         </span>
                         <div className="w-1 h-1 bg-slate-200 rounded-full" />
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">12 Menit</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="px-6 py-3 bg-slate-100 text-slate-600 font-black rounded-2xl text-xs hover:bg-slate-200 transition-all flex items-center gap-2">
                         <ChevronLeft size={16} /> SEBELUMNYA
                      </button>
                      <button className="px-8 py-3 bg-blue-600 text-white font-black rounded-2xl text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
                         SELESAI & LANJUT <ChevronRight size={16} />
                      </button>
                   </div>
                </div>

                {/* Info Tabs */}
                <div className="mt-10">
                   <div className="flex gap-10 border-b border-slate-100">
                      {['overview', 'diskusi', 'catatan', 'file'].map(tab => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                        >
                           {tab}
                        </button>
                      ))}
                   </div>

                   <div className="py-10 animate-slide-up">
                      {activeTab === 'overview' && (
                        <div className="space-y-6">
                           <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex gap-4">
                              <Info className="text-blue-600 flex-shrink-0" />
                              <p className="text-sm font-medium text-blue-800 leading-relaxed italic">
                                 "Navigasi yang cepat adalah ciri pengguna Excel tingkat mahir. Pastikan Anda menguasai shortcut keyboard yang diajarkan sebelum lanjut ke materi Formula."
                              </p>
                           </div>
                           <h3 className="text-lg font-black text-slate-900">Deskripsi Materi</h3>
                           <p className="text-slate-600 leading-relaxed">
                              Pada sesi ini, kita akan membedah anatomi dari worksheet Excel. Anda akan belajar cara berpindah antar sel secara instan tanpa perlu scroll manual. Materi ini sangat krusial bagi Anda yang sering mengolah data ribuan baris.
                           </p>
                        </div>
                      )}
                      {activeTab !== 'overview' && (
                        <div className="text-center py-20 text-slate-300 italic font-medium">
                           Belum ada konten di bagian ini.
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar: Curriculum (Slate Dark) */}
        {sidebarOpen && (
          <aside className="w-96 bg-slate-900 border-l border-slate-800 flex flex-col flex-shrink-0 animate-in slide-in-from-right duration-300">
             <div className="p-8 border-b border-slate-800">
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-1">Daftar Materi</h3>
                <h2 className="text-white font-black text-lg tracking-tight italic">Kurikulum Kursus</h2>
             </div>
             
             <div className="flex-1 overflow-y-auto">
                {COURSE.modules.map((mod, i) => (
                  <div key={mod.id}>
                     <button 
                       onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                       className={`w-full flex items-center justify-between px-8 py-5 border-b border-slate-800/50 hover:bg-slate-800 transition-all ${expandedModule === mod.id ? 'bg-slate-800/50' : ''}`}
                     >
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-500 flex items-center justify-center font-black text-[10px]">{i + 1}</div>
                           <span className="text-xs font-black text-white text-left tracking-tight">{mod.title}</span>
                        </div>
                        <ChevronDown size={16} className={`text-slate-500 transition-transform ${expandedModule === mod.id ? 'rotate-180' : ''}`} />
                     </button>
                     
                     {expandedModule === mod.id && (
                       <div className="bg-slate-900/50">
                          {mod.lessons.map(l => (
                            <button key={l.id} className={`w-full flex items-start gap-4 px-10 py-5 transition-all text-left group ${l.current ? 'bg-blue-600/10 border-l-4 border-blue-600' : 'hover:bg-slate-800'}`}>
                               <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${l.done ? 'bg-green-500 shadow-lg shadow-green-900/20' : l.current ? 'bg-blue-600 shadow-lg shadow-blue-900/20' : 'bg-slate-800 text-slate-600'}`}>
                                  {l.done ? <CheckCircle size={14} className="text-white" /> : l.current ? <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> : <Lock size={12} />}
                               </div>
                               <div className="flex-1">
                                  <p className={`text-xs font-bold leading-tight ${l.current ? 'text-blue-400' : l.done ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'}`}>{l.title}</p>
                                  <div className="flex items-center gap-2 mt-2 opacity-60">
                                     <LessonTypeIcon type={l.type} size={12} />
                                     <span className="text-[10px] font-black uppercase tracking-tighter">{l.duration}</span>
                                  </div>
                               </div>
                            </button>
                          ))}
                       </div>
                     )}
                  </div>
                ))}
             </div>
          </aside>
        )}
      </div>
    </div>
  );
}
