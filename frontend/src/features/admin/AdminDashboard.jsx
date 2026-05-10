import { 
  Users, BookOpen, GraduationCap, TrendingUp, 
  Clock, CheckCircle, AlertCircle, ChevronRight,
  Plus, Search, Filter, MoreHorizontal
} from 'lucide-react';

const QUICK_STATS = [
  { label: 'Total Siswa', value: '1,284', icon: <Users size={20} />, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Kursus Aktif', value: '42', icon: <BookOpen size={20} />, color: 'text-purple-600', bg: 'bg-purple-100' },
  { label: 'Sertifikat Terbit', value: '856', icon: <GraduationCap size={20} />, color: 'text-green-600', bg: 'bg-green-100' },
  { label: 'Pendapatan (Bulan Ini)', value: 'Rp 12.8M', icon: <TrendingUp size={20} />, color: 'text-orange-600', bg: 'bg-orange-100' },
];

const RECENT_ACTIVITIES = [
  { user: 'Budi Santoso', action: 'Mendaftar kursus Excel Mastery', time: '5 menit yang lalu', avatar: 'B' },
  { user: 'Sari Wijaya', action: 'Menyelesaikan modul Word Pro', time: '12 menit yang lalu', avatar: 'S' },
  { user: 'Rina Handayani', action: 'Mengunggah tugas kuis', time: '25 menit yang lalu', avatar: 'R' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10 animate-slide-up">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">Dashboard <span className="text-blue-600">Overview</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Selamat datang kembali, Super Admin. Berikut adalah ringkasan platform Anda.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
              <Plus size={16} /> Tambah Admin
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {QUICK_STATS.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1 tracking-tight italic">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table Area */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                 <h3 className="font-black text-slate-900 tracking-tight">Persetujuan Kursus Baru</h3>
                 <button className="text-xs font-bold text-blue-600 hover:underline">Lihat Semua</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full">
                    <thead className="bg-slate-50/50 border-b border-slate-50">
                       <tr>
                          <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Kursus</th>
                          <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Instruktur</th>
                          <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                          <th className="px-6 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {[
                         { title: 'Advanced Excel formulas', instructor: 'Budi Raharjo', status: 'Pending' },
                         { title: 'Graphic Design with Canva', instructor: 'Sari Putri', status: 'Pending' },
                       ].map((item, i) => (
                         <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-5">
                               <p className="text-sm font-bold text-slate-900">{item.title}</p>
                               <p className="text-[10px] text-slate-400 mt-0.5">Kategori: Perkantoran</p>
                            </td>
                            <td className="px-6 py-5 text-sm font-medium text-slate-600">{item.instructor}</td>
                            <td className="px-6 py-5">
                               <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-black uppercase rounded-full tracking-widest">Menunggu</span>
                            </td>
                            <td className="px-6 py-5 text-right">
                               <button className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-900/20">Review</button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
           <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/40 transition-all" />
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Total Traffic</h4>
              <h2 className="text-4xl font-black italic">42.5K</h2>
              <p className="text-xs text-slate-400 mt-2 font-medium">+15.2% dibanding bulan lalu</p>
              <div className="mt-8 flex items-end gap-1 h-12">
                 {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                   <div key={i} className="flex-1 bg-blue-500/30 rounded-t-sm group-hover:bg-blue-500 transition-all" style={{ height: `${h}%` }} />
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-black text-slate-900 tracking-tight mb-6">Aktivitas Terbaru</h3>
              <div className="space-y-6">
                 {RECENT_ACTIVITIES.map((act, i) => (
                   <div key={i} className="flex gap-4 relative">
                      {i !== RECENT_ACTIVITIES.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-[1px] bg-slate-100" />}
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex-shrink-0 flex items-center justify-center font-black text-slate-400 text-xs">{act.avatar}</div>
                      <div>
                         <p className="text-xs font-bold text-slate-900">{act.user}</p>
                         <p className="text-[10px] text-slate-400 mt-1 leading-tight">{act.action}</p>
                         <p className="text-[10px] font-black text-blue-500 mt-2 uppercase tracking-tighter">{act.time}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
