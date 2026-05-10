import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Award, User, BookOpen, Calendar, Hash } from 'lucide-react';

// Simulasi data valid
const VALID_CERTS = {
  'WAC-2024-EXC-A7F3B2': {
    valid: true,
    student_name: 'Rina Handayani',
    course_title: 'Excel dari Nol: Pemula Sampai Mahir',
    instructor_name: 'Sari Kusuma',
    issued_at: '15 Januari 2024',
    verification_code: 'WAC-2024-EXC-A7F3B2',
  },
};

export default function CertificateVerifyPage() {
  const { code } = useParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi API call
    setTimeout(() => {
      const cert = VALID_CERTS[code];
      setResult(cert || { valid: false, message: 'Sertifikat tidak ditemukan atau tidak valid.' });
      setLoading(false);
    }, 1000);
  }, [code]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <BookOpen size={22} className="text-white" />
        </div>
        <span className="font-bold text-white text-xl">WAC <span className="text-blue-400">LMS</span></span>
      </Link>

      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        {loading ? (
          <div className="p-16 text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Memverifikasi sertifikat...</p>
          </div>
        ) : result?.valid ? (
          <>
            {/* Certificate Preview */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-10 text-white text-center">
              <Award size={56} className="mx-auto mb-4 opacity-90" />
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">Sertifikat Resmi</p>
              <h1 className="text-3xl font-black mb-1">Dinyatakan Lulus</h1>
              <p className="text-green-100">Ini adalah sertifikat yang sah dan terverifikasi.</p>
            </div>

            {/* Details */}
            <div className="p-8 space-y-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold">
                <CheckCircle2 size={18} /> VALID — Sertifikat ini asli dan tidak dimanipulasi
              </div>

              {[
                { icon: User, label: 'Nama Pemegang', value: result.student_name },
                { icon: BookOpen, label: 'Kursus', value: result.course_title },
                { icon: User, label: 'Instruktur', value: result.instructor_name },
                { icon: Calendar, label: 'Tanggal Terbit', value: result.issued_at },
                { icon: Hash, label: 'Kode Verifikasi', value: result.verification_code, mono: true },
              ].map(({ icon: Icon, label, value, mono }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className={`font-semibold text-gray-900 mt-0.5 ${mono ? 'font-mono text-sm' : ''}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <XCircle size={40} className="text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Sertifikat Tidak Valid</h2>
            <p className="text-gray-500 mb-6">{result?.message}</p>
            <Link to="/" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Kembali ke Beranda
            </Link>
          </div>
        )}
      </div>
      <p className="text-white/40 text-xs mt-6">© {new Date().getFullYear()} World Access Computer — Halaman ini dapat diakses siapa saja tanpa login.</p>
    </div>
  );
}
