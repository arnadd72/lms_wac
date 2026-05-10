import { useState, useEffect } from 'react';
import { 
  Users, BookOpen, GraduationCap, TrendingUp, 
  Clock, CheckCircle, AlertCircle, ChevronRight,
  Plus, Search, Filter, MoreHorizontal, RefreshCw
} from 'lucide-react';
import { adminApi } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [pendingCourses, setPendingCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsRes, coursesRes] = await Promise.all([
        adminApi.getStats(),
        adminApi.getCourses({ status: 'pending', per_page: 5 })
      ]);
      setStats(statsRes.data.metrics);
      setPendingCourses(coursesRes.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const quickStats = stats ? [
    { label: 'Total Siswa', value: stats.total_users, icon: <Users size={20} />, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Kursus Aktif', value: stats.active_courses, icon: <BookOpen size={20} />, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Total Enrollment', value: stats.total_enrollments, icon: <GraduationCap size={20} />, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Completion Rate', value: `${stats.completion_rate}%`, icon: <TrendingUp size={20} />, color: 'text-orange-600', bg: 'bg-orange-100' },
  ] : [];

  if (loading) return (
    <div className="min-h-[400px] flex items-center justify-center">
      <RefreshCw size={32} className="text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="space-y-10 animate-slide-up">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight italic">Dashboard <span className="text-blue-600">Overview</span></h1>
          <p className="text-slate-400 mt-1 font-medium text-sm">Selamat datang kembali, Super Admin. Berikut adalah ringkasan platform Anda.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, i) => (
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
                 <button onClick={() => navigate('/admin/courses')} className="text-xs font-bold text-blue-600 hover:underline">Lihat Semua</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50/50 border-b border-slate-50">
                       <tr>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kursus</th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Instruktur</th>
                          <th className="px-6 py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {pendingCourses.length === 0 ? (
                         <tr>
                           <td colSpan="3" className="px-6 py-10 text-center text-slate-400 text-sm font-medium italic">Tidak ada kursus yang menunggu persetujuan</td>
                         </tr>
                       ) : pendingCourses.map((course) => (
                         <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-5">
                               <p className="text-sm font-bold text-slate-900">{course.title}</p>
                               <p className="text-[10px] text-slate-400 mt-0.5 uppercase font-black tracking-widest">Kategori: {course.category?.name || 'Uncategorized'}</p>
                            </td>
                            <td className="px-6 py-5 text-sm font-medium text-slate-600 italic">Oleh {course.instructor?.name}</td>
                            <td className="px-6 py-5 text-right">
                               <button 
                                 onClick={() => navigate('/admin/courses')}
                                 className="px-4 py-2 bg-blue-600 text-white text-[10px] font-black rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200"
                               >
                                 Review
                               </button>
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
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Total Aktivitas</h4>
              <h2 className="text-4xl font-black italic">{stats?.total_enrollments || 0}</h2>
              <p className="text-xs text-slate-400 mt-2 font-medium">Total pendaftaran kursus dari seluruh platform.</p>
              <div className="mt-8 flex items-end gap-1 h-12">
                 {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                   <div key={i} className="flex-1 bg-blue-500/30 rounded-t-sm group-hover:bg-blue-500 transition-all" style={{ height: `${h}%` }} />
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-black text-slate-900 tracking-tight mb-6">Akses Cepat</h3>
              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => navigate('/admin/users')} className="p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all text-center">
                    <Users size={24} className="mx-auto mb-2 text-slate-400 group-hover:text-blue-500" />
                    <p className="text-[10px] font-black uppercase tracking-widest">User</p>
                 </button>
                 <button onClick={() => navigate('/admin/courses')} className="p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 hover:text-purple-600 transition-all text-center">
                    <BookOpen size={24} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Kursus</p>
                 </button>
                 <button onClick={() => navigate('/admin/categories')} className="p-4 bg-slate-50 rounded-2xl hover:bg-green-50 hover:text-green-600 transition-all text-center">
                    <Plus size={24} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Kategori</p>
                 </button>
                 <button onClick={() => navigate('/admin/settings')} className="p-4 bg-slate-50 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition-all text-center">
                    <MoreHorizontal size={24} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Settings</p>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
