import { useState } from 'react';
import { 
  Users, Search, Filter, Plus, 
  MoreVertical, Edit2, Trash2, Shield, 
  Mail, Phone, Calendar, UserCheck 
} from 'lucide-react';

const MOCK_USERS = [
  { id: 1, name: 'Rina Handayani', email: 'student@wac.com', role: 'Siswa', status: 'Aktif', joined: '10 Mei 2026', avatar: 'RH' },
  { id: 2, name: 'Instruktur Sari', email: 'instructor@wac.com', role: 'Instruktur', status: 'Aktif', joined: '08 Mei 2026', avatar: 'IS' },
  { id: 3, name: 'Admin WAC', email: 'admin@wac.com', role: 'Admin', status: 'Aktif', joined: '01 Mei 2026', avatar: 'AW' },
  { id: 4, name: 'Budi Santoso', email: 'budi@example.com', role: 'Siswa', status: 'Nonaktif', joined: '12 Mei 2026', avatar: 'BS' },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-10 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">Manajemen <span className="text-blue-600">Pengguna</span></h1>
          <p className="text-slate-400 mt-1 font-medium">Kelola hak akses, status, dan informasi seluruh pengguna platform.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
          <Plus size={18} /> Tambah User Baru
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Cari nama, email, atau role..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl text-sm hover:bg-slate-50 transition-all">
            <Filter size={18} /> Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl text-sm hover:bg-slate-50 transition-all">
            Export CSV
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Pengguna</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Role & Izin</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Tgl Bergabung</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_USERS.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xs shadow-lg shadow-slate-900/10 uppercase">{user.avatar}</div>
                      <div>
                        <p className="text-sm font-black text-slate-900">{user.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Mail size={12} className="text-slate-400" />
                          <p className="text-[10px] font-bold text-slate-400">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                       <Shield size={14} className={user.role === 'Admin' ? 'text-red-500' : 'text-blue-500'} />
                       <span className={`text-xs font-bold ${user.role === 'Admin' ? 'text-red-600' : 'text-slate-600'}`}>{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={14} />
                      <span className="text-xs font-medium">{user.joined}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${user.status === 'Aktif' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit User">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Hapus User">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 text-slate-300 hover:text-slate-900 rounded-lg transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400 italic">Menampilkan 4 dari 1,284 total pengguna</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-400 rounded-xl cursor-not-allowed">Previous</button>
              <button className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 rounded-xl hover:bg-slate-50 shadow-sm">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
