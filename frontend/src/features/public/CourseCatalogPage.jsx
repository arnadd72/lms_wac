import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, SlidersHorizontal, Star, Users, 
  BookOpen, Clock, X, ChevronDown, 
  Filter, PlayCircle, Zap 
} from 'lucide-react';

const COURSES = [
  { id: 1, title: 'Excel Mastery: From Zero to Hero', instructor: 'Sari Kusuma', category: 'Excel', level: 'Pemula', duration: '8 jam', modules: 12, lessons: 84, students: 4821, rating: 4.9, ratingCount: 1243, color: 'from-emerald-400 to-teal-600', badge: 'Terpopuler' },
  { id: 2, title: 'Word Professional Writing', instructor: 'Budi Santoso', category: 'Word', level: 'Pemula', duration: '5 jam', modules: 8, lessons: 56, students: 3205, rating: 4.8, ratingCount: 987, color: 'from-blue-400 to-indigo-600', badge: 'Baru' },
  { id: 3, title: 'PowerPoint Storytelling Pro', instructor: 'Sari Kusuma', category: 'PowerPoint', level: 'Menengah', duration: '6 jam', modules: 10, lessons: 65, students: 2987, rating: 4.7, ratingCount: 876, color: 'from-orange-400 to-red-500', badge: null },
  { id: 4, title: 'Excel Advanced: Pivot & Dashboard', instructor: 'Hendra Wijaya', category: 'Excel', level: 'Mahir', duration: '10 jam', modules: 15, lessons: 96, students: 1854, rating: 4.9, ratingCount: 645, color: 'from-teal-400 to-cyan-600', badge: null },
  { id: 5, title: 'Office 365: Cloud Productivity', instructor: 'Sari Kusuma', category: 'Office 365', level: 'Pemula', duration: '14 jam', modules: 18, lessons: 120, students: 2341, rating: 4.8, ratingCount: 789, color: 'from-purple-400 to-violet-600', badge: 'Diperbarui' },
  { id: 6, title: 'Outlook for Business Communication', instructor: 'Budi Santoso', category: 'Outlook', level: 'Pemula', duration: '3 jam', modules: 6, lessons: 38, students: 1023, rating: 4.6, ratingCount: 342, color: 'from-pink-400 to-rose-600', badge: null },
];

const CATEGORIES = ['Semua', 'Excel', 'Word', 'PowerPoint', 'Outlook', 'Office 365'];
const LEVELS = ['Semua Level', 'Pemula', 'Menengah', 'Mahir'];

export default function CourseCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeLevel, setActiveLevel] = useState('Semua Level');
  const [sort, setSort] = useState('Terpopuler');

  // Update local search state if URL changes
  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) setSearch(query);
  }, [searchParams]);

  const filtered = COURSES
    .filter(c => activeCategory === 'Semua' || c.category === activeCategory)
    .filter(c => activeLevel === 'Semua Level' || c.level === activeLevel)
    .filter(c => 
       c.title.toLowerCase().includes(search.toLowerCase()) || 
       c.instructor.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'Rating Tertinggi') return b.rating - a.rating;
      if (sort === 'Terbaru') return b.id - a.id;
      if (sort === 'A–Z') return a.title.localeCompare(b.title);
      return b.students - a.students; // Terpopuler
    });

  const handleSearchChange = (val) => {
    setSearch(val);
    setSearchParams(val ? { search: val } : {});
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Premium Catalog Hero */}
      <div className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -right-40 -top-40" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
             Explore Knowledge
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tight mb-4">Katalog <span className="text-blue-500">Kursus</span></h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium mb-10">Temukan ribuan materi pembelajaran Microsoft Office terbaik untuk karir Anda.</p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-blue-600/20 blur-2xl group-focus-within:bg-blue-600/30 transition-all rounded-3xl" />
            <div className="relative flex items-center bg-white p-2 rounded-[28px] shadow-2xl">
               <div className="pl-6 pr-3 text-slate-400">
                  <Search size={22} />
               </div>
               <input
                 type="text"
                 value={search}
                 onChange={e => handleSearchChange(e.target.value)}
                 placeholder="Cari kursus, topik, atau instruktur..."
                 className="w-full py-4 text-slate-900 font-bold outline-none placeholder-slate-400 bg-transparent"
               />
               {search && (
                 <button onClick={() => handleSearchChange('')} className="p-3 text-slate-300 hover:text-slate-600 transition-colors">
                   <X size={20} />
                 </button>
               )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Advanced Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
           <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${activeCategory === cat ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-600'}`}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="flex items-center gap-4">
              <div className="relative group">
                 <select 
                   value={activeLevel} 
                   onChange={e => setActiveLevel(e.target.value)}
                   className="appearance-none pl-10 pr-12 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all"
                 >
                   {LEVELS.map(l => <option key={l}>{l}</option>)}
                 </select>
                 <Zap size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
                 <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-900" />
              </div>

              <div className="relative group">
                 <select 
                   value={sort} 
                   onChange={e => setSort(e.target.value)}
                   className="appearance-none pl-10 pr-12 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all"
                 >
                   {['Terpopuler', 'Rating Tertinggi', 'Terbaru', 'A–Z'].map(s => <option key={s}>{s}</option>)}
                 </select>
                 <Filter size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
                 <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-900" />
              </div>
           </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
           <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
             Menampilkan <span className="text-slate-900">{filtered.length}</span> Hasil dari {COURSES.length} Kursus
           </p>
           {(activeCategory !== 'Semua' || activeLevel !== 'Semua Level' || search) && (
             <button 
               onClick={() => { setActiveCategory('Semua'); setActiveLevel('Semua Level'); handleSearchChange(''); }}
               className="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest"
             >
               Bersihkan Filter
             </button>
           )}
        </div>

        {/* Improved Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(c => (
            <Link to={`/courses/${c.id}`} key={c.id}
              className="bg-white rounded-[48px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all group p-4 flex flex-col">
              {/* Thumbnail */}
              <div className={`h-52 bg-gradient-to-br ${c.color} rounded-[36px] relative flex items-center justify-center overflow-hidden`}>
                 <PlayCircle size={56} className="text-white opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110" />
                 <div className="absolute top-4 left-4 px-4 py-1.5 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {c.level}
                 </div>
                 {c.badge && (
                   <div className="absolute top-4 right-4 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg border border-blue-400/30 animate-pulse">
                     {c.badge}
                   </div>
                 )}
                 <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold rounded-lg flex items-center gap-1.5">
                   <Clock size={12} /> {c.duration}
                 </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">{c.category}</p>
                   <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight italic">{c.title}</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Instruktur: {c.instructor}</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span className="font-black text-slate-900 text-xs">{c.rating}</span>
                    </div>
                    <div className="w-[1px] h-3 bg-slate-200" />
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                      <Users size={12} />
                      {c.students.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                    {c.modules} Modul · {c.lessons} Sesi
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[48px] border-2 border-dashed border-slate-100">
            <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
               <Search size={40} />
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Kursus Tidak Ditemukan</h3>
            <p className="text-slate-400 text-sm font-medium mt-2">Maaf, kami tidak dapat menemukan kursus dengan kata kunci "{search}".</p>
            <button 
              onClick={() => { setActiveCategory('Semua'); setActiveLevel('Semua Level'); handleSearchChange(''); }}
              className="mt-8 px-8 py-3 bg-slate-900 text-white text-xs font-black rounded-2xl hover:bg-slate-800 transition-all uppercase tracking-widest"
            >
              Lihat Semua Kursus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
