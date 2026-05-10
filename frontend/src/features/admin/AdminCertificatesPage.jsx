import { useState, useEffect } from 'react';
import { 
  Award, ShieldCheck, Download, Search, 
  Filter, MoreVertical, ExternalLink, RefreshCw,
  Clock, CheckCircle, AlertCircle
} from 'lucide-react';
import { adminApi } from '../../utils/api';

export default function AdminCertificatesPage() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const ISSUED_CERTIFICATES = [
    { id: 'CERT-2026-001', student: 'Rina Handayani', course: 'Excel Mastery', date: '10 Mei 2026', code: 'WAC-EX-9921' },
    { id: 'CERT-2026-002', student: 'Budi Santoso', course: 'Word Professional', date: '08 Mei 2026', code: 'WAC-WD-1104' },
    { id: 'CERT-2026-003', student: 'Ahmad Fauzi', course: 'PowerPoint Pro', date: '05 Mei 2026', code: 'WAC-PP-3392' },
  ];

  return (
    <div className="space-y-10 animate-slide-up pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight italic">Manajemen <span className="text-blue-600">Sertifikat</span></h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Kelola penerbitan, desain, dan verifikasi sertifikat siswa secara global.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-xs font-black rounded-xl hover:bg-slate-50 transition-all uppercase tracking-widest">
             Template
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-xs font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest">
             <Award size={18} /> Terbitkan Manual
           </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-900/20 relative overflow-hidden group">
           <div className="relative z-10">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Total Sertifikat</p>
              <h3 className="text-4xl font-black italic tracking-tighter">1,248</h3>
           </div>
           <Award size={48} className="absolute -right-2 -bottom-2 text-white/5 group-hover:text-blue-500/20 group-hover:scale-125 transition-all" />
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Verifikasi Valid</p>
             <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter">412</h3>
           </div>
           <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
             <ShieldCheck size={24} />
           </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Approval</p>
             <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter">0</h3>
           </div>
           <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
             <Clock size={24} />
           </div>
        </div>
      </div>

      {/* List Area */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari Kode Sertifikat atau Nama Siswa..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20 font-bold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Siswa</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kursus</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Kode Verifikasi</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ISSUED_CERTIFICATES.map(c => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter">{c.student}</p>
                    <p className="text-[10px] text-slate-400 font-bold">{c.id}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-slate-600 uppercase">{c.course}</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <code className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-lg tracking-widest">{c.code}</code>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button title="Lihat Sertifikat" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><ExternalLink size={18} /></button>
                      <button title="Download" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"><Download size={18} /></button>
                      <button className="p-2 text-slate-300 hover:text-slate-600 rounded-lg transition-all"><MoreVertical size={18} /></button>
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
