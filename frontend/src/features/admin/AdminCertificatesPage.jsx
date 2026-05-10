import { Award, ShieldCheck, Download, Search, Filter, MoreVertical, ExternalLink } from 'lucide-react';

const ISSUED_CERTIFICATES = [
  { id: 'CERT-2026-001', student: 'Rina Handayani', course: 'Excel Mastery', date: '10 Mei 2026', code: 'WAC-EX-9921' },
  { id: 'CERT-2026-002', student: 'Budi Santoso', course: 'Word Professional', date: '08 Mei 2026', code: 'WAC-WD-1104' },
  { id: 'CERT-2026-003', student: 'Ahmad Fauzi', course: 'PowerPoint Pro', date: '05 Mei 2026', code: 'WAC-PP-3392' },
];

export default function AdminCertificatesPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Manajemen Sertifikat</h1>
          <p className="text-gray-500 mt-1">Kelola penerbitan, desain, dan verifikasi sertifikat siswa.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl text-sm hover:bg-gray-50 transition-all">
             Desain Sertifikat
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
             <Award size={18} /> Terbitkan Manual
           </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white">
           <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">Total Sertifikat</p>
           <h3 className="text-4xl font-black italic">1,248</h3>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Verifikasi Bulan Ini</p>
             <h3 className="text-2xl font-black text-gray-900">412</h3>
           </div>
           <ShieldCheck size={32} className="text-green-500 opacity-20" />
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Menunggu Approval</p>
             <h3 className="text-2xl font-black text-gray-900">0</h3>
           </div>
           <Award size={32} className="text-orange-500 opacity-20" />
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
           <h3 className="font-bold text-gray-900">Sertifikat Terbaru</h3>
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl">
                 <Search size={16} className="text-gray-400" />
                 <input type="text" placeholder="Cari Kode / Nama..." className="bg-transparent border-none outline-none text-xs w-48" />
              </div>
              <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-xl transition-all border border-gray-100">
                <Filter size={18} />
              </button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Siswa</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Kursus</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Tanggal Terbit</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Kode Verifikasi</th>
                <th className="px-6 py-4 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ISSUED_CERTIFICATES.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-gray-900">{c.student}</p>
                    <p className="text-[10px] text-gray-400">{c.id}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-semibold text-gray-600">{c.course}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs text-gray-500">{c.date}</span>
                  </td>
                  <td className="px-6 py-5">
                    <code className="text-[10px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded tracking-tighter">{c.code}</code>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <button title="Lihat Sertifikat" className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><ExternalLink size={16} /></button>
                      <button title="Download" className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><Download size={16} /></button>
                      <button className="p-2 text-gray-300 hover:text-gray-600 transition-colors"><MoreVertical size={16} /></button>
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
