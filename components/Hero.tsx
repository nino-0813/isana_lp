
import React from 'react';

const Hero: React.FC = () => {
  const floatingNumbers = [1, 3, 5, 7, 8, 11, 22, 33, 9, 4];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/Generated%20Image%20January%2020,%202026%20-%201_23PM.jpeg" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            zIndex: 0
          }}
          onError={(e) => {
            // エンコードが失敗した場合は元のパスを試す
            const target = e.target as HTMLImageElement;
            target.src = "/Generated Image January 20, 2026 - 1_23PM.jpeg";
          }}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-[1]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-rose-200/40 text-[10px] md:text-xs mb-8 md:mb-12 tracking-wide md:tracking-wider text-rose-600 bg-white/80 backdrop-blur-md shadow-sm">
          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
          <span className="whitespace-nowrap">婚活疲れの本質を見つける</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 md:mb-8 leading-[1.2] md:leading-[1.15] tracking-tight text-gray-800 px-2">
          <span className="font-light block md:inline">数秘が刺さる理由</span>
          <br className="hidden md:block" />
          <span className="rose-text font-medium block md:inline">結婚領域</span>
        </h1>
        <div className="accent-line mb-8 md:mb-10"></div>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light px-4">
          「いい人がいない」<br className="md:hidden" />ではありません。<br className="hidden md:block" />
          <span className="font-medium text-gray-800 block mt-2 md:mt-0 md:inline">「合わない人を選び続けている」</span>
          <span className="text-gray-600 text-sm md:text-base mt-2 block">これが本質です。</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5 px-4">
          <a 
            href="https://isana-app.vercel.app/" 
            className="elegant-button bg-gradient-to-r from-rose-500 to-rose-400 text-white font-medium py-3.5 px-12 md:py-4 md:px-16 rounded-full text-sm md:text-base shadow-lg w-full max-w-sm md:w-auto"
          >
            無料で鑑定を始める
          </a>
          <p className="text-[10px] md:text-xs text-gray-400 font-normal tracking-wide md:tracking-wider">登録不要・完全無料</p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
