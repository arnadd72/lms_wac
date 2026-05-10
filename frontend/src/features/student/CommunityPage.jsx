import { useState } from 'react';
import { 
  MessageSquare, Users, TrendingUp, Search, 
  Plus, MessageCircle, Heart, Share2, 
  MoreHorizontal, ChevronRight, Hash
} from 'lucide-react';

const POSTS = [
  { id: 1, user: 'Ahmad Fauzi', role: 'Siswa', content: 'Bagaimana cara cepat membuat VLOOKUP di antara dua workbook yang berbeda? Saya selalu gagal saat salah satu file ditutup.', likes: 12, comments: 8, category: 'Excel', time: '2 jam yang lalu' },
  { id: 2, user: 'Instruktur Sari', role: 'Instruktur', content: 'Halo semuanya! Saya baru saja mengunggah template latihan baru di Modul Word Pro. Silakan dicek ya!', likes: 45, comments: 15, category: 'Announcement', time: '5 jam yang lalu' },
];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-10 animate-slide-up pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Forum <span className="text-blue-600">Komunitas</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Ruang diskusi, berbagi tips, dan tanya jawab antar siswa WAC.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
          <Plus size={18} /> Diskusi Baru
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar Left: Categories */}
        <div className="hidden lg:block space-y-8">
           <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Kategori Topik</h3>
              <nav className="space-y-1">
                 {['Semua Diskusi', 'General', 'Excel Mastery', 'Word Pro', 'PowerPoint'].map((cat, i) => (
                   <button 
                     key={cat}
                     className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                   >
                     <div className="flex items-center gap-3">
                        <Hash size={14} className={i === 0 ? 'text-blue-600' : 'text-slate-300'} />
                        {cat}
                     </div>
                     <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-md">12</span>
                   </button>
                 ))}
              </nav>
           </div>

           <div className="bg-slate-900 p-8 rounded-[32px] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
              <TrendingUp className="text-blue-500/20 absolute -right-4 -bottom-4" size={100} />
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Trending</h4>
              <p className="text-sm font-bold leading-relaxed">Topik "Excel VLOOKUP" sedang ramai dibicarakan hari ini!</p>
           </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
           {/* Search Bar */}
           <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-3">
              <Search size={18} className="text-slate-400 ml-2" />
              <input 
                type="text" 
                placeholder="Cari diskusi atau topik..." 
                className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>

           {/* Post List */}
           <div className="space-y-6">
              {POSTS.map(post => (
                <div key={post.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-xs">
                            {post.user.charAt(0)}
                         </div>
                         <div>
                            <div className="flex items-center gap-2">
                               <p className="text-sm font-black text-slate-900">{post.user}</p>
                               <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${post.role === 'Instruktur' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                 {post.role}
                               </span>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 mt-0.5">{post.time}</p>
                         </div>
                      </div>
                      <button className="text-slate-300 hover:text-slate-900"><MoreHorizontal size={20} /></button>
                   </div>

                   <div className="space-y-4">
                      <div className="inline-flex px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-100">
                         #{post.category}
                      </div>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {post.content}
                      </p>
                   </div>

                   <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                         <button className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors">
                            <Heart size={18} />
                            <span className="text-xs font-black">{post.likes}</span>
                         </button>
                         <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
                            <MessageCircle size={18} />
                            <span className="text-xs font-black">{post.comments}</span>
                         </button>
                      </div>
                      <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                         <Share2 size={18} />
                      </button>
                   </div>
                </div>
              ))}
           </div>

           <button className="w-full py-4 bg-slate-50 text-slate-400 text-xs font-black rounded-2xl hover:bg-slate-100 hover:text-slate-600 transition-all border border-dashed border-slate-200 uppercase tracking-widest">
              Muat Diskusi Lainnya
           </button>
        </div>
      </div>
    </div>
  );
}
