import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(form.email, form.password);
      
      // Redirect based on role
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'instructor') navigate('/instructor');
      else navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Email atau password salah.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <BookOpen size={24} className="text-white" />
              </div>
              <span className="font-black text-gray-900 text-2xl tracking-tighter">WAC <span className="text-blue-600">LMS</span></span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">Selamat Datang!</h2>
            <p className="text-gray-500 text-sm mt-1">Masuk untuk melanjutkan perjalanan belajarmu.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-bold animate-in slide-in-from-top-2">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Email</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                  placeholder="email@kamu.com"
                />
              </div>

              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'} required
                    value={form.password}
                    onChange={e => setForm({...form, password: e.target.value})}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                    placeholder="••••••••"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 bg-gray-900 hover:bg-black text-white font-black rounded-2xl transition-all text-sm uppercase tracking-widest shadow-xl disabled:opacity-50">
              {loading ? 'MEMVERIFIKASI...' : 'MASUK KE PORTAL'}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8 font-medium">
            Belum punya akun?{' '}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">Daftar Sekarang</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
