import { 
  Users, BookOpen, Star, DollarSign, TrendingUp, 
  ChevronRight, PlayCircle, Clock, AlertCircle, Plus 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = [
  { label: 'Total Siswa', value: '1,248', icon: <Users size={20} />, color: 'bg-blue-500', trend: '+12%' },
  { label: 'Kursus Aktif', value: '6', icon: <BookOpen size={20} />, color: 'bg-green-500', trend: '+1' },
  { label: 'Rating Rata-rata', value: '4.9', icon: <Star size={20} />, color: 'bg-yellow-500', trend: '+0.1' },
  { label: 'Estimasi Revenue', value: 'Rp 12.5M', icon: <DollarSign size={20} />, color: 'bg-purple-500', trend: '+18%' },
];

const MY_COURSES = [
  { id: 1, title: 'Excel dari Nol: Pemula Sampai Mahir', students: 842, rating: 4.9, status: 'published' },
  { id: 2, title: 'PowerPoint Animation Pro', students: 315, rating: 4.8, status: 'published' },
  { id: 3, title: 'Office 365 for Business', students: 91, rating: 0, status: 'draft' },
];

export default function InstructorDashboard() {
  return (
    <div className="space-y-10">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Halo, Sari! 👋</h1>
          <p className="text-gray-500 mt-1 font-medium">Ini ringkasan aktivitas pengajaranmu hari ini.</p>
        </div>
        <Link to="/instructor/courses/create" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-xl">
          <Plus size={20} /> Buat Kursus Baru
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl ${s.color} text-white flex items-center justify-center shadow-lg shadow-${s.color.split('-')[1]}-200`}>
                {s.icon}
              </div>
              <span className={`text-xs font-black px-2 py-1 rounded-lg ${s.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {s.trend}
              </span>
            </div>
            <p className="text-3xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Course Performance */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3">
                <TrendingUp size={24} className="text-blue-600" /> Performa Kursus
              </h2>
              <button className="text-sm font-bold text-blue-600 hover:underline">Lihat Semua</button>
           </div>
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-50">
                {MY_COURSES.map(course => (
                  <div key={course.id} className="p-6 flex items-center gap-6 hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                      <PlayCircle size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm">{course.title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                          <Users size={12} /> {course.students} Siswa
                        </span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" /> {course.rating || 'N/A'}
                        </span>
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase ${course.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                          {course.status}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-xl transition-all border border-gray-100">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Action Items / Notifications */}
        <div className="space-y-6">
           <h2 className="text-xl font-black text-gray-900 flex items-center gap-3">
             <AlertCircle size={24} className="text-orange-500" /> Perlu Tindakan
           </h2>
           <div className="space-y-4">
              <div className="p-5 bg-orange-50 border border-orange-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center"><Clock size={16} /></div>
                  <span className="text-xs font-black text-orange-900">Review Tugas</span>
                </div>
                <p className="text-xs text-orange-800 font-medium">Ada 12 tugas baru di kursus "Excel dari Nol" yang perlu dinilai.</p>
                <button className="mt-4 w-full py-2.5 bg-orange-500 text-white font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">Buka Antrean</button>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center"><Star size={16} /></div>
                  <span className="text-xs font-black text-blue-900">Ulasan Baru</span>
                </div>
                <p className="text-xs text-blue-800 font-medium">"Materi sangat membantu, tapi penjelasan VLOOKUP sedikit terlalu cepat."</p>
                <button className="mt-4 w-full py-2.5 bg-blue-500 text-white font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-200">Balas Ulasan</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
