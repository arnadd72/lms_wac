import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Search, Menu, X } from 'lucide-react';

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Kursus', to: '/courses' },
    { label: 'Instruktur', to: '/#instructor' },
    { label: 'Tentang', to: '/#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">WAC <span className="text-blue-600">LMS</span></span>
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a 
              key={l.label} 
              href={l.to}
              onClick={(e) => {
                if (l.to.startsWith('/#')) {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById(l.to.substring(2))?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${location.pathname === l.to ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Search + Auth */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari kursus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full text-xs font-bold text-slate-700 placeholder-slate-400 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
            />
          </div>
          <Link to="/login" className="text-xs font-black text-slate-600 hover:text-blue-600 px-3 py-2 uppercase tracking-widest">
            Masuk
          </Link>
          <Link to="/register" className="text-xs font-black bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest">
            Daftar Gratis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 animate-in fade-in duration-300">
          <div className="space-y-1">
             {navLinks.map(l => (
               <a 
                 key={l.label} 
                 href={l.to} 
                 onClick={() => setMenuOpen(false)}
                 className="block px-4 py-3 text-slate-700 font-bold text-sm hover:bg-slate-50 rounded-xl"
               >
                 {l.label}
               </a>
             ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-center py-4 border border-slate-200 rounded-2xl text-slate-700 font-black text-xs uppercase tracking-widest">Masuk</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="block text-center py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-200">Daftar Gratis</Link>
          </div>
        </div>
      )}
    </header>
  );
}
