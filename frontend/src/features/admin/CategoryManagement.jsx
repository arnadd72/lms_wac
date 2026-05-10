import { useState } from 'react';
import { 
  Tag, Plus, Search, MoreVertical, 
  Edit2, Trash2, BookOpen, ChevronRight,
  Monitor, Briefcase, Layout, Palette
} from 'lucide-react';

const MOCK_CATEGORIES = [
  { id: 1, name: 'Perkantoran', slug: 'perkantoran', courseCount: 18, icon: <Briefcase size={20} />, color: 'bg-blue-500' },
  { id: 2, name: 'Desain Grafis', slug: 'desain-grafis', courseCount: 12, icon: <Palette size={20} />, color: 'bg-purple-500' },
  { id: 3, name: 'Teknologi', slug: 'teknologi', courseCount: 7, icon: <Monitor size={20} />, color: 'bg-green-500' },
  { id: 4, name: 'Administrasi', slug: 'administrasi', courseCount: 5, icon: <Layout size={20} />, color: 'bg-orange-500' },
];

export default function CategoryManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-10 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Manajemen <span className="text-blue-600">Kategori</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Kelola pengelompokan kursus untuk memudahkan navigasi siswa.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
          <Plus size={18} /> Tambah Kategori
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category List */}
        <div className="lg:col-span-2 space-y-4">
           <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-3">
              <Search size={18} className="text-slate-400 ml-2" />
              <input 
                type="text" 
                placeholder="Cari kategori..." 
                className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_CATEGORIES.map(cat => (
                <div key={cat.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group cursor-pointer relative overflow-hidden">
                   <div className={`absolute top-0 right-0 w-24 h-24 ${cat.color} opacity-[0.03] -mr-8 -mt-8 rounded-full`} />
                   <div className="flex items-start justify-between relative z-10">
                      <div className={`w-12 h-12 ${cat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                         {cat.icon}
                      </div>
                      <div className="flex gap-1">
                         <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                         <button className="p-2 text-slate-300 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                      </div>
                   </div>
                   <div className="mt-6">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">{cat.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/{cat.slug}</p>
                         <p className="text-xs font-black text-blue-600 flex items-center gap-1">
                           <BookOpen size={14} /> {cat.courseCount} Kursus
                         </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Info Card */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl shadow-slate-900/30">
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Tips Kategori</h4>
              <ul className="space-y-4">
                 <li className="flex gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black">1</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">Gunakan nama kategori yang umum dicari oleh siswa seperti "Excel" atau "Microsoft Word".</p>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black">2</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">Pastikan setiap kategori memiliki minimal 3-5 kursus agar katalog tidak terlihat kosong.</p>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black">3</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">Gunakan icon yang representatif untuk meningkatkan daya tarik visual kategori.</p>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
