import { Link } from 'react-router-dom';
import { Award, Download, Share2, ExternalLink, CheckCircle2, Calendar, User, BookOpen, ShieldCheck, Zap } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 1,
    verification_code: 'WAC-2024-EXC-A7F3B2',
    course_title: 'Excel dari Nol: Pemula Sampai Mahir',
    instructor: 'Sari Kusuma',
    issued_at: '15 Januari 2024',
    category: 'Microsoft Excel',
    color: 'from-blue-600 to-indigo-900',
  },
  {
    id: 2,
    verification_code: 'WAC-2024-WRD-C9D1E5',
    course_title: 'Word Professional: Laporan & Proposal Bisnis',
    instructor: 'Budi Santoso',
    issued_at: '28 Februari 2024',
    category: 'Microsoft Word',
    color: 'from-slate-700 to-slate-900',
  },
];

export default function CertificatePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Sertifikat <span className="text-blue-600">Keahlian</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Koleksi pencapaian resmi Anda yang diakui oleh WAC Learning System.</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-2xl">
           <ShieldCheck size={18} className="text-blue-600" />
           <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">Semua Sertifikat Terverifikasi</span>
        </div>
      </div>

      {CERTIFICATES.length === 0 ? (
        <div className="bg-white rounded-[40px] border border-slate-100 p-20 text-center shadow-sm">
          <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
             <Award size={48} />
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">Belum Ada Sertifikat</h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xs mx-auto">Selesaikan setidaknya satu kursus dengan nilai kuis minimal 70 untuk mengklaim sertifikat pertama Anda.</p>
          <Link to="/courses" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase text-xs tracking-widest">
            <Zap size={16} /> Jelajahi Kursus
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {CERTIFICATES.map(cert => (
            <div key={cert.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all group">
              <div className="flex flex-col lg:flex-row">
                {/* Certificate Visual Section */}
                <div className={`bg-gradient-to-br ${cert.color} lg:w-80 flex-shrink-0 p-10 flex flex-col items-center justify-center text-white text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                  <Award size={64} className="mb-4 text-blue-400 drop-shadow-2xl animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-2">Verified Achievement</p>
                  <div className="w-12 h-1 bg-blue-500/50 rounded-full mb-6" />
                  <p className="text-sm font-black italic">WAC ACADEMY</p>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">{cert.category}</span>
                      <h3 className="text-2xl font-black text-slate-900 mt-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors italic">{cert.course_title}</h3>
                      <div className="flex flex-wrap gap-6 mt-6">
                        <div className="flex items-center gap-2 text-slate-400">
                           <User size={16} className="text-slate-300" />
                           <span className="text-xs font-bold">{cert.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                           <Calendar size={16} className="text-slate-300" />
                           <span className="text-xs font-bold">{cert.issued_at}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-black uppercase tracking-widest border border-green-100">
                      <CheckCircle2 size={16} /> Validated
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Kode Verifikasi</p>
                       <code className="text-xs font-black text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 tracking-tighter">{cert.verification_code}</code>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 uppercase tracking-widest">
                        <Download size={16} /> DOWNLOAD PDF
                      </button>
                      <button className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-blue-600 rounded-2xl transition-all shadow-sm" title="Bagikan">
                        <Share2 size={20} />
                      </button>
                      <Link to={`/verify/${cert.verification_code}`} className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-slate-900 rounded-2xl transition-all shadow-sm" title="Buka Link Verifikasi">
                        <ExternalLink size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
