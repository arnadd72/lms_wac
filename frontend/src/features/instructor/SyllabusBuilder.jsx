import { useState } from 'react';
import { 
  Plus, GripVertical, PlayCircle, FileText, HelpCircle, 
  Upload, Trash2, Edit2, ChevronDown, ChevronUp, Save,
  MoreVertical, FileArchive, CheckCircle2, Layout, 
  ArrowLeft, Eye, Zap
} from 'lucide-react';

const INITIAL_MODULES = [
  {
    id: 1,
    title: 'Pengenalan & Dasar Microsoft Excel',
    lessons: [
      { id: 101, title: 'Selamat Datang di Kursus Excel Mastery', type: 'video', duration: '05:00' },
      { id: 102, title: 'Persiapan Workbook & Interface', type: 'article' },
    ]
  },
  {
    id: 2,
    title: 'Formula Dasar & Logika',
    lessons: [
      { id: 201, title: 'Memahami Rumus SUM, AVERAGE, & COUNT', type: 'video', duration: '12:30' },
      { id: 203, title: 'Kuis: Dasar Navigasi', type: 'quiz' },
      { id: 204, title: 'Tugas: Analisis Penjualan Sederhana', type: 'assignment' },
    ]
  }
];

const ICON_MAP = {
  video: <PlayCircle size={18} className="text-blue-500" />,
  article: <FileText size={18} className="text-emerald-500" />,
  quiz: <HelpCircle size={18} className="text-purple-500" />,
  assignment: <FileArchive size={18} className="text-orange-500" />,
};

export default function SyllabusBuilder() {
  const [modules, setModules] = useState(INITIAL_MODULES);
  const [expanded, setExpanded] = useState(new Set([1, 2]));

  const toggleExpand = (id) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  const addModule = () => {
    const newId = Date.now();
    setModules([...modules, { id: newId, title: 'Modul Baru', lessons: [] }]);
    setExpanded(new Set([...expanded, newId]));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20 animate-slide-up font-sans">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
           <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
              <ArrowLeft size={20} />
           </button>
           <div>
              <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Syllabus <span className="text-blue-600">Builder</span></h1>
              <p className="text-slate-400 text-sm font-medium">Susun kurikulum belajar yang terstruktur untuk siswa Anda.</p>
           </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 font-black rounded-2xl text-xs hover:bg-slate-50 transition-all shadow-sm">
             <Eye size={16} /> PREVIEW
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-black rounded-2xl text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
             <Save size={16} /> SIMPAN SILABUS
          </button>
        </div>
      </div>

      {/* Main Builder Section */}
      <div className="space-y-6">
        {modules.map((mod, modIdx) => (
          <div key={mod.id} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:shadow-slate-200/50">
            {/* Module Header */}
            <div className={`p-6 flex items-center gap-4 transition-colors ${expanded.has(mod.id) ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-300 cursor-grab active:cursor-grabbing">
                <GripVertical size={20} />
              </div>
              <button 
                onClick={() => toggleExpand(mod.id)} 
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${expanded.has(mod.id) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-100'}`}
              >
                {expanded.has(mod.id) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest">MODUL {modIdx + 1}</span>
                  <input 
                    defaultValue={mod.title} 
                    placeholder="Judul Modul..."
                    className="bg-transparent font-black text-slate-900 text-lg outline-none border-b-2 border-transparent focus:border-blue-500 transition-all flex-1" 
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Hapus Modul"><Trash2 size={18} /></button>
                <button className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"><MoreVertical size={18} /></button>
              </div>
            </div>

            {/* Lessons List */}
            {expanded.has(mod.id) && (
              <div className="p-6 pt-2 space-y-3 bg-white">
                <div className="ml-14 space-y-2">
                  {mod.lessons.map((lesson, lessIdx) => (
                    <div key={lesson.id} className="flex items-center gap-4 px-5 py-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-transparent hover:border-slate-100 transition-all group/less hover:shadow-lg hover:shadow-slate-200/40">
                      <div className="w-6 h-6 rounded flex items-center justify-center text-slate-200 cursor-grab active:cursor-grabbing">
                        <GripVertical size={16} />
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                        {ICON_MAP[lesson.type]}
                      </div>
                      <div className="flex-1">
                        <input 
                          defaultValue={lesson.title} 
                          className="bg-transparent text-sm font-bold text-slate-700 outline-none border-b border-transparent focus:border-blue-300 w-full py-1 transition-all" 
                        />
                      </div>
                      <div className="flex items-center gap-6">
                        {lesson.duration && <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{lesson.duration}</span>}
                        <div className="flex items-center gap-1 opacity-0 group-hover/less:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit2 size={16} /></button>
                          <button className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Content Buttons (PRD 5.2.2) */}
                  <div className="pt-6 flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-600 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                      <PlayCircle size={16} className="text-blue-500" /> + Video
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-600 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm">
                      <FileText size={16} className="text-emerald-500" /> + Artikel
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-600 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm">
                      <HelpCircle size={16} className="text-purple-500" /> + Kuis
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white text-slate-600 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm">
                      <FileArchive size={16} className="text-orange-500" /> + Tugas
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <button 
          onClick={addModule} 
          className="w-full py-10 rounded-[40px] border-4 border-dashed border-slate-100 text-slate-400 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600 font-black text-sm flex flex-col items-center justify-center gap-4 transition-all group"
        >
          <div className="w-16 h-16 rounded-[24px] bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform text-slate-300 group-hover:text-blue-600">
            <Plus size={32} />
          </div>
          TAMBAH MODUL BARU
        </button>
      </div>

      {/* Action Footer */}
      <div className="bg-slate-900 rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-blue-600/20 transition-all duration-700" />
        <div className="flex gap-6 items-center relative z-10">
          <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
             <Zap size={40} className="text-blue-400" />
          </div>
          <div>
            <h3 className="font-black text-2xl italic tracking-tight">Siap Dipublish?</h3>
            <p className="text-slate-400 text-sm font-medium mt-1">Pastikan seluruh materi dan kuis sudah terisi dengan benar.</p>
          </div>
        </div>
        <button className="mt-8 md:mt-0 px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-3xl transition-all shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 relative z-10">
          PUBLISH KURSUS SEKARANG
        </button>
      </div>
    </div>
  );
}
