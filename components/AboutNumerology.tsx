
import React from 'react';

const AboutNumerology: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20 -mx-4 md:mx-0 px-4 md:px-0">
          <div className="w-full md:max-w-full mx-auto relative">
            {/* スマホ用画像 */}
            <img 
              src="/Generated Image January 20, 2026 - 1_39PM.jpeg" 
              alt="結婚市場で起きている本質的な問題" 
              className="w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg block md:hidden"
            />
            {/* デスクトップ用画像 */}
            <img 
              src="/Generated Image January 20, 2026 - 1_11PM.jpeg" 
              alt="結婚市場で起きている本質的な問題" 
              className="w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hidden md:block"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 relative max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0 px-2 md:px-0">
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-rose-50/30 rounded-xl sm:rounded-2xl md:rounded-3xl -rotate-1"></div>
            <img 
              src="/Generated Image January 20, 2026 - 1_17PM.jpeg" 
              alt="数秘と結婚" 
              className="relative rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-500 w-full" 
            />
          </div>
          <div className="w-full md:w-1/2 space-y-5 md:space-y-6 lg:space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 leading-[1.3] md:leading-tight">
              数秘が果たす役割<br className="hidden md:block" />
              <span className="rose-text font-medium block md:inline">選び方の軸を外在化すること</span>
            </h3>
            <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
              結婚活動で疲弊する最大の理由は、「自分に問題があるのではないか」という自己否定のループです。数秘術は、あなたの選び方の傾向を構造的に分析し、「合わない相手を選んでいた」という事実を明確にします。これにより、自己否定から解放され、正しい選択基準を持つことができるようになります。
            </p>
            <div className="rose-accent-bg p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-rose-100/50">
              <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                「私がダメ」→「構造的に合わない相手を選んでいただけ」<br />
                <span className="font-medium block mt-1 md:mt-0 md:inline">この変換ができると、一気に救われます。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumerology;
