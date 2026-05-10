import { useState, useEffect } from 'react';
import { 
  TrendingUp, Users, BookOpen, DollarSign, 
  Download, Calendar, ArrowUpRight, ArrowDownRight, RefreshCw 
} from 'lucide-react';
import { adminApi } from '../../utils/api';

export default function AdminReportsPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await adminApi.getStats();
        setStats(res.data.metrics);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const reportStats = stats ? [
    { label: 'Total Pendapatan', value: 'Rp 45.2M', trend: '+12.5%', up: true },
    { label: 'Siswa Terdaftar', value: stats.total_users, trend: '+18%', up: true },
    { label: 'Kursus Aktif', value: stats.active_courses, trend: '+5%', up: true },
    { label: 'Completion Rate', value: `${stats.completion_rate}%`, trend: '+2.1%', up: true },
  ] : [];

  if (loading) return (
    <div className="min-h-[400px] flex items-center justify-center">
      <RefreshCw size={32} className="text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="space-y-10 animate-slide-up pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight italic">Laporan & <span className="text-blue-600">Analitik</span></h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Pantau performa bisnis dan pertumbuhan platform WAC secara real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 uppercase tracking-widest">
          <Download size={18} /> Export Laporan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{s.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter">{s.value}</h3>
              <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${s.up ? 'text-emerald-500' : 'text-red-500'}`}>
                {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {s.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-80 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Tren Penjualan (6 Bulan Terakhir)</h3>
            <div className="p-2 bg-slate-50 rounded-xl text-slate-400"><Calendar size={18} /></div>
          </div>
          <div className="flex-1 flex items-end gap-3 mt-8">
             {[40, 70, 45, 90, 65, 80].map((h, i) => (
               <div key={i} className="flex-1 bg-slate-50 rounded-t-2xl relative group overflow-hidden" style={{ height: `${h}%` }}>
                 <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                   {h}M
                 </div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
          </div>
        </div>

        {/* Top Courses */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
           <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-8">Kursus Paling Populer</h3>
           <div className="space-y-6">
              {[
                { title: 'Excel Mastery: From Zero to Hero', sales: 412, color: 'bg-emerald-500' },
                { title: 'Word for Professionals', sales: 285, color: 'bg-blue-500' },
                { title: 'PowerPoint Animation Pro', sales: 198, color: 'bg-orange-500' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 rounded-xl ${c.color} flex-shrink-0 shadow-lg shadow-current/10`} />
                  <div className="flex-1">
                    <p className="text-xs font-black text-slate-900 uppercase italic tracking-tighter">{c.title}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                       <div className="flex-1 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                          <div className={`h-full ${c.color} group-hover:scale-x-105 transition-transform origin-left`} style={{ width: `${(c.sales/500)*100}%` }} />
                       </div>
                       <span className="text-[10px] font-black text-slate-400 uppercase italic">{c.sales} terjual</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
