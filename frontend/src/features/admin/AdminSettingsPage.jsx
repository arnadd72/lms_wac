import { useState, useEffect } from 'react';
import { 
  Globe, Shield, Bell, Mail, 
  Palette, Database, Save, RefreshCw,
  CheckCircle, AlertCircle
} from 'lucide-react';
import { adminApi } from '../../utils/api';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // Form states based on settings keys
  const [formValues, setFormValues] = useState({
    site_name: 'WAC Learning Platform',
    site_tagline: 'Master Your Office. Elevate Your Career.',
    contact_email: 'support@wac.com',
    smtp_host: '',
    smtp_port: '',
    smtp_user: '',
    smtp_pass: '',
    smtp_encryption: 'tls'
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await adminApi.getSettings();
      const mapped = {};
      res.data.forEach(s => {
        mapped[s.key] = s.value;
      });
      setFormValues(prev => ({ ...prev, ...mapped }));
      setSettings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = Object.keys(formValues).map(key => ({
        key,
        value: formValues[key],
        group: key.startsWith('smtp_') ? 'email' : 'general'
      }));
      await adminApi.updateSettings(payload);
      setMessage({ type: 'success', text: 'Pengaturan sistem berhasil disimpan' });
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal menyimpan pengaturan' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const tabs = [
    { id: 'general', label: 'Umum', icon: <Globe size={18} /> },
    { id: 'email', label: 'Email SMTP', icon: <Mail size={18} /> },
    { id: 'maintenance', label: 'Maintenance', icon: <Database size={18} /> },
    { id: 'security', label: 'Keamanan', icon: <Shield size={18} /> },
    { id: 'notifications', label: 'Notifikasi', icon: <Bell size={18} /> },
  ];

  const handleClearCache = async () => {
    setIsSubmitting(true);
    try {
      await adminApi.clearCache();
      setMessage({ type: 'success', text: 'Cache sistem berhasil dibersihkan' });
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal membersihkan cache' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  if (loading) return (
    <div className="min-h-[400px] flex items-center justify-center">
      <RefreshCw size={32} className="text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6 animate-slide-up pb-20">
      {/* Toast Message */}
      {message && (
        <div className={`fixed top-24 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300 ${message.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <p className="font-bold text-sm">{message.text}</p>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-black text-slate-900">Pengaturan <span className="text-blue-600">Sistem</span></h1>
        <p className="text-slate-500 mt-1 text-sm font-medium">Konfigurasi global untuk seluruh platform WAC.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-white hover:text-blue-600'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div>
            <div className="p-8">
              {activeTab === 'general' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">Nama Platform</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.site_name}
                        onChange={(e) => setFormValues({ ...formValues, site_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">Tagline</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.site_tagline}
                        onChange={(e) => setFormValues({ ...formValues, site_tagline: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">Email Kontak (Support)</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                      value={formValues.contact_email}
                      onChange={(e) => setFormValues({ ...formValues, contact_email: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'email' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">SMTP Host</label>
                      <input 
                        type="text" 
                        placeholder="smtp.mailtrap.io"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.smtp_host}
                        onChange={(e) => setFormValues({ ...formValues, smtp_host: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">SMTP Port</label>
                      <input 
                        type="text" 
                        placeholder="587"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.smtp_port}
                        onChange={(e) => setFormValues({ ...formValues, smtp_port: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">SMTP Username</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.smtp_user}
                        onChange={(e) => setFormValues({ ...formValues, smtp_user: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1 block">SMTP Password</label>
                      <input 
                        type="password" 
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" 
                        value={formValues.smtp_pass}
                        onChange={(e) => setFormValues({ ...formValues, smtp_pass: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'maintenance' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                     <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase">System Cache</h4>
                        <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-widest">Bersihkan cache aplikasi, view, dan konfigurasi.</p>
                     </div>
                     <button 
                       onClick={handleClearCache}
                       disabled={isSubmitting}
                       className="px-6 py-2.5 bg-slate-900 text-white font-black rounded-xl text-[10px] hover:bg-slate-800 transition-all uppercase tracking-widest disabled:opacity-50"
                     >
                       {isSubmitting ? 'Processing...' : 'Clear Cache'}
                     </button>
                  </div>
                </div>
              )}

              {activeTab !== 'general' && activeTab !== 'email' && activeTab !== 'maintenance' && (
                <div className="py-20 text-center">
                  <Shield size={48} className="text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium italic text-sm">Modul "{activeTab}" akan tersedia pada pembaruan mendatang.</p>
                </div>
              )}
            </div>

            {(activeTab === 'general' || activeTab === 'email') && (
              <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-black rounded-2xl text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <RefreshCw size={18} className="animate-spin" />
                  ) : (
                    <Save size={18} />
                  )}
                  Simpan Konfigurasi
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
