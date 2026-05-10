import { TrendingUp, Award, Clock, BookOpen, Star, Calendar, ChevronRight } from 'lucide-react';

const STATS = [
  { label: 'Waktu Belajar', value: '42j 15m', icon: <Clock className="text-blue-500" />, bg: 'bg-blue-50', change: '+5j minggu ini' },
  { label: 'Kursus Selesai', value: '4', icon: <BookOpen className="text-green-500" />, bg: 'bg-green-50', change: '+1 bulan ini' },
  { label: 'Poin Diraih', value: '1,280', icon: <Star className="text-yellow-500" />, bg: 'bg-yellow-50', change: '+120 hari ini' },
  { label: 'Sertifikat', value: '3', icon: <Award className="text-purple-500" />, bg: 'bg-purple-50', change: 'Lihat semua' },
];

const RECENT_ACTIVITY = [
  { activity: 'Lulus Kuis: Pivot Table Dasar', course: 'Excel dari Nol', date: 'Hari ini, 14:20', points: '+20' },
  { activity: 'Menyelesaikan Lesson: Video VLOOKUP', course: 'Excel dari Nol', date: 'Kemarin, 20:15', points: '+5' },
  { activity: 'Mengumpulkan Tugas: Laporan Word', course: 'Word Professional', date: '2 hari lalu', points: '+15' },
  { activity: 'Lulus Kuis: Mail Merge', course: 'Word Professional', date: '3 hari lalu', points: '+20' },
];

export default function ProgressPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-black text-gray-900">Progress Belajar</h1>
        <p className="text-sm text-gray-500 mt-1">Pantau pencapaian dan aktivitas belajarmu.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-4`}>
              {s.icon}
            </div>
            <p className="text-3xl font-black text-gray-900">{s.value}</p>
            <p className="text-sm font-bold text-gray-400 mt-1">{s.label}</p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-blue-600">{s.change}</span>
              <ChevronRight size={14} className="text-gray-300" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp size={18} className="text-blue-600" /> Aktivitas Terbaru
              </h2>
              <button className="text-xs font-bold text-blue-600 hover:underline">Download Report</button>
            </div>
            <div className="divide-y divide-gray-50">
              {RECENT_ACTIVITY.map((a, i) => (
                <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{a.activity}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{a.course} • {a.date}</p>
                    </div>
                  </div>
                  <span className="text-sm font-black text-green-600">{a.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Streak & Weekly Goal Recap */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
             <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold text-indigo-100 uppercase tracking-widest text-xs">Streak Belajar</h3>
               <Calendar size={20} className="text-indigo-300" />
             </div>
             <div className="flex items-center gap-4">
                <div className="text-6xl font-black italic">5</div>
                <div>
                  <p className="text-xl font-bold">Hari 🔥</p>
                  <p className="text-xs text-indigo-200 mt-1">Hampir mencapai target 7 hari!</p>
                </div>
             </div>
             <div className="mt-8 grid grid-cols-7 gap-1">
                {['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 5 ? 'bg-blue-400 text-white' : 'bg-white/10 text-white/30'}`}>
                      {i < 5 ? '✓' : ''}
                    </div>
                    <span className="text-[10px] font-bold text-indigo-300">{d}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
             <h3 className="font-bold text-gray-900 text-sm mb-4">Statistik Bulanan</h3>
             <div className="space-y-4">
                {[
                  { label: 'Video Pelajaran', val: '24', color: 'bg-blue-500' },
                  { label: 'Artikel & Bacaan', val: '12', color: 'bg-green-500' },
                  { label: 'Kuis & Tugas', val: '8', color: 'bg-purple-500' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-500 font-medium">{s.label}</span>
                      <span className="font-bold text-gray-900">{s.val}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${(parseInt(s.val) / 30) * 100}%` }} />
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
