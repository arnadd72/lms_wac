import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Medal, Flame, Star, Crown, TrendingUp, Users } from 'lucide-react';

const LEADERBOARD = [
  { rank: 1, name: 'Rina Handayani', avatar: 'R', points: 4280, streak: 32, badges: 7, courses: 5 },
  { rank: 2, name: 'Ahmad Fauzi', avatar: 'A', points: 3950, streak: 18, badges: 5, courses: 4 },
  { rank: 3, name: 'Dewi Rahayu', avatar: 'D', points: 3720, streak: 25, badges: 6, courses: 4 },
  { rank: 4, name: 'Budi Santoso', avatar: 'B', points: 3100, streak: 10, badges: 4, courses: 3 },
  { rank: 5, name: 'Sari Kurnia', avatar: 'S', points: 2850, streak: 7, badges: 3, courses: 3 },
  { rank: 6, name: 'Hendra W.', avatar: 'H', points: 2600, streak: 5, badges: 2, courses: 2 },
  { rank: 7, name: 'Lina Oktavia', avatar: 'L', points: 2410, streak: 3, badges: 3, courses: 3 },
  { rank: 8, name: 'Reza Pratama', avatar: 'R', points: 2200, streak: 6, badges: 2, courses: 2 },
  // Simulated current user
  { rank: 24, name: 'Kamu', avatar: 'K', points: 820, streak: 5, badges: 2, courses: 2, isMe: true },
];

const PODIUM = LEADERBOARD.slice(0, 3);

const RANK_ICONS = {
  1: <Crown size={20} className="text-yellow-400" />,
  2: <Medal size={20} className="text-gray-300" />,
  3: <Medal size={20} className="text-amber-600" />,
};

const PODIUM_ORDER = [PODIUM[1], PODIUM[0], PODIUM[2]]; // 2nd, 1st, 3rd visual order
const PODIUM_H = ['h-24', 'h-32', 'h-20'];
const PODIUM_COLOR = ['bg-gray-500', 'bg-yellow-500', 'bg-amber-600'];
const PODIUM_RANK_COLOR = ['bg-gray-600 text-gray-200', 'bg-yellow-400 text-yellow-900', 'bg-amber-600 text-white'];

export default function LeaderboardPage() {
  const [period, setPeriod] = useState('weekly');
  const others = LEADERBOARD.slice(3).filter(u => !u.isMe);
  const me = LEADERBOARD.find(u => u.isMe);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1 flex items-center justify-center gap-2">
          <Trophy size={30} className="text-yellow-500" /> Leaderboard
        </h1>
        <p className="text-gray-500">Bersaing dengan sesama pelajar dan raih posisi teratas!</p>
      </div>

      {/* Period tabs */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-xl max-w-xs mx-auto">
        {[['weekly', 'Mingguan'], ['monthly', 'Bulanan'], ['alltime', 'All-Time']].map(([k, l]) => (
          <button key={k} onClick={() => setPeriod(k)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${period === k ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            {l}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
        <p className="text-center text-sm font-semibold text-blue-200 mb-6 uppercase tracking-widest">🏆 Top 3</p>
        <div className="flex items-end justify-center gap-4">
          {PODIUM_ORDER.map((u, i) => (
            <div key={u.rank} className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-black">
                  {u.avatar}
                </div>
                <div className={`absolute -bottom-2 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${PODIUM_RANK_COLOR[i]}`}>
                  {u.rank}
                </div>
              </div>
              <div className={`${PODIUM_H[i]} ${PODIUM_COLOR[i]} w-20 rounded-t-xl flex flex-col items-center justify-end pb-3 opacity-80`} />
              <p className="text-sm font-bold text-center max-w-20 leading-tight">{u.name.split(' ')[0]}</p>
              <p className="text-blue-200 text-xs font-semibold">{u.points.toLocaleString()} poin</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings 4+ */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Users size={16} className="text-gray-400" />
          <span className="font-bold text-gray-900 text-sm">Peringkat Selanjutnya</span>
        </div>
        <div className="divide-y divide-gray-50">
          {others.map(u => (
            <div key={u.rank} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <div className="w-8 text-center">
                {RANK_ICONS[u.rank] || <span className="text-gray-400 font-bold text-sm">{u.rank}</span>}
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {u.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{u.name}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                  <span>🔥 {u.streak} hari</span>
                  <span>🏅 {u.badges} badge</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{u.points.toLocaleString()}</p>
                <p className="text-xs text-gray-400">poin</p>
              </div>
            </div>
          ))}
        </div>

        {/* My position — sticky */}
        {me && (
          <div className="border-t-4 border-blue-100 bg-blue-50 px-5 py-4 flex items-center gap-4 sticky bottom-0">
            <div className="w-8 text-center text-gray-500 font-bold text-sm">{me.rank}</div>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {me.avatar}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-blue-900 text-sm">{me.name} <span className="text-xs text-blue-500 font-normal">(Kamu)</span></p>
              <div className="flex items-center gap-3 text-xs text-blue-500 mt-0.5">
                <span>🔥 {me.streak} hari</span>
                <span>🏅 {me.badges} badge</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-blue-800">{me.points.toLocaleString()}</p>
              <p className="text-xs text-blue-400">poin</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <Link to="/dashboard" className="text-blue-600 text-sm hover:text-blue-700 font-medium">
          ← Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
