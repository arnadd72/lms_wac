import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, BarChart2, 
  MessageSquare, Award, Settings, LogOut, 
  Bell, ChevronRight, Menu, X, Search
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const studentNav = [
  { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
  { name: 'Kursus Saya', path: '/dashboard/my-courses', icon: <BookOpen size={18} /> },
  { name: 'Progres Belajar', path: '/dashboard/progress', icon: <BarChart2 size={18} /> },
  { name: 'Komunitas', path: '/dashboard/community', icon: <MessageSquare size={18} /> },
  { name: 'Sertifikat', path: '/dashboard/certificates', icon: <Award size={18} /> },
  { name: 'Pengaturan', path: '/dashboard/settings', icon: <Settings size={18} /> },
];

export default function StudentLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout, user } = useAuth();

  const isActive = (path) =>
    path === '/dashboard' ? location.pathname === '/dashboard' : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Dark Premium Theme */}
      <aside className={`fixed top-0 left-0 bottom-0 z-40 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
           <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <Award size={24} />
           </div>
           <div className="ml-3">
              <h2 className="text-white font-black text-sm tracking-tight italic">WAC <span className="text-blue-500">Student</span></h2>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Learning Portal</p>
           </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
           {studentNav.map(item => (
             <Link 
               key={item.name} 
               to={item.path}
               onClick={() => setMobileOpen(false)}
               className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive(item.path) ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
             >
               <div className="flex items-center gap-3">
                 <span className={isActive(item.path) ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'}>{item.icon}</span>
                 {item.name}
               </div>
               {isActive(item.path) && <ChevronRight size={14} className="text-blue-200" />}
             </Link>
           ))}
        </nav>

        <div className="p-4 border-t border-slate-800/50">
           <button 
             onClick={logout}
             className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-red-500/10 hover:text-red-500 transition-all"
           >
             <LogOut size={18} /> Keluar Aplikasi
           </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={() => setMobileOpen(true)}>
            <Menu size={20} />
          </button>
          
          <div className="flex-1 max-w-md hidden md:block">
             <div className="relative">
                <input type="text" placeholder="Cari kursus atau materi..." className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20" />
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="relative p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:text-blue-600 transition-all">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="h-8 w-[1px] bg-slate-200 mx-2" />
             <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                   <p className="text-xs font-black text-slate-900 leading-none">{user?.name || 'Siswa'}</p>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Student Member</p>
                </div>
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold border-2 border-white shadow-lg uppercase">
                   {user?.name?.charAt(0) || 'S'}
                </div>
             </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-auto animate-slide-up">
          <Outlet />
        </main>
      </div>

      {mobileOpen && <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-35 md:hidden" onClick={() => setMobileOpen(false)} />}
    </div>
  );
}
