import { Link } from 'react-router-dom';
import { ArrowLeft, History, TrendingUp, Award, PlayCircle, FileText, CheckCircle2, MessageSquare, Star, Clock } from 'lucide-react';

const POINTS_HISTORY = [
  { id: 1, activity: 'Menyelesaikan Modul: Dasar Excel', type: 'module_completion', points: 50, date: '10 Mei 2024, 14:20' },
  { id: 2, activity: 'Lulus Kuis: Pivot Table (Skor Sempurna)', type: 'quiz_perfect', points: 30, date: '10 Mei 2024, 11:05' },
  { id: 3, activity: 'Menyelesaikan Lesson: Video VLOOKUP', type: 'lesson_video', points: 5, date: '09 Mei 2024, 20:15' },
  { id: 4, activity: 'Bonus: Login 7 Hari Berturut-turut', type: 'streak_bonus', points: 50, date: '08 Mei 2024, 08:30' },
  { id: 5, activity: 'Memberi Ulasan Kursus', type: 'review', points: 10, date: '07 Mei 2024, 16:45' },
  { id: 6, activity: 'Mengumpulkan Tugas: Laporan Keuangan', type: 'assignment', points: 15, date: '06 Mei 2024, 22:10' },
  { id: 7, activity: 'Menyelesaikan Lesson: Artikel Dasar Word', type: 'lesson_article', points: 3, date: '05 Mei 2024, 10:00' },
];

const ICON_MAP = {
  module_completion: { icon: <Award className="text-yellow-500" />, bg: 'bg-yellow-500/10' },
  quiz_perfect: { icon: <Star className="text-amber-500" />, bg: 'bg-amber-500/10' },
  lesson_video: { icon: <PlayCircle className="text-blue-500" />, bg: 'bg-blue-500/10' },
  streak_bonus: { icon: <TrendingUp className="text-green-500" />, bg: 'bg-green-500/10' },
  review: { icon: <MessageSquare className="text-purple-500" />, bg: 'bg-purple-500/10' },
  assignment: { icon: <CheckCircle2 className="text-indigo-500" />, bg: 'bg-indigo-500/10' },
  lesson_article: { icon: <FileText className="text-orange-500" />, bg: 'bg-orange-500/10' },
};

export default function PointsHistory() {
  const totalPoints = POINTS_HISTORY.reduce((sum, item) => sum + item.points, 0);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link to="/dashboard" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
        <ArrowLeft size={16} /> Kembali ke Dashboard
      </Link>

      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl flex items-center justify-between">
        <div>
          <p className="text-indigo-100 text-sm font-semibold uppercase tracking-wider mb-1">Total Saldo Poin</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black">{totalPoints.toLocaleString()}</span>
            <span className="text-indigo-200 font-bold">WAC Points</span>
          </div>
        </div>
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <History size={32} />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Clock size={18} className="text-gray-400" /> Riwayat Aktivitas
          </h2>
          <span className="text-xs text-gray-400 font-medium">{POINTS_HISTORY.length} Transaksi Terakhir</span>
        </div>

        <div className="divide-y divide-gray-50">
          {POINTS_HISTORY.map((item) => (
            <div key={item.id} className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${ICON_MAP[item.type]?.bg || 'bg-gray-100'}`}>
                {ICON_MAP[item.type]?.icon || <Award className="text-gray-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-sm truncate">{item.activity}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-green-600">+{item.points}</span>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Poin</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>

      <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl flex gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0 font-bold">!</div>
        <div>
          <h4 className="font-bold text-amber-900 text-sm mb-1">Kegunaan Poin</h4>
          <p className="text-xs text-amber-800 leading-relaxed">
            Kumpulkan poin untuk naik peringkat di Leaderboard mingguan dan raih Badge spesial! Di masa depan, poin dapat ditukarkan dengan potongan harga khusus untuk kursus premium atau merchandise eksklusif WAC.
          </p>
        </div>
      </div>
    </div>
  );
}
