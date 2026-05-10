import { useState } from 'react';
import { 
  Globe, Shield, Bell, Mail, 
  Palette, Database, Save, RefreshCw 
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Umum', icon: <Globe size={18} /> },
    { id: 'security', label: 'Keamanan', icon: <Shield size={18} /> },
    { id: 'notifications', label: 'Notifikasi', icon: <Bell size={18} /> },
    { id: 'email', label: 'Email SMTP', icon: <Mail size={18} /> },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Pengaturan Sistem</h1>
        <p className="text-gray-500 mt-1">Konfigurasi global untuk seluruh platform WAC.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-500 hover:bg-white'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          {activeTab === 'general' && (
            <div className="space-y-8 animate-in fade-in duration-300">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Nama Platform</label>
                    <input type="text" defaultValue="WAC Learning Management System" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Tagline</label>
                    <input type="text" defaultValue="Kuasai Office, Percepat Karir" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
               </div>

               <div>
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Logo Platform</label>
                  <div className="flex items-center gap-6 p-6 border-2 border-dashed border-gray-100 rounded-3xl">
                     <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">W</div>
                     <div>
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-xl hover:bg-gray-200 transition-all">Ganti Logo</button>
                        <p className="text-[10px] text-gray-400 mt-2">Maksimal 2MB. Format PNG, SVG, atau JPG.</p>
                     </div>
                  </div>
               </div>

               <div className="pt-6 border-t border-gray-50 flex justify-end gap-3">
                  <button className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-2xl text-sm hover:bg-gray-200 transition-all">Batalkan</button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    <Save size={18} /> Simpan Perubahan
                  </button>
               </div>
            </div>
          )}
          {activeTab !== 'general' && (
            <div className="py-20 text-center">
               <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw size={24} className="text-gray-300 animate-spin-slow" />
               </div>
               <p className="text-gray-400 font-medium italic">Halaman "{activeTab}" sedang dalam pengembangan...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
