import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, CheckCircle2, Clock, AlertCircle, Award, 
  MessageSquare, Trash2, Filter, MoreHorizontal, ArrowLeft,
  Circle
} from 'lucide-react';

const INITIAL_NOTIFICATIONS = [
  { 
    id: 1, 
    title: 'Sertifikat Diterbitkan!', 
    message: 'Selamat! Kamu telah menyelesaikan kursus "Excel Dasar". Sertifikatmu sudah siap diunduh.', 
    type: 'certificate', 
    date: '5 menit lalu', 
    read: false 
  },
  { 
    id: 2, 
    title: 'Tugas Selesai Dinilai', 
    message: 'Instruktur telah memberikan nilai untuk tugas "Laporan Keuangan". Kamu mendapat skor 95/100.', 
    type: 'grade', 
    date: '2 jam lalu', 
    read: false 
  },
  { 
    id: 3, 
    title: 'Pengingat Deadline', 
    message: 'Tugas "Formula & Fungsi Lanjutan" akan segera berakhir dalam 24 jam.', 
    type: 'deadline', 
    date: '5 jam lalu', 
    read: true 
  },
  { 
    id: 4, 
    title: 'Diskusi Baru', 
    message: 'Seseorang menanggapi pertanyaanmu di forum kursus PowerPoint.', 
    type: 'community', 
    date: '1 hari lalu', 
    read: true 
  },
  { 
    id: 5, 
    title: 'Update Kursus', 
    message: 'Ada 2 video lesson baru ditambahkan ke kursus "Office 365 Mastery".', 
    type: 'update', 
    date: '2 hari lalu', 
    read: true 
  },
];

const TYPE_CONFIG = {
  certificate: { icon: <Award className="text-yellow-500" />, bg: 'bg-yellow-500/10' },
  grade: { icon: <CheckCircle2 className="text-green-500" />, bg: 'bg-green-500/10' },
  deadline: { icon: <AlertCircle className="text-red-500" />, bg: 'bg-red-500/10' },
  community: { icon: <MessageSquare className="text-blue-500" />, bg: 'bg-blue-500/10' },
  update: { icon: <Bell className="text-purple-500" />, bg: 'bg-purple-500/10' },
};

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState('all');

  const filtered = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    return true;
  });

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteOne = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const toggleRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-2xl font-extrabold text-gray-900">Notifikasi</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={markAllRead} className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Tandai Semua Dibaca
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex gap-4">
            <button onClick={() => setFilter('all')} 
              className={`text-sm font-bold transition-colors ${filter === 'all' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
              Semua
            </button>
            <button onClick={() => setFilter('unread')}
              className={`text-sm font-bold transition-colors ${filter === 'unread' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
              Belum Dibaca
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 bg-blue-600 text-white text-[10px] rounded-full">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Filter size={16} />
          </button>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-50">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <Bell size={40} className="mx-auto text-gray-200 mb-3" />
              <p className="text-gray-400 font-medium">Tidak ada notifikasi untuk ditampilkan.</p>
            </div>
          ) : (
            filtered.map((n) => (
              <div key={n.id} className={`group flex gap-4 px-6 py-5 transition-colors ${!n.read ? 'bg-blue-50/30' : 'hover:bg-gray-50'}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${TYPE_CONFIG[n.type]?.bg || 'bg-gray-100'}`}>
                  {TYPE_CONFIG[n.type]?.icon || <Bell size={20} className="text-gray-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className={`text-sm font-bold truncate ${!n.read ? 'text-gray-900' : 'text-gray-600'}`}>{n.title}</h3>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap flex items-center gap-1">
                      <Clock size={10} /> {n.date}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">{n.message}</p>
                  <div className="flex items-center gap-4">
                    <button className="text-[10px] font-bold text-blue-600 hover:underline">Lihat Detail</button>
                    <button onClick={() => toggleRead(n.id)} className="text-[10px] font-bold text-gray-400 hover:text-gray-600">
                      {n.read ? 'Tandai Belum Dibaca' : 'Tandai Dibaca'}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between py-1">
                  {!n.read && <Circle size={8} className="fill-blue-600 text-blue-600" />}
                  <button onClick={() => deleteOne(n.id)} className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-300 hover:text-red-500 transition-all">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-400">Notifikasi lebih dari 30 hari akan dihapus otomatis dari sistem.</p>
      </div>
    </div>
  );
}
