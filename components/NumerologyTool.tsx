
import React, { useState, useEffect } from 'react';
import { getNumerologyReading } from '../services/geminiService';
import { ReadingResult } from '../types';

const loadingMessages = [
  "宇宙の周波数にアクセス中...",
  "数字の配列を解析しています...",
  "あなたの波形を言葉へ...",
  "魂の地図を広げています...",
  "メッセージを紡いでいます..."
];

const NumerologyTool: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [result, setResult] = useState<ReadingResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setMsgIndex(prev => (prev + 1) % loadingMessages.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !birthDate) {
      setError('お名前と生年月日をご入力ください。');
      return;
    }
    
    setError('');
    setLoading(true);
    try {
      const reading = await getNumerologyReading({ name, birthDate });
      setResult(reading);
      setTimeout(() => {
        document.getElementById('result-area')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } catch (err) {
      setError('大変混み合っております。少し時間をおいて再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 gradient-overlay relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <span className="text-rose-500 font-medium tracking-wider text-[10px] md:text-xs mb-3 md:mb-4 block">無料鑑定</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6 text-gray-800">運命の鑑定室</h2>
          <div className="accent-line"></div>
        </div>

        <div className="glass-effect p-6 md:p-10 lg:p-16 rounded-2xl md:rounded-3xl relative overflow-hidden bg-white/95">
          {!loading ? (
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="group relative">
                  <label className="block text-xs font-medium text-gray-500 mb-2 group-focus-within:text-rose-600 transition-colors">鑑定名</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例：はなこ"
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 px-1 focus:outline-none focus:border-rose-400 transition-all text-base md:text-lg font-light text-gray-700 placeholder:text-gray-300"
                  />
                </div>
                <div className="group relative">
                  <label className="block text-xs font-medium text-gray-500 mb-2 group-focus-within:text-rose-600 transition-colors">生年月日</label>
                  <input 
                    type="date" 
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 px-1 focus:outline-none focus:border-rose-400 transition-all text-base md:text-lg font-light text-gray-700"
                  />
                </div>
              </div>

              {error && <p className="text-red-400 text-xs text-center">{error}</p>}

              <button 
                type="button"
                onClick={() => window.location.href = 'https://isana-app.vercel.app/'}
                className="elegant-button w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-medium py-4 md:py-5 lg:py-6 rounded-full text-sm md:text-base lg:text-lg shadow-lg"
              >
                鑑定を実行する
              </button>
            </form>
          ) : (
            <div className="py-24 text-center space-y-8">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-[1px] border-rose-200 rounded-full"></div>
                <div className="absolute inset-0 border-[1px] border-rose-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-base md:text-lg font-light italic text-rose-600 animate-pulse tracking-wide">{loadingMessages[msgIndex]}</p>
            </div>
          )}
        </div>

        {result && !loading && (
          <div id="result-area" className="mt-20 md:mt-24 animate-in fade-in zoom-in-95 duration-1000">
            <div className="glass-effect p-8 md:p-16 lg:p-20 rounded-3xl bg-white relative">
              <div className="absolute top-8 right-8 text-[9px] tracking-wider font-medium text-gray-200 uppercase rotate-90 origin-right hidden md:block">Official AI Certificate</div>
              
              <div className="text-center mb-16 md:mb-20">
                <h3 className="text-gray-400 tracking-wider uppercase text-xs mb-8 font-medium">Life Path Number</h3>
                <div className="relative inline-block">
                  <div className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-medium rose-text leading-none select-none drop-shadow-sm">
                    {result.lifePathNumber}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-rose-200/30"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                <div className="md:col-span-2 space-y-10 md:space-y-12">
                  <div className="relative">
                    <h4 className="text-xs font-medium text-gray-400 mb-6 md:mb-8 tracking-wider uppercase flex items-center gap-4">
                      <span className="w-4 h-[1px] bg-rose-400"></span>
                      Analysis Result
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light whitespace-pre-wrap first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:rose-text first-letter:mr-2 first-letter:float-left">
                      {result.reading}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
                    {result.keywords.map((kw, i) => (
                      <span key={i} className="px-4 md:px-5 py-2 rounded-full border border-rose-200/50 text-rose-700 text-xs font-medium bg-rose-50/50 tracking-wide">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div className="rose-accent-bg p-6 md:p-8 rounded-2xl border border-rose-100/50">
                    <h5 className="text-xs font-medium text-rose-700 mb-4 md:mb-6 tracking-wider uppercase">Guidance</h5>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                      「{result.advice}」
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => window.print()}
                    className="w-full py-4 md:py-5 border border-gray-200 rounded-full text-xs font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-3"
                  >
                    結果を保存
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NumerologyTool;
