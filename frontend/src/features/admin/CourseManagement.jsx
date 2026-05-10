import { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Filter, Plus, 
  MoreVertical, Edit2, Trash2, 
  Eye, CheckCircle, Clock, Star, 
  Layers, Users, ArrowUpRight, X, AlertCircle, RefreshCw
} from 'lucide-react';
import { adminApi } from '../../utils/api';

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({ total_courses: 0, active_courses: 0, total_enrollments: 0 });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [pagination, setPagination] = useState({ current_page: 1, last_page: 1, total: 0 });

  // Modal states
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [reviewData, setReviewData] = useState({ status: 'published', feedback: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchData();
  }, [pagination.current_page, statusFilter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [coursesRes, statsRes] = await Promise.all([
        adminApi.getCourses({
          page: pagination.current_page,
          search: searchTerm,
          status: statusFilter
        }),
        adminApi.getStats()
      ]);
      
      setCourses(coursesRes.data.data);
      setPagination({
        current_page: coursesRes.data.current_page,
        last_page: coursesRes.data.last_page,
        total: coursesRes.data.total
      });
      setStats(statsRes.data.metrics);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setPagination({ ...pagination, current_page: 1 });
      fetchData();
    }
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await adminApi.updateCourseStatus(selectedCourse.id, reviewData.status, reviewData.feedback);
      setMessage({ type: 'success', text: `Status kursus berhasil diubah menjadi ${reviewData.status}` });
      setIsReviewModalOpen(false);
      fetchData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal memperbarui status kursus' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="space-y-10 animate-slide-up pb-20">
      {/* Toast Message */}
      {message && (
        <div className={`fixed top-24 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300 ${message.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <p className="font-bold text-sm">{message.text}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Manajemen <span className="text-blue-600">Kursus</span></h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Pantau, verifikasi, dan kelola seluruh materi pembelajaran di WAC.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-sm">
          <Plus size={18} /> Buat Kursus
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-900/20 flex items-center justify-between group overflow-hidden relative">
            <div className="relative z-10">
               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Total Kursus</p>
               <h3 className="text-4xl font-black italic tracking-tighter">{stats.total_courses}</h3>
            </div>
            <BookOpen size={40} className="text-white/10 group-hover:scale-125 group-hover:text-blue-500/20 transition-all absolute -right-2 -bottom-2" />
         </div>
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Kursus Aktif</p>
               <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">{stats.active_courses}</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
               <CheckCircle size={24} />
            </div>
         </div>
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Enrollment</p>
               <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">{stats.total_enrollments}</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
               <Users size={24} />
            </div>
         </div>
      </div>

      {/* Filter & List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="relative flex-1 w-full">
              <input 
                type="text" 
                placeholder="Cari judul kursus (Tekan Enter)..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <div className="flex items-center gap-3 w-full md:w-auto">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 md:flex-none px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-xs focus:outline-none"
              >
                <option value="">Semua Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending Review</option>
                <option value="rejected">Rejected</option>
              </select>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Detail Kursus</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Metrik</th>
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="4" className="px-6 py-10 bg-slate-50/30"></td>
                  </tr>
                ))
              ) : courses.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-20 text-center text-slate-400 font-medium">Kursus tidak ditemukan</td>
                </tr>
              ) : courses.map(course => (
                <tr key={course.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5 min-w-[300px]">
                    <div className="flex items-start gap-4">
                       <div className="w-16 h-10 bg-slate-100 rounded-xl flex-shrink-0 border border-slate-200 overflow-hidden flex items-center justify-center font-black text-[10px] text-slate-400">
                          {course.thumbnail ? <img src={course.thumbnail} className="w-full h-full object-cover" /> : 'IMG'}
                       </div>
                       <div>
                          <p className="text-sm font-black text-slate-900 line-clamp-1 uppercase">{course.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{course.category?.name || 'Uncategorized'}</span>
                             <span className="w-1 h-1 bg-slate-200 rounded-full" />
                             <span className="text-[10px] font-bold text-slate-400">Oleh {course.instructor?.name}</span>
                          </div>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-4">
                       <div className="flex flex-col items-center">
                          <span className="text-sm font-black text-slate-900">{course.enrollments_count || 0}</span>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Siswa</span>
                       </div>
                       <div className="w-px h-6 bg-slate-100" />
                       <div className="flex flex-col items-center">
                          <span className="text-sm font-black text-slate-900 flex items-center gap-0.5">
                            {course.rating || 0} <Star size={10} className="text-orange-400 fill-orange-400" />
                          </span>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Rating</span>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      course.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 
                      course.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                       <button 
                         onClick={() => { setSelectedCourse(course); setReviewData({ status: course.status, feedback: '' }); setIsReviewModalOpen(true); }}
                         className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Review & Status"
                       >
                         <CheckCircle size={18} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" title="View"><Eye size={18} /></button>
                       <button className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400 italic">Total: {pagination.total} Kursus</p>
           <div className="flex gap-2">
              <button 
                disabled={pagination.current_page === 1}
                onClick={() => setPagination({ ...pagination, current_page: pagination.current_page - 1 })}
                className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-400 rounded-xl hover:bg-slate-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button 
                disabled={pagination.current_page === pagination.last_page}
                onClick={() => setPagination({ ...pagination, current_page: pagination.current_page + 1 })}
                className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 rounded-xl hover:bg-slate-50 disabled:opacity-50"
              >
                Next
              </button>
           </div>
        </div>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">Review Kursus</h3>
              <button onClick={() => setIsReviewModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-all"><X size={20} /></button>
            </div>
            <form onSubmit={handleUpdateStatus} className="p-6 space-y-5">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Kursus</p>
                 <p className="text-sm font-bold text-slate-900 uppercase italic">{selectedCourse?.title}</p>
                 <p className="text-[10px] text-slate-500 font-medium mt-1">Instruktur: {selectedCourse?.instructor?.name}</p>
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Keputusan Status</label>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                     type="button"
                     onClick={() => setReviewData({ ...reviewData, status: 'published' })}
                     className={`py-3 rounded-2xl text-xs font-black transition-all border-2 ${reviewData.status === 'published' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 text-slate-400'}`}
                   >
                     APPROVE
                   </button>
                   <button 
                     type="button"
                     onClick={() => setReviewData({ ...reviewData, status: 'rejected' })}
                     className={`py-3 rounded-2xl text-xs font-black transition-all border-2 ${reviewData.status === 'rejected' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-slate-100 text-slate-400'}`}
                   >
                     REJECT
                   </button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Umpan Balik (Feedback)</label>
                <textarea 
                  placeholder="Berikan alasan jika direject atau catatan untuk instruktur..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none font-medium h-32 resize-none"
                  value={reviewData.feedback}
                  onChange={(e) => setReviewData({ ...reviewData, feedback: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? <RefreshCw size={18} className="animate-spin" /> : 'Simpan Keputusan'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
