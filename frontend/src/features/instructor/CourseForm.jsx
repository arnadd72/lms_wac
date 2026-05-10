import { useState, useRef } from 'react';
import { 
  Bold, Italic, List, Link as LinkIcon, Image as ImageIcon, 
  AlignLeft, Type, ChevronRight, ChevronLeft, Upload, 
  Plus, Trash2, CheckCircle2, Globe, Lock, Award
} from 'lucide-react';

/* ── Simple Rich Text Editor ── */
function RichTextEditor({ value, onChange, placeholder }) {
  const editorRef = useRef(null);
  const execCmd = (cmd, val = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
  };
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all shadow-sm bg-white">
      <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
        {[
          { icon: <Bold size={15} />, cmd: 'bold', title: 'Tebal' },
          { icon: <Italic size={15} />, cmd: 'italic', title: 'Miring' },
          { icon: <Type size={15} />, cmd: 'underline', title: 'Garis Bawah' },
          { icon: <List size={15} />, cmd: 'insertUnorderedList', title: 'Daftar' },
          { icon: <AlignLeft size={15} />, cmd: 'insertOrderedList', title: 'Daftar Bernomor' },
        ].map(btn => (
          <button key={btn.cmd} type="button" title={btn.title}
            onMouseDown={e => { e.preventDefault(); execCmd(btn.cmd); }}
            className="p-2 rounded text-gray-600 hover:bg-gray-200 transition-colors">
            {btn.icon}
          </button>
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={e => onChange && onChange(e.currentTarget.innerHTML)}
        className="min-h-[150px] p-4 text-sm text-gray-800 focus:outline-none leading-relaxed"
        data-placeholder={placeholder}
      />
      <style>{`[contenteditable]:empty:before { content: attr(data-placeholder); color: #9ca3af; pointer-events: none; }`}</style>
    </div>
  );
}

export default function CourseForm() {
  const [step, setStep] = useState(1);
  const [outcomes, setOutcomes] = useState(['']);
  const [prereqs, setPrereqs] = useState(['']);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const addField = (setFn) => setFn(prev => [...prev, '']);
  const removeField = (setFn, index) => setFn(prev => prev.filter((_, i) => i !== index));
  const updateField = (setFn, index, val) => setFn(prev => prev.map((v, i) => i === index ? val : v));

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Header & Steps */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Buat Kursus Baru</h1>
            <p className="text-sm text-gray-500 mt-1">Bagikan keahlianmu dan bantu siswa berkembang.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">Simpan Draft</button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between max-w-2xl mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
          <div className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 -z-10 transition-all duration-500" style={{ width: `${((step - 1) / 3) * 100}%` }} />
          
          {[1, 2, 3, 4].map(s => (
            <div key={s} className="flex flex-col items-center gap-2 bg-white px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-400'}`}>
                {step > s ? <CheckCircle2 size={20} /> : s}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
                {['Dasar', 'Media', 'Detail', 'Akses'][s - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 min-h-[500px]">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Judul Kursus</label>
                <input type="text" maxLength={80} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" placeholder="Contoh: Mahir Microsoft Excel dari Nol sampai Pro" />
                <p className="text-[10px] text-gray-400 text-right font-medium">Maksimal 80 karakter</p>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Kategori Utama</label>
                <select className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Microsoft Excel</option>
                  <option>Microsoft Word</option>
                  <option>PowerPoint</option>
                  <option>Office 365</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Level Kesulitan</label>
                <select className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Pemula (Beginner)</option>
                  <option>Menengah (Intermediate)</option>
                  <option>Mahir (Advanced)</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Deskripsi Singkat</label>
                <textarea maxLength={200} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm h-24 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Penjelasan singkat yang akan tampil di kartu kursus..."></textarea>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Deskripsi Lengkap</label>
                <RichTextEditor placeholder="Tulis silabus lengkap, metode belajar, dan manfaat kursus..." />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Thumbnail Kursus</label>
                <div className="aspect-video w-full rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center group hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gray-300 group-hover:text-blue-500 group-hover:scale-110 transition-all mb-4">
                    <Upload size={30} />
                  </div>
                  <p className="font-bold text-gray-700 text-sm">Klik untuk upload thumbnail</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">Rekomendasi: 1280x720px (16:9)</p>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Video Trailer (Opsional)</label>
                <div className="aspect-video w-full rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center group hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gray-300 group-hover:text-blue-500 group-hover:scale-110 transition-all mb-4">
                    <ImageIcon size={30} />
                  </div>
                  <p className="font-bold text-gray-700 text-sm">Upload video preview</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">MP4, Maksimal 50MB</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Apa yang akan dipelajari?</label>
                  <button onClick={() => addField(setOutcomes)} className="text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline">+ Tambah Poin</button>
                </div>
                <div className="space-y-3">
                  {outcomes.map((v, i) => (
                    <div key={i} className="flex gap-2">
                      <input value={v} onChange={e => updateField(setOutcomes, i, e.target.value)} className="flex-1 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Misal: Mahir menggunakan Pivot Table untuk audit data" />
                      <button onClick={() => removeField(setOutcomes, i)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Prasyarat Kursus</label>
                  <button onClick={() => addField(setPrereqs)} className="text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline">+ Tambah Poin</button>
                </div>
                <div className="space-y-3">
                  {prereqs.map((v, i) => (
                    <div key={i} className="flex gap-2">
                      <input value={v} onChange={e => updateField(setPrereqs, i, e.target.value)} className="flex-1 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Misal: Mengerti dasar penggunaan komputer Windows" />
                      <button onClick={() => removeField(setPrereqs, i)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Visibilitas</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="p-4 rounded-2xl border-2 border-blue-600 bg-blue-50/50 flex items-center gap-4 cursor-pointer">
                    <input type="radio" name="vis" defaultChecked className="hidden" />
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white"><Globe size={20} /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Publik</p>
                      <p className="text-[10px] text-gray-500">Dapat ditemukan semua orang di katalog.</p>
                    </div>
                  </label>
                  <label className="p-4 rounded-2xl border-2 border-gray-100 hover:border-gray-300 flex items-center gap-4 cursor-pointer transition-all">
                    <input type="radio" name="vis" className="hidden" />
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400"><Lock size={20} /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Privat (Hanya Link)</p>
                      <p className="text-[10px] text-gray-500">Hanya yang memiliki link yang dapat enroll.</p>
                    </div>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Sertifikat</label>
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-600"><Award size={20} /></div>
                      <span className="text-sm font-bold text-gray-800">Dapatkan Sertifikat</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress Minimal (%)</label>
                    <input type="number" defaultValue="100" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-12 border-t border-gray-100 mt-12">
          {step > 1 ? (
            <button onClick={prevStep} className="flex items-center gap-2 px-6 py-3 font-bold text-gray-500 hover:text-gray-900 transition-all">
              <ChevronLeft size={20} /> Kembali
            </button>
          ) : <div />}
          
          {step < 4 ? (
            <button onClick={nextStep} className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-lg">
              Lanjut <ChevronRight size={20} />
            </button>
          ) : (
            <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Selesai & Buat Silabus <CheckCircle2 size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
