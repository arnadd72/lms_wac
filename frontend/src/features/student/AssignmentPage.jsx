import { useState } from 'react';
import { 
  FileText, Clock, AlertCircle, Upload, 
  CheckCircle, Download, MessageSquare, 
  FileSpreadsheet, FileCode, Trash2 
} from 'lucide-react';

export default function AssignmentPage() {
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  // Mock Data based on PRD 7.5.1
  const assignment = {
    title: 'Analisis Data Penjualan Toko Retail',
    description: `Gunakan file template Excel yang disediakan untuk melakukan analisis data penjualan selama 3 bulan terakhir. Anda diminta untuk:
    1. Membuat Pivot Table berdasarkan kategori produk.
    2. Menghitung total margin keuntungan menggunakan rumus VLOOKUP.
    3. Membuat chart visualisasi tren bulanan.`,
    deadline: '15 Mei 2026, 23:59 WIB',
    status: 'Belum Dikerjakan', // Belum Dikerjakan / Menunggu Penilaian / Dinilai
    maxSize: '25 MB',
    allowedTypes: '.xlsx, .docx, .pdf',
    rubrics: [
      { criteria: 'Ketepatan Rumus', weight: '40%' },
      { criteria: 'Visualisasi Data', weight: '30%' },
      { criteria: 'Kerapihan Format', weight: '30%' },
    ],
    referenceFile: { name: 'Template_Analisis_WAC.xlsx', size: '1.2 MB' }
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) return alert('Silakan pilih file terlebih dahulu.');
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 animate-slide-up">
      {/* Header & Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">TUGAS AKHIR MODUL 3</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 leading-tight">{assignment.title}</h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status Tugas</p>
              <div className={`flex items-center gap-2 font-black text-sm mt-1 ${submitted ? 'text-green-500' : 'text-orange-500'}`}>
                {submitted ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                {submitted ? 'Terkirim (Menunggu Penilaian)' : assignment.status}
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Instructions & Rubrics */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> Deskripsi Detail
             </h3>
             <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
               {assignment.description}
             </p>
             
             {/* Reference File */}
             <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <FileSpreadsheet size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">{assignment.referenceFile.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{assignment.referenceFile.size}</p>
                   </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 font-bold text-xs rounded-xl border border-blue-100 hover:bg-blue-50 transition-all shadow-sm">
                   <Download size={14} /> Download Template
                </button>
             </div>
          </div>

          {/* Rubrics (PRD 7.5.1) */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" /> Rubrik Penilaian
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {assignment.rubrics.map((r, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{r.criteria}</p>
                     <p className="text-xl font-black text-slate-900">{r.weight}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right: Submission Form (PRD 7.5.2) */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-3 text-red-500 mb-6">
                 <Clock size={20} />
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Deadline Pengumpulan</p>
                    <p className="text-sm font-bold">{assignment.deadline}</p>
                 </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Upload Hasil Tugas</label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-3xl p-8 transition-all group">
                       <input 
                         type="file" 
                         multiple
                         onChange={handleFileUpload}
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                       />
                       <div className="text-center">
                          <div className="w-12 h-12 bg-slate-50 text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all">
                             <Upload size={24} />
                          </div>
                          <p className="text-sm font-bold text-slate-600">Klik atau seret file</p>
                          <p className="text-[10px] text-slate-400 mt-1 italic">Maks. {assignment.maxSize} per file</p>
                       </div>
                    </div>
                  </div>

                  {/* File List Preview */}
                  {files.length > 0 && (
                    <div className="space-y-2">
                       {files.map((file, i) => (
                         <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl">
                            <div className="flex items-center gap-3 min-w-0">
                               <FileCode size={18} className="text-blue-500 flex-shrink-0" />
                               <p className="text-xs font-bold text-slate-900 truncate">{file.name}</p>
                            </div>
                            <button onClick={() => removeFile(i)} className="text-slate-300 hover:text-red-500 transition-colors">
                               <Trash2 size={16} />
                            </button>
                         </div>
                       ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Komentar (Opsional)</label>
                    <textarea 
                      placeholder="Tambahkan pesan untuk instruktur..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[100px]"
                    />
                  </div>

                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                    KIRIM TUGAS SEKARANG
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-6">
                   <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle size={40} />
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-slate-900">Tugas Berhasil Terkirim!</h4>
                      <p className="text-sm text-slate-400 mt-2">Terima kasih. Instruktur akan segera menilai tugas Anda. Anda akan menerima notifikasi jika nilai sudah keluar.</p>
                   </div>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="px-6 py-3 text-blue-600 font-bold text-xs hover:underline transition-all"
                   >
                     Ingin revisi tugas? Klik di sini
                   </button>
                </div>
              )}
           </div>
           
           {/* Feedback Section (PRD 7.5.3) - Hidden if not graded */}
           {submitted && (
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                 <MessageSquare className="text-blue-600 mt-1" size={20} />
                 <div>
                    <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest">Pesan Instruktur</h4>
                    <p className="text-xs text-blue-700 mt-2 leading-relaxed italic">
                       "Sedang dalam proses penilaian. Pastikan file Excel Anda tidak diproteksi password agar kami bisa melihat rumusnya."
                    </p>
                 </div>
              </div>
           )}
        </div>
      </div>
    </div>
  );
}
