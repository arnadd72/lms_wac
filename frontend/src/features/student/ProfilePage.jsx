import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Shield, Bell, Lock, Globe, Save, Trash2 } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);

  const tabs = [
    { id: 'personal', label: 'Info Pribadi', icon: <User size={18} /> },
    { id: 'account', label: 'Keamanan', icon: <Shield size={18} /> },
    { id: 'notifications', label: 'Notifikasi', icon: <Bell size={18} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900">Pengaturan Profil</h1>
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-100">
          <Save size={16} /> Simpan Perubahan
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-500 hover:bg-white hover:text-gray-900'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
              <Trash2 size={18} /> Hapus Akun
            </button>
          </div>
        </aside>

        {/* Form Content */}
        <div className="flex-1 space-y-6">
          {activeTab === 'personal' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Photo Upload */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-xl">
                    R
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-gray-100 rounded-xl shadow-lg text-blue-600 hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Foto Profil</h3>
                  <p className="text-xs text-gray-500 mt-1">PNG atau JPG, minimal 400x400px.</p>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs font-bold text-blue-600 hover:underline">Upload Baru</button>
                    <span className="text-gray-300">|</span>
                    <button className="text-xs font-bold text-red-500 hover:underline">Hapus</button>
                  </div>
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Nama Lengkap</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" defaultValue="Rina Handayani" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" defaultValue="rina@mail.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Nomor HP</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" defaultValue="081234567890" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Tanggal Lahir</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Bio Singkat</label>
                  <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Tulis bio singkatmu di sini..."></textarea>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Lock size={18} className="text-blue-600" /> Ganti Password
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Password Sekarang</label>
                  <input type="password" title="Password Sekarang" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Password Baru</label>
                  <input type="password" title="Password Baru" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Konfirmasi Password Baru</label>
                  <input type="password" title="Konfirmasi Password Baru" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Bell size={18} className="text-blue-600" /> Preferensi Notifikasi
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Notifikasi Email', desc: 'Terima berita dan update melalui email.', default: true },
                  { label: 'Pengingat Belajar', desc: 'Dapatkan pengingat untuk melanjutkan kursus.', default: true },
                  { label: 'Notifikasi Komunitas', desc: 'Beri tahu jika ada pesan baru di forum.', default: false },
                  { label: 'Update Sertifikat', desc: 'Beri tahu jika sertifikat sudah siap.', default: true },
                ].map((pref, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-bold text-gray-800">{pref.label}</p>
                      <p className="text-xs text-gray-500">{pref.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={pref.default} className="sr-only peer" title={pref.label} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
