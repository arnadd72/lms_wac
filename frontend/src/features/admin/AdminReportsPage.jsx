import { 
  TrendingUp, Users, BookOpen, DollarSign, 
  Download, Calendar, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const REPORT_STATS = [
  { label: 'Total Pendapatan', value: 'Rp 45.2M', trend: '+12.5%', up: true },
  { label: 'Siswa Baru', value: '124', trend: '+18%', up: true },
  { label: 'Kursus Terjual', value: '86', trend: '-2.4%', up: false },
  { label: 'Engagement Rate', value: '72%', trend: '+5.2%', up: true },
];

export default function AdminReportsPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Laporan & Analitik</h1>
          <p className="text-gray-500 mt-1">Pantau performa bisnis dan pertumbuhan platform WAC.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <Download size={18} /> Export PDF/Excel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REPORT_STATS.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{s.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-gray-900">{s.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-bold ${s.up ? 'text-green-500' : 'text-red-500'}`}>
                {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {s.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Placeholder */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-80 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Tren Penjualan (6 Bulan Terakhir)</h3>
            <div className="p-2 bg-gray-50 rounded-xl"><Calendar size={16} className="text-gray-400" /></div>
          </div>
          <div className="flex-1 flex items-end gap-3 mt-6">
             {[40, 70, 45, 90, 65, 80].map((h, i) => (
               <div key={i} className="flex-1 bg-blue-100 rounded-t-xl relative group" style={{ height: `${h}%` }}>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   {h}M
                 </div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
          </div>
        </div>

        {/* Top Courses */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <h3 className="font-bold text-gray-900 mb-6">Kursus Paling Populer</h3>
           <div className="space-y-5">
              {[
                { title: 'Excel Mastery: From Zero to Hero', sales: 412, color: 'bg-green-500' },
                { title: 'Word for Professionals', sales: 285, color: 'bg-blue-500' },
                { title: 'PowerPoint Animation Pro', sales: 198, color: 'bg-orange-500' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${c.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">{c.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                       <div className="flex-1 h-1.5 bg-gray-50 rounded-full overflow-hidden">
                          <div className={`h-full ${c.color}`} style={{ width: `${(c.sales/500)*100}%` }} />
                       </div>
                       <span className="text-[10px] font-black text-gray-400">{c.sales} terjual</span>
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
