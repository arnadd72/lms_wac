import { useState } from 'react';
import { 
  CheckSquare, Search, Filter, 
  Download, MessageSquare, Star,
  CheckCircle, Clock, AlertCircle,
  MoreVertical, ChevronRight, User
} from 'lucide-react';

const MOCK_SUBMISSIONS = [
  { id: 1, student: 'Rina Handayani', course: 'Excel Mastery', date: '10 Mei 2026', status: 'Pending', file: 'Tugas_Rina_WAC.xlsx' },
  { id: 2, student: 'Budi Santoso', course: 'Word Pro', date: '09 Mei 2026', status: 'Graded', score: 85, file: 'Laporan_Budi.docx' },
  { id: 3, student: 'Ahmad Fauzi', course: 'Excel Mastery', date: '08 Mei 2026', status: 'Graded', score: 92, file: 'Excel_Fauzi_Final.xlsx' },
];

export default function AssignmentGrading() {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGrade = (e) => {
    e.preventDefault();
    alert(`Nilai ${score} berhasil dikirim untuk ${selectedSubmission.student}`);
    setSelectedSubmission(null);
  };

  return (
    <div className="space-y-10 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Penilaian <span className="text-blue-600">Tugas Siswa</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Review hasil pengerjaan siswa dan berikan feedback konstruktif.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submission List */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                 <h3 className="font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <CheckSquare size={18} className="text-blue-600" /> Antrian Penilaian
                 </h3>
                 <div className="flex items-center gap-3">
                    <div className="relative">
                       <input type="text" placeholder="Cari siswa..." className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20" />
                       <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                 </div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-slate-50/50">
                          <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Siswa</th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kursus</th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                          <th className="px-6 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {MOCK_SUBMISSIONS.map((sub) => (
                         <tr key={sub.id} className={`hover:bg-slate-50/50 transition-colors cursor-pointer ${selectedSubmission?.id === sub.id ? 'bg-blue-50/50' : ''}`} onClick={() => setSelectedSubmission(sub)}>
                            <td className="px-6 py-5">
                               <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-xs">{sub.student.charAt(0)}</div>
                                  <div>
                                     <p className="text-sm font-bold text-slate-900">{sub.student}</p>
                                     <p className="text-[10px] text-slate-400 mt-0.5">{sub.date}</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-5">
                               <span className="text-xs font-semibold text-slate-600">{sub.course}</span>
                            </td>
                            <td className="px-6 py-5">
                               <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${sub.status === 'Graded' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                  {sub.status === 'Graded' ? `Nilai: ${sub.score}` : 'Belum Dinilai'}
                               </span>
                            </td>
                            <td className="px-6 py-5 text-right">
                               <ChevronRight size={18} className="text-slate-300 ml-auto" />
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Grading Panel (PRD 7.5.3) */}
        <div className="space-y-6">
           {selectedSubmission ? (
             <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/50 sticky top-28 animate-slide-up">
                <div className="text-center mb-8">
                   <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-xl shadow-blue-200">
                      {selectedSubmission.student.charAt(0)}
                   </div>
                   <h3 className="text-lg font-black text-slate-900 tracking-tight">{selectedSubmission.student}</h3>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{selectedSubmission.course}</p>
                </div>

                <div className="space-y-6">
                   <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">File Submission</label>
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                         <p className="text-xs font-bold text-slate-600 truncate mr-2">{selectedSubmission.file}</p>
                         <button className="p-2 bg-white text-blue-600 rounded-lg shadow-sm border border-blue-50">
                            <Download size={16} />
                         </button>
                      </div>
                   </div>

                   <form onSubmit={handleGrade} className="space-y-6">
                      <div>
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Berikan Nilai (0-100)</label>
                         <div className="relative">
                            <input 
                              type="number" 
                              max="100" min="0" 
                              required
                              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-lg font-black outline-none focus:ring-2 focus:ring-blue-500/20"
                              placeholder="0"
                              value={score}
                              onChange={(e) => setScore(e.target.value)}
                            />
                            <Star size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-400" />
                         </div>
                      </div>

                      <div>
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Feedback Teks (PRD 7.5.3)</label>
                         <textarea 
                           className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[120px]"
                           placeholder="Tuliskan alasan nilai ini atau saran perbaikan..."
                           value={feedback}
                           onChange={(e) => setFeedback(e.target.value)}
                         />
                      </div>

                      <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all transform hover:-translate-y-1">
                         SIMPAN PENILAIAN
                      </button>
                   </form>
                </div>
             </div>
           ) : (
             <div className="bg-slate-50 p-10 rounded-[40px] border-2 border-dashed border-slate-200 text-center space-y-4 py-20">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm text-slate-300">
                   <AlertCircle size={32} />
                </div>
                <div>
                   <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Belum Ada Seleksi</p>
                   <p className="text-xs text-slate-400 mt-2">Pilih salah satu siswa di daftar antrian untuk mulai memberikan nilai.</p>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
