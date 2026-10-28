import React from 'react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenImpressum,
  onOpenDatenschutz,
}) => {
  return (
    <footer className="bg-[#122526] text-white pt-14 pb-10 border-t-4 border-[#57BBBD]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-white/10">
          
          {/* Brand & Short Description (Cut by 50%) */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#57BBBD] flex items-center justify-center text-[#122526] font-['Lilita_One'] text-lg">
                B
              </div>
              <span className="font-['Lilita_One'] text-2xl tracking-tight text-white">
                Bell´s <span className="text-[#FF9F1C]">Revenue</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-['Montserrat'] leading-relaxed max-w-md">
              Digitales Performance-Marketing und qualifizierte Leadgewinnung für Dienstleister, Handwerksbetriebe und wachsende Unternehmen.
            </p>
          </div>

          {/* Links & Contact */}
          <div className="md:col-span-5 flex flex-col md:items-end justify-between h-full">
            <div className="text-left md:text-right text-xs text-slate-300 font-['Montserrat'] space-y-1 mb-4">
              <div className="font-bold text-[#57BBBD] uppercase tracking-wider">
                Kontakt
              </div>
              <div>E-Mail: pascal@bellsrevenue.com</div>
              <div>Tel: <a href="tel:+38640304799" className="hover:text-[#57BBBD] transition-colors">+386 40 304 799</a></div>
            </div>

            <div className="flex flex-wrap gap-5 text-xs font-semibold text-slate-300">
              <button
                onClick={onOpenImpressum}
                className="hover:text-[#57BBBD] transition-colors underline underline-offset-4"
              >
                Impressum
              </button>
              <button
                onClick={onOpenDatenschutz}
                className="hover:text-[#57BBBD] transition-colors underline underline-offset-4"
              >
                Datenschutzerklärung
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-['Montserrat']">
          <div>
            © 2026 Bell´s Revenue. Alle Rechte vorbehalten.
          </div>
        </div>

      </div>
    </footer>
  );
};
