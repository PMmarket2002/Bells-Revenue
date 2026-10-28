import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (pkg: 'BASIC' | 'ADVANCED' | 'PREMIUM') => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#122526] text-white relative overflow-hidden border-y-4 border-[#57BBBD]">
      {/* Decorative ambient teal glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#57BBBD]/15 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#FF9F1C]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-white mb-3">
            Drei klare Pakete für Ihren Erfolg.
          </h2>
          <p className="text-base sm:text-lg text-[#EEF8F8]/80 font-['Montserrat']">
            Wählen Sie den Umfang, der am besten zu Ihren Wachstumszielen passt.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. BASIC */}
          <div className="rounded-[32px] bg-white/5 border border-white/15 p-8 flex flex-col justify-between hover:border-[#57BBBD] transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#57BBBD] mb-2 font-['Montserrat']">
                Sichtbarkeit & Anfragen
              </div>
              <h3 className="font-['Lilita_One'] text-3xl text-white mb-2">
                BASIC
              </h3>
              <p className="text-sm text-slate-300 font-['Montserrat'] mb-6">
                Der professionelle Auftritt, um gezielt neue Interessenten zu gewinnen.
              </p>

              <div className="text-sm font-semibold text-[#FF9F1C] pb-6 mb-6 border-b border-white/10 font-['Montserrat']">
                Individuelles Angebot / Preis auf Anfrage
              </div>

              <ul className="space-y-3.5 text-sm text-slate-200 font-['Montserrat'] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Moderne, mobiloptimierte Landingpage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Einrichtung & Verwaltung von Google-Suchanzeigen</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Einrichtung von Conversion-Tracking</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage('BASIC')}
              className="btn-swoop-outline !text-white !border-white/30 hover:!border-white !w-full"
            >
              BASIC anfragen
            </button>
          </div>

          {/* 2. ADVANCED (Flagship Highlight) */}
          <div className="rounded-[36px] bg-[#57BBBD] text-[#122526] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative border-4 border-white lg:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9F1C] text-[#122526] font-['Lilita_One'] text-xs uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
              Meistgewählt
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1F6B6F] mb-2 font-['Montserrat']">
                Voller Kommunikations-Service
              </div>
              <h3 className="font-['Lilita_One'] text-3xl sm:text-4xl text-[#122526] mb-2">
                ADVANCED
              </h3>
              <p className="text-sm text-[#122526]/85 font-['Montserrat'] mb-6">
                Alles aus BASIC, plus Unterstützung bei Kundenkontakt & Qualifizierung.
              </p>

              <div className="text-sm font-bold text-[#122526] pb-6 mb-6 border-b border-[#122526]/15 font-['Montserrat']">
                Individuelles Angebot / Preis auf Anfrage
              </div>

              <ul className="space-y-3.5 text-sm text-[#122526] font-medium font-['Montserrat'] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#122526] shrink-0 mt-0.5" />
                  <span>Alle Leistungen aus dem <strong>BASIC</strong>-Paket</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#122526] shrink-0 mt-0.5" />
                  <span>Zeitnahe Unterstützung bei Erstkontakten</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#122526] shrink-0 mt-0.5" />
                  <span>Vorab-Erfassung relevanter Projektdaten</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#122526] shrink-0 mt-0.5" />
                  <span>Strukturierte Übergabe an Ihr Team</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage('ADVANCED')}
              className="btn-swoop-primary !w-full shadow-lg"
            >
              ADVANCED anfragen
            </button>
          </div>

          {/* 3. PREMIUM */}
          <div className="rounded-[32px] bg-white/5 border border-white/15 p-8 flex flex-col justify-between hover:border-[#57BBBD] transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#57BBBD] mb-2 font-['Montserrat']">
                Daten & Maximale Skalierung
              </div>
              <h3 className="font-['Lilita_One'] text-3xl text-white mb-2">
                PREMIUM
              </h3>
              <p className="text-sm text-slate-300 font-['Montserrat'] mb-6">
                Tiefe Einblicke, Lead-Qualitätsanalysen und datenbasierte Optimierung.
              </p>

              <div className="text-sm font-semibold text-[#FF9F1C] pb-6 mb-6 border-b border-white/10 font-['Montserrat']">
                Individuelles Angebot / Preis auf Anfrage
              </div>

              <ul className="space-y-3.5 text-sm text-slate-200 font-['Montserrat'] mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Alle Leistungen aus <strong>BASIC & ADVANCED</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Erweiterte Lead- und Conversion-Analyse</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Bewertung der Anfrage-Qualität nach Kanälen</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#57BBBD] shrink-0 mt-0.5" />
                  <span>Laufende datengestützte Kampagnen-Optimierung</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage('PREMIUM')}
              className="btn-swoop-outline !text-white !border-white/30 hover:!border-white !w-full"
            >
              PREMIUM anfragen
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
