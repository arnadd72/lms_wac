import { Link } from 'react-router-dom';
import { BookOpen, Camera, Send, Globe, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full -mr-40 -mt-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                <BookOpen size={22} className="text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter italic">WAC <span className="text-blue-500">LMS</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Platform pembelajaran Microsoft Office terpercaya di Indonesia. Membantu ribuan profesional meningkatkan karir melalui konten berkualitas dan terverifikasi.
            </p>
            <div className="flex gap-4">
              {[Camera, Send, Globe, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Tautan Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Katalog Kursus', 'Jadi Instruktur', 'Bantuan & FAQ'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Bantuan</h4>
            <ul className="space-y-4">
              {['Syarat & Ketentuan', 'Kebijakan Privasi', 'Verifikasi Sertifikat', 'Hubungi Kami'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                Jakarta Selatan, Indonesia
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                halo@wac.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © 2024 WAC LEARNING SYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <Link to="#" className="hover:text-blue-500">INDONESIA</Link>
            <Link to="#" className="hover:text-blue-500">ENGLISH</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
