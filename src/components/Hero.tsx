import React from 'react';
import heroBusinessImg from '../assets/images/hero_business_growth_1792450324708.jpg';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface HeroProps {
  onPrimaryCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#57BBBD] text-[#122526] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b-4 border-[#122526]/10">
      {/* Decorative Swoop-style subtle ambient circles */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#122526]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column: 50% reduced text, ultra clear and impactful */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Lilita_One'] text-[#122526] leading-[1.08] tracking-tight mb-5 text-balance">
              Mehr qualifizierte Anfragen für Ihr Unternehmen.
            </h1>

            {/* Concise Supporting Text (Benefits-focused, 1-2 lines) */}
            <p className="text-lg sm:text-xl text-[#122526]/90 font-['Montserrat'] leading-relaxed mb-8 max-w-xl font-medium">
              Gezielte Google-Werbung, überzeugende Landingpages und strukturierte Kundenkommunikation – planbar mehr Aufträge ohne Streuverlust.
            </p>

            {/* Single Primary CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onPrimaryCtaClick}
                className="btn-swoop-primary group !text-lg !py-3.5 !px-8 shadow-xl lg:!bg-[#122526] lg:!text-white lg:hover:!bg-[#1c383a]"
              >
                <span>Kostenloses Erstgespräch vereinbaren</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick 3 Value Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#122526]/85 font-['Montserrat']">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#122526]" />
                <span>Für Dienstleister & Fachbetriebe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#122526]" />
                <span>Messbare Anfragen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#122526]" />
                <span>Kein Fachchinesisch</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column: Business Growth Image + Floating KPI Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Swoop frame backdrop */}
              <div 
                className="absolute -inset-3 rounded-[36px] bg-[#122526] rotate-2 -z-10 shadow-xl opacity-90" 
                aria-hidden="true" 
              />

              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={heroBusinessImg}
                  alt="Team bespricht erfolgreiche Neukunden-Gewinnung und Kampagnenergebnisse"
                  className="w-full h-72 sm:h-84 object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid preview badge */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#43A4AA]">
                      Fokus Neukundengewinnung
                    </div>
                    <div className="text-sm font-bold text-[#122526]">
                      Planbare regionale Kundenanfragen
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF9F1C] lg:bg-[#57BBBD] flex items-center justify-center text-[#122526] font-bold transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
