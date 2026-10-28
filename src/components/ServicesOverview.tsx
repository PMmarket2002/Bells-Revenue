import React from 'react';
import consultationImg from '../assets/images/client_consultation_diverse_1792450323555.jpg';
import { 
  Search, 
  Layout, 
  MessageSquareText, 
  Wrench, 
  MapPin, 
  Briefcase, 
  Building2,
  Check
} from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] text-[#122526] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
            Was wir tun & für wen wir arbeiten.
          </h2>
          <p className="text-base sm:text-lg text-[#122526]/80 font-['Montserrat']">
            Wir bringen Unternehmen dort nach vorn, wo Kunden aktiv nach ihren Dienstleistungen suchen.
          </p>
        </div>

        {/* 3 Core Services: Short, crisp, benefits-focused */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-7 rounded-[28px] bg-[#EEF8F8] border border-[#57BBBD]/30 hover:border-[#57BBBD] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#57BBBD] flex items-center justify-center text-[#122526] mb-5 shadow-sm">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-['Lilita_One'] text-2xl text-[#122526] mb-2">
              Google-Werbung
            </h3>
            <p className="text-sm text-[#122526]/80 font-['Montserrat'] leading-relaxed">
              Direkt gefunden werden, wenn Interessenten in Ihrer Region aktiv nach Ihren Leistungen suchen.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#EEF8F8] border border-[#57BBBD]/30 hover:border-[#57BBBD] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FF9F1C] flex items-center justify-center text-[#122526] mb-5 shadow-sm">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="font-['Lilita_One'] text-2xl text-[#122526] mb-2">
              Conversion-Landingpages
            </h3>
            <p className="text-sm text-[#122526]/80 font-['Montserrat'] leading-relaxed">
              Mobiloptimierte Seiten, die Besucher überzeugen und die Kontaktaufnahme kinderleicht machen.
            </p>
          </div>

          <div className="p-7 rounded-[28px] bg-[#EEF8F8] border border-[#57BBBD]/30 hover:border-[#57BBBD] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#122526] flex items-center justify-center text-[#57BBBD] mb-5 shadow-sm">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <h3 className="font-['Lilita_One'] text-2xl text-[#122526] mb-2">
              Strukturierte Erstkontakte
            </h3>
            <p className="text-sm text-[#122526]/80 font-['Montserrat'] leading-relaxed">
              Wichtige Eckdaten vorab erfassen – damit Sie nur vorqualifizierte Anfragen auf den Tisch bekommen.
            </p>
          </div>

        </div>

        {/* Who we help split block: Target all businesses */}
        <div className="rounded-[36px] bg-[#F8F8F8] border-2 border-slate-200/80 p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={consultationImg}
                  alt="Beratungsgespräch mit Unternehmern und Dienstleistern"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Target Audience List */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="font-['Lilita_One'] text-2xl sm:text-3xl text-[#122526] mb-4">
                Partner für wachstumsorientierte Unternehmen
              </h3>
              <p className="text-sm sm:text-base text-[#122526]/80 font-['Montserrat'] mb-6 leading-relaxed">
                Wir arbeiten branchenübergreifend mit Betrieben, die planbar mehr Kunden gewinnen möchten:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-['Montserrat'] text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <Wrench className="w-4 h-4 text-[#57BBBD] shrink-0" />
                  <span className="font-semibold text-[#122526]">Handwerk & Installation</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#57BBBD] shrink-0" />
                  <span className="font-semibold text-[#122526]">Lokale Dienstleister</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <Briefcase className="w-4 h-4 text-[#57BBBD] shrink-0" />
                  <span className="font-semibold text-[#122526]">Freiberufler & Berater</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <Building2 className="w-4 h-4 text-[#57BBBD] shrink-0" />
                  <span className="font-semibold text-[#122526]">Wachsende KMU</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
