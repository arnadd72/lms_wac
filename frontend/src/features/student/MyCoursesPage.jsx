import { useState } from 'react';
import { 
  Search, Filter, PlayCircle, Clock, 
  Award, MoreVertical, BookOpen, Star
} from 'lucide-react';

const COURSES = [
  { id: 1, title: 'Excel Mastery: From Zero to Hero', progress: 65, duration: '12 Jam', modules: 15, rating: 4.8, status: 'In Progress' },
  { id: 2, title: 'Word for Professional Writing', progress: 30, duration: '8 Jam', modules: 10, rating: 4.7, status: 'In Progress' },
  { id: 3, title: 'PowerPoint Animation Pro', progress: 0, duration: '6 Jam', modules: 8, rating: 4.9, status: 'Not Started' },
];

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-10 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Kursus <span className="text-blue-600">Saya</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Kelola dan lanjutkan petualangan belajar Anda di WAC.</p>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex bg-slate-100 p-1 rounded-2xl w-full md:w-auto">
          {['all', 'in-progress', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
           <input type="text" placeholder="Cari kursus..." className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20" />
           <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map(course => (
          <div key={course.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all group overflow-hidden flex flex-col">
             <div className="relative h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                <BookOpen size={64} className="text-slate-200 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                   <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">{course.status}</span>
                </div>
             </div>
             
             <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                   <h3 className="text-lg font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h3>
                   <div className="flex items-center gap-4 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <div className="flex items-center gap-1"><Clock size={12} /> {course.duration}</div>
                      <div className="flex items-center gap-1"><BookOpen size={12} /> {course.modules} Modul</div>
                   </div>
                </div>

                <div className="mt-8 space-y-4">
                   <div className="flex items-center justify-between">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progres Belajar</p>
                      <p className="text-xs font-black text-slate-900 italic">{course.progress}%</p>
                   </div>
                   <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-1000" 
                        style={{ width: `${course.progress}%` }} 
                      />
                   </div>
                   <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 shadow-lg shadow-slate-900/10 hover:shadow-blue-900/20 transition-all flex items-center justify-center gap-2">
                      <PlayCircle size={18} />
                      {course.progress > 0 ? 'LANJUTKAN' : 'MULAI BELAJAR'}
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
