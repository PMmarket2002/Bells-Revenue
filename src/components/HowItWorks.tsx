import React from 'react';
import { Rocket, Filter, Trophy, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Setup & Kampagne',
      desc: 'Wir erstellen Ihre optimierte Landingpage und starten punktgenaue Google-Suchanzeigen.',
      icon: Rocket,
      color: '#57BBBD',
    },
    {
      step: '02',
      title: 'Anfragen & Vorprüfung',
      desc: 'Neue Interessenten werden vorqualifiziert – alle wichtigen Projektdaten liegen für Sie bereit.',
      icon: Filter,
      color: '#FF9F1C',
    },
    {
      step: '03',
      title: 'Abschließen & Wachsen',
      desc: 'Sie führen das Verkaufsgespräch mit echten Interessenten und gewinnen planbar neue Kunden.',
      icon: Trophy,
      color: '#122526',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-[#F8F8F8] text-[#122526] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
            So einfach funktioniert die Zusammenarbeit.
          </h2>
          <p className="text-base sm:text-lg text-[#122526]/80 font-['Montserrat']">
            Transparenter Ablauf ohne administrativen Mehraufwand für Ihren Betrieb.
          </p>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[32px] p-8 border-2 border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="font-['Lilita_One'] text-4xl"
                      style={{ color: item.color }}
                    >
                      {item.step}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                      style={{ 
                        backgroundColor: item.color,
                        color: item.color === '#FF9F1C' ? '#122526' : '#FFFFFF'
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-['Lilita_One'] text-2xl text-[#122526] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#122526]/80 font-['Montserrat'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Schritt {idx + 1} von 3</span>
                  <ArrowRight className="w-4 h-4 text-[#57BBBD]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
