import { 
  BookOpen, Clock, Award, TrendingUp, 
  ChevronRight, PlayCircle, Star, 
  Calendar, CheckCircle, Zap 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-10 animate-slide-up">
      {/* Welcome Hero */}
      <div className="relative bg-slate-900 rounded-[40px] p-10 overflow-hidden shadow-2xl shadow-slate-900/40 group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-blue-600/40 transition-all duration-700" />
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/20">
                  <Zap size={14} className="text-blue-400" />
                  <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest">WAC Premium Student</span>
               </div>
               <h1 className="text-4xl font-black text-white italic tracking-tight leading-tight">
                  Semangat Belajar, <br />
                  <span className="text-blue-500">{user?.name?.split(' ')[0] || 'Siswa'}!</span>
               </h1>
               <p className="text-slate-400 text-sm font-medium max-w-md">Lanjutkan progres kursus Anda dan kumpulkan poin untuk mendapatkan sertifikat keahlian Microsoft Office.</p>
            </div>
            
            <div className="flex gap-4">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center min-w-[120px]">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Poin Saya</p>
                  <h3 className="text-3xl font-black text-white italic">1,240</h3>
               </div>
               <div className="bg-blue-600 p-6 rounded-3xl text-center min-w-[120px] shadow-xl shadow-blue-900/40">
                  <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-1">Kursus Selesai</p>
                  <h3 className="text-3xl font-black text-white italic">04</h3>
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main: Current Progress */}
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 italic">
                Lanjutkan <span className="text-blue-600">Belajar</span>
              </h3>
              <button className="text-xs font-bold text-blue-600 hover:underline">Semua Kursus Saya</button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Excel Mastery: From Zero to Hero', progress: 65, module: 'Modul 4: Pivot Tables', color: 'bg-blue-600' },
                { title: 'Word for Professional Writing', progress: 30, module: 'Modul 2: Formatting', color: 'bg-green-500' },
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                   <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 ${c.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                         <PlayCircle size={20} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.progress}% Selesai</p>
                   </div>
                   <h4 className="text-sm font-black text-slate-900 line-clamp-1">{c.title}</h4>
                   <p className="text-[10px] font-bold text-slate-400 mt-1">{c.module}</p>
                   
                   <div className="mt-6 space-y-2">
                      <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                         <div className={`h-full ${c.color} transition-all duration-1000`} style={{ width: `${c.progress}%` }} />
                      </div>
                      <button className="w-full py-2.5 mt-2 bg-slate-50 text-slate-900 text-xs font-black rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                        LANJUTKAN
                      </button>
                   </div>
                </div>
              ))}
           </div>

           {/* Achievements Placeholder */}
           <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 tracking-tight mb-6">Pencapaian <span className="text-blue-600">Terbaru</span></h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 {[
                   { label: 'Belajar 7 Hari', icon: '🔥', active: true },
                   { label: 'Quiz Sempurna', icon: '🎯', active: true },
                   { label: 'Fast Learner', icon: '⚡', active: false },
                   { label: 'Penulis Pro', icon: '✍️', active: false },
                 ].map((a, i) => (
                   <div key={i} className={`p-4 rounded-2xl border-2 transition-all ${a.active ? 'border-blue-100 bg-blue-50/50' : 'border-slate-50 opacity-40 grayscale'}`}>
                      <span className="text-2xl mb-2 block">{a.icon}</span>
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">{a.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar: Activity & Leaderboard */}
        <div className="space-y-8">
           <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="font-black text-slate-900 tracking-tight mb-6 flex items-center justify-between">
                Sertifikat <ChevronRight size={18} className="text-slate-400" />
              </h3>
              <div className="text-center py-6">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                    <Award size={32} className="text-slate-200" />
                 </div>
                 <p className="text-xs font-bold text-slate-400 leading-relaxed px-4">Selesaikan satu kursus lagi untuk mengklaim sertifikat keahlian Anda!</p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="font-black text-slate-900 tracking-tight mb-6">Peringkat <span className="text-blue-600">Teratas</span></h3>
              <div className="space-y-5">
                 {[
                   { name: 'Ahmad Fauzi', pts: '4,520', pos: 1, color: 'bg-orange-400' },
                   { name: 'Sari Wijaya', pts: '4,100', pos: 2, color: 'bg-slate-400' },
                   { name: 'Rina (Anda)', pts: '1,240', pos: 12, color: 'bg-blue-600' },
                 ].map((u, i) => (
                   <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 ${u.color} text-white rounded-lg flex items-center justify-center font-black text-xs`}>{u.pos}</div>
                         <div>
                            <p className="text-xs font-bold text-slate-900">{u.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 tracking-widest">{u.pts} PTS</p>
                         </div>
                      </div>
                      {u.pos === 1 && <CheckCircle size={14} className="text-green-500" />}
                   </div>
                 ))}
              </div>
              <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 text-xs font-black rounded-xl hover:bg-slate-100 transition-all uppercase tracking-widest">LIHAT LEADERBOARD</button>
           </div>
        </div>
      </div>
    </div>
  );
}
