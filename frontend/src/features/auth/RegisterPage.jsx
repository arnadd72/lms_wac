import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Eye, EyeOff, Check, X } from 'lucide-react';

function PasswordStrength({ password }) {
  const checks = [
    { label: 'Minimal 8 karakter', pass: password.length >= 8 },
    { label: 'Mengandung huruf besar', pass: /[A-Z]/.test(password) },
    { label: 'Mengandung angka', pass: /[0-9]/.test(password) },
  ];
  return (
    <div className="mt-2 space-y-1">
      {checks.map(c => (
        <div key={c.label} className={`flex items-center gap-2 text-xs transition-colors ${c.pass ? 'text-green-600' : 'text-gray-400'}`}>
          {c.pass ? <Check size={12} /> : <X size={12} />}
          {c.label}
        </div>
      ))}
    </div>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm_password: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({});
    if (form.password !== form.confirm_password) {
      setErrors({ confirm_password: 'Password tidak cocok.' });
      return;
    }
    setLoading(true);
    // TODO: connect to API - for now simulate success
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen size={22} className="text-white" />
              </div>
              <span className="font-bold text-gray-900 text-xl">WAC <span className="text-blue-600">LMS</span></span>
            </Link>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-1">Buat Akun Gratis</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Mulai perjalanan belajarmu hari ini</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Nama Lengkap</label>
              <input
                type="text" name="name" required autoComplete="name"
                value={form.name} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                placeholder="Nama Lengkap Anda"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Alamat Email</label>
              <input
                type="email" name="email" required autoComplete="email"
                value={form.email} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                placeholder="email@kamu.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'} name="password" required
                  value={form.password} onChange={handleChange}
                  className="w-full px-4 py-3 pr-11 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  placeholder="Min. 8 karakter"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {form.password && <PasswordStrength password={form.password} />}
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Konfirmasi Password</label>
              <input
                type="password" name="confirm_password" required
                value={form.confirm_password} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${errors.confirm_password ? 'border-red-400' : 'border-gray-200'}`}
                placeholder="Ulangi password"
              />
              {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>}
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold rounded-xl transition-all text-base shadow-lg shadow-blue-200 hover:-translate-y-0.5 disabled:translate-y-0">
              {loading ? 'Membuat akun...' : 'Daftar Sekarang'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">Masuk di sini</Link>
          </p>
        </div>

        <p className="text-center text-xs text-white/50 mt-4">
          Dengan mendaftar, kamu setuju dengan <a href="#" className="underline">Syarat & Ketentuan</a> WAC.
        </p>
      </div>
    </div>
  );
}
