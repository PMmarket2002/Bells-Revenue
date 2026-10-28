import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#122526]/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group text-decoration-none"
          aria-label="Bell´s Revenue Startseite"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#57BBBD] flex items-center justify-center text-[#122526] font-['Lilita_One'] text-2xl shadow-sm transition-transform group-hover:scale-105">
            B
          </div>
          <span className="font-['Lilita_One'] text-2xl sm:text-3xl tracking-tight text-[#122526] leading-none">
            Bell´s <span className="text-[#FF9F1C]">Revenue</span>
          </span>
        </a>

        {/* Small CTA button only (No top nav menu links) */}
        <button
          onClick={onCtaClick}
          className="btn-swoop-primary !text-sm sm:!text-base !py-2.5 !px-5 sm:!px-7 !rounded-full shadow-md"
        >
          Erstgespräch anfragen
        </button>
      </div>
    </header>
  );
};
