import { useState, useEffect } from 'react';
import { 
  Clock, AlertCircle, ChevronRight, 
  ChevronLeft, CheckCircle, HelpCircle,
  Timer, Award
} from 'lucide-react';

export default function QuizPlayerPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 menit dalam detik
  const [isFinished, setIsFinished] = useState(false);

  // Mock Questions based on PRD 7.4
  const questions = [
    {
      id: 1,
      text: "Manakah shortcut keyboard yang digunakan untuk mengunci sel (absolute reference) di Microsoft Excel?",
      options: ["F2", "F4", "F8", "F12"],
      correct: 1
    },
    {
      id: 2,
      text: "Fungsi manakah yang digunakan untuk mencari data secara vertikal dalam sebuah tabel?",
      options: ["HLOOKUP", "LOOKUP", "VLOOKUP", "INDEX"],
      correct: 2
    },
    {
      id: 3,
      text: "Simbol manakah yang mengawali setiap penulisan rumus/formula di Excel?",
      options: ["@", "+", "=", "#"],
      correct: 2
    }
  ];

  // Timer Logic
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.correct) score++;
    });
    return Math.round((score / questions.length) * 100);
  };

  if (isFinished) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto py-20 text-center animate-slide-up">
         <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-200">
            <Award size={48} />
         </div>
         <h1 className="text-4xl font-black text-slate-900 tracking-tight italic">Kuis Selesai!</h1>
         <p className="text-slate-400 mt-2 font-medium">Hasil pengerjaan kuis Anda telah direkam oleh sistem.</p>
         
         <div className="mt-10 p-10 bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Nilai Akhir Anda</p>
            <h2 className={`text-7xl font-black italic tracking-tighter ${score >= 70 ? 'text-green-500' : 'text-red-500'}`}>{score}</h2>
            <div className="mt-8 flex items-center justify-center gap-4">
               <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Minimal Lulus</p>
                  <p className="font-bold text-slate-900">70 Poin</p>
               </div>
               <div className="w-[1px] h-8 bg-slate-100" />
               <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                  <p className={`font-bold ${score >= 70 ? 'text-green-600' : 'text-red-600'}`}>{score >= 70 ? 'LULUS' : 'TIDAK LULUS'}</p>
               </div>
            </div>
         </div>

         <div className="mt-10 flex gap-4 justify-center">
            <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">Lihat Pembahasan</button>
            <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">Lanjut ke Modul Berikutnya</button>
         </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-slide-up pb-20">
      {/* Quiz Header */}
      <div className="flex items-center justify-between bg-slate-900 p-6 rounded-[32px] text-white shadow-2xl shadow-slate-900/20">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black italic">Q</div>
            <div>
               <h2 className="font-black tracking-tight leading-tight">Quiz: Modul Dasar Excel</h2>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
            </div>
         </div>
         <div className="flex items-center gap-3 px-5 py-2 bg-slate-800 rounded-2xl border border-slate-700">
            <Timer size={18} className={timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-blue-400'} />
            <span className={`text-sm font-black italic ${timeLeft < 60 ? 'text-red-500' : 'text-white'}`}>{formatTime(timeLeft)}</span>
         </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
         <div 
           className="h-full bg-blue-600 transition-all duration-500 ease-out" 
           style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
         />
      </div>

      {/* Question Card */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm min-h-[400px] flex flex-col">
         <h3 className="text-xl font-bold text-slate-900 leading-relaxed mb-10">
            {questions[currentQuestion].text}
         </h3>

         <div className="space-y-3 flex-1">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all font-bold text-sm ${
                  selectedOptions[currentQuestion] === idx 
                  ? 'border-blue-600 bg-blue-50 text-blue-900' 
                  : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${selectedOptions[currentQuestion] === idx ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                      {String.fromCharCode(65 + idx)}
                   </div>
                   {option}
                </div>
                {selectedOptions[currentQuestion] === idx && <CheckCircle size={20} className="text-blue-600" />}
              </button>
            ))}
         </div>

         {/* Navigation */}
         <div className="mt-10 flex items-center justify-between pt-8 border-t border-slate-50">
            <button 
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(prev => prev - 1)}
              className="flex items-center gap-2 px-6 py-3 font-bold text-slate-400 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
               <ChevronLeft size={20} /> Sebelumnya
            </button>
            
            {currentQuestion === questions.length - 1 ? (
              <button 
                onClick={() => setIsFinished(true)}
                className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
              >
                Selesai & Kirim
              </button>
            ) : (
              <button 
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                className="flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Pertanyaan Berikutnya <ChevronRight size={20} />
              </button>
            )}
         </div>
      </div>

      <div className="flex items-center gap-3 p-6 bg-slate-100 rounded-3xl text-slate-500">
         <HelpCircle size={20} />
         <p className="text-xs font-medium">Pilih satu jawaban yang paling tepat. Jawaban Anda akan otomatis tersimpan saat Anda berpindah ke pertanyaan berikutnya.</p>
      </div>
    </div>
  );
}
