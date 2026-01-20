
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-20 px-4 border-t border-rose-50/50 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-medium text-gray-800 tracking-wide mb-3 md:mb-4">数秘 × 結婚</h2>
          <p className="text-gray-400 text-xs font-normal">© 2024 AI Numerology Lab</p>
        </div>
        <div className="flex gap-8 md:gap-12 text-xs font-medium text-gray-500">
          <a href="#" className="hover:text-rose-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-12 md:mt-16 text-center text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
        *このサービスは娯楽目的です。数秘術は自己理解のためのツールであり、専門的なアドバイスの代替ではありません。
      </div>
    </footer>
  );
};

export default Footer;
