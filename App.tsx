
import React from 'react';
import Hero from './components/Hero';
import AboutNumerology from './components/AboutNumerology';
import NumerologyTool from './components/NumerologyTool';
import Footer from './components/Footer';

const Testimonials: React.FC = () => (
  <section className="py-20 md:py-32 px-4 md:px-6 bg-white">
    <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-2 md:mb-3">Voices</h2>
        <p className="text-xs md:text-sm text-gray-500 font-light">鑑定を受けた方々の声</p>
        <div className="accent-line mt-3 md:mt-4"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {[
          { name: "S.K様", age: "30代女性", text: "婚活疲れの原因が、自分ではなく選び方だったと分かり、気持ちが軽くなりました。数秘で相性を見ることで、これからは自信を持って出会えます。" },
          { name: "M.T様", age: "40代男性", text: "「合わない人を選び続けていた」という構造的な問題が明確になり、自己否定から解放されました。結婚に対して前向きになれました。" },
          { name: "A.H様", age: "20代女性", text: "恋愛と結婚の違いを数秘で理解できました。感情だけでなく、生活・役割・価値観で判断できるようになり、本当に合う人を見つけられそうです。" }
        ].map((item, i) => (
          <div key={i} className="card-hover p-8 md:p-10 rounded-3xl border border-rose-50 bg-white">
            <div className="flex text-rose-400 mb-6 gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
            <p className="text-gray-600 mb-8 font-light leading-relaxed text-sm md:text-base italic">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 font-semibold text-sm">
                {item.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-400 font-normal">{item.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-rose-50/50 px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex justify-between items-center bg-white/80">
        <div className="text-base sm:text-lg md:text-xl font-medium text-gray-800 tracking-wide md:tracking-wider">数秘 × 結婚</div>
        <div className="hidden md:flex gap-10 text-xs tracking-wider font-medium text-gray-500">
          <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-rose-600 transition-colors">Voice</a>
          <a href="#calculator" className="text-gray-800 hover:text-rose-600 transition-colors border-b-2 border-rose-400 pb-1">Free Diagnosis</a>
        </div>
      </nav>

      <main>
        <Hero />
        
        <div id="about">
          <AboutNumerology />
        </div>

        <section className="py-20 md:py-32 lg:py-40 px-4 md:px-6 gradient-overlay relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-rose-50/20 blur-[120px] -z-10"></div>
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 lg:space-y-12 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.3] md:leading-tight text-gray-800 px-2">
              婚活疲れからの解放。<br className="md:hidden" />
              <span className="rose-text font-medium">選び方の軸</span>を外在化する。
            </h2>
            <div className="accent-line"></div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto px-4">
              「私がダメ」という自己否定のループから抜け出すには、選び方の基準を外在化することが必要です。数秘は、あなたが無意識に選んでしまう相手の傾向を構造的に可視化し、本当に相性の良い人を見つけるための軸を提供します。
            </p>
          </div>
        </section>

        <div id="testimonials">
          <Testimonials />
        </div>

        <NumerologyTool />
      </main>

      <Footer />
    </div>
  );
};

export default App;
