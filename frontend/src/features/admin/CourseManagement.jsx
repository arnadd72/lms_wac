import { useState } from 'react';
import { 
  BookOpen, Search, Filter, Plus, 
  MoreHorizontal, Edit2, Trash2, 
  Eye, CheckCircle, Clock, Star, 
  Layers, Users, ArrowUpRight 
} from 'lucide-react';

const MOCK_COURSES = [
  { id: 1, title: 'Excel Mastery: Zero to Hero', instructor: 'Budi Raharjo', category: 'Perkantoran', students: 412, rating: 4.8, status: 'Published', price: 'Rp 249.000' },
  { id: 2, title: 'Word for Professional Writing', instructor: 'Sari Putri', category: 'Perkantoran', students: 285, rating: 4.7, status: 'Draft', price: 'Rp 199.000' },
  { id: 3, title: 'PowerPoint Animation Pro', instructor: 'Andi Wijaya', category: 'Desain', students: 198, rating: 4.9, status: 'Published', price: 'Rp 299.000' },
];

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-10 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Katalog <span className="text-blue-600">Kursus</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Pantau, edit, dan verifikasi seluruh materi pembelajaran di WAC.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
          <Plus size={18} /> Buat Kursus Baru
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-900/20 flex items-center justify-between group overflow-hidden relative">
            <div className="relative z-10">
               <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Total Kursus</p>
               <h3 className="text-4xl font-black italic tracking-tighter">42</h3>
            </div>
            <BookOpen size={40} className="text-white/10 group-hover:scale-125 group-hover:text-blue-500/20 transition-all absolute -right-2 -bottom-2" />
         </div>
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Menunggu Review</p>
               <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">05</h3>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
               <Clock size={24} />
            </div>
         </div>
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Siswa Terdaftar</p>
               <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">1.2K+</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
               <Users size={24} />
            </div>
         </div>
      </div>

      {/* Filter & List */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="relative flex-1 w-full">
              <input 
                type="text" 
                placeholder="Cari judul kursus atau instruktur..." 
                className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-100 transition-all border border-slate-100">
                <Filter size={16} /> Filter
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Detail Kursus</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Instruktur</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Metrik</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_COURSES.map(course => (
                <tr key={course.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-6 min-w-[300px]">
                    <div className="flex items-start gap-4">
                       <div className="w-16 h-12 bg-slate-100 rounded-xl flex-shrink-0 border border-slate-200 overflow-hidden group-hover:shadow-lg transition-all flex items-center justify-center">
                          <BookOpen size={20} className="text-slate-300" />
                       </div>
                       <div>
                          <p className="text-sm font-black text-slate-900 line-clamp-1">{course.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-md uppercase">{course.category}</span>
                             <span className="text-[10px] font-bold text-slate-400">{course.price}</span>
                          </div>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-sm font-bold text-slate-600">{course.instructor}</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                       <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                          <Users size={14} className="text-slate-400" /> {course.students}
                       </div>
                       <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                          <Star size={14} className="text-orange-400" /> {course.rating}
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${course.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                       <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye size={16} /></button>
                       <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" title="Edit"><Edit2 size={16} /></button>
                       <button className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
