import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Check, 
  Search, 
  BarChart3, 
  MessageSquare, 
  RefreshCw, 
  Target, 
  Layers, 
  Sliders, 
  FileText,
  TrendingUp,
  Inbox,
  Filter,
  CheckCircle2,
  Smartphone,
  Eye,
  CheckCheck,
  RotateCcw,
  Clock,
  Sparkles,
  MousePointer,
  Zap,
  ShieldCheck,
  Send,
  HelpCircle,
  Activity,
  ArrowUpRight,
  TrendingDown,
  User,
  Phone,
  Calendar,
  Building,
  ChevronRight,
  Info
} from 'lucide-react';

interface DetailedServicesProps {
  onCtaClick: () => void;
}

// Hand-drawn SVG doodle accents
const HandDrawnUnderline: React.FC<{ color?: string; className?: string }> = ({ 
  color = '#FF9F1C', 
  className = 'w-36 h-3' 
}) => (
  <svg 
    viewBox="0 0 160 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path 
      d="M3 11C42 4 118 3 157 11C112 7 48 8 12 13" 
      stroke={color} 
      strokeWidth="3.5" 
      strokeLinecap="round" 
    />
  </svg>
);

const HandDrawnCurvedArrow: React.FC<{ color?: string; className?: string; flipped?: boolean }> = ({ 
  color = '#57BBBD', 
  className = 'w-14 h-10',
  flipped = false 
}) => (
  <svg 
    viewBox="0 0 60 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} ${flipped ? '-scale-x-100' : ''}`}
    aria-hidden="true"
  >
    <path 
      d="M6 34C18 10 42 6 52 16M52 16L44 8M52 16L54 26" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const DetailedServices: React.FC<DetailedServicesProps> = ({ onCtaClick }) => {
  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPERIENCE A: Build Your Own Landing Page State
  // ---------------------------------------------------------------------------
  const [builderCompany, setBuilderCompany] = useState('AlpenWerk Meisterbetrieb');
  const [builderService, setBuilderService] = useState('Fenster- & Türentausch');
  const [builderLocation, setBuilderLocation] = useState('Graz & Umgebung');
  const [builderBenefit, setBuilderBenefit] = useState('Festpreis-Garantie & Vor-Ort-Termin in 48h');
  const [builderCta, setBuilderCta] = useState('Kostenloses Angebot anfordern');

  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPERIENCE B: Google Ads Journey Explorer State
  // ---------------------------------------------------------------------------
  const [adsJourneyStep, setAdsJourneyStep] = useState<number>(0);


  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPERIENCE D: Communication Automation Simulator State
  // ---------------------------------------------------------------------------
  const [commSimStep, setCommSimStep] = useState<number>(1);

  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPERIENCE E: Tracking Dashboard Metric Selector State
  // ---------------------------------------------------------------------------
  const [trackingMetric, setTrackingMetric] = useState<'klicks' | 'besuche' | 'anfragen' | 'cvr'>('anfragen');

  // ---------------------------------------------------------------------------
  // INTERACTIVE EXPERIENCE F: Continuous Optimization Stage State
  // ---------------------------------------------------------------------------
  const [optStage, setOptStage] = useState<'analysieren' | 'anpassen' | 'messen' | 'verfeinern'>('analysieren');

  return (
    <div className="w-full overflow-hidden">
      {/* =========================================================================
          SERVICE 1: LANDINGPAGES
          Background: Warm Beige-Grey (#F5F3EF)
          Features: Hand-drawn details, Speech bubbles & Interactive Landing Page Builder
          ========================================================================= */}
      <section id="service-landingpages" className="py-20 lg:py-28 bg-[#F5F3EF] text-[#122526] border-t border-slate-300/60 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Speech Bubble */}
          <div className="max-w-3xl mb-12 relative">
            {/* Cloud speech bubble placed cleanly above heading */}
            <div className="inline-flex mb-3.5 bg-[#122526] text-white px-3.5 py-1.5 rounded-2xl rounded-bl-none shadow-md border-2 border-[#57BBBD] items-center gap-2 text-xs font-bold font-['Montserrat'] rotate-1">
              <span className="text-[#FF9F1C]">💭</span>
              <span>„Was passiert eigentlich nach dem Klick?“</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Aus Besuchern werden Anfragen.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/85 font-['Montserrat'] font-medium leading-relaxed">
              Eine gute Landingpage führt potenzielle Kunden gezielt zu einer Handlung – statt sie mit unnötigen Informationen abzulenken.
            </p>
            <HandDrawnUnderline color="#FF9F1C" className="w-44 h-3 mt-1" />
          </div>

          {/* INTERACTIVE EXPERIENCE A: Build Your Own Landing Page */}
          <div className="mb-14">
            <div className="mb-4">
              <h3 className="font-['Lilita_One'] text-2xl text-[#122526]">
                Passen Sie die Landingpage interaktiv an Ihren Betrieb an
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Controls Column (Left) */}
              <div className="w-full bg-white p-6 sm:p-8 rounded-[28px] border-2 border-slate-200/90 shadow-md space-y-4 font-['Montserrat'] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#43A4AA] pb-2 mb-4 border-b border-slate-100 flex items-center justify-between">
                    <span>Ihre Betriebsdaten eintragen</span>
                    <span className="text-[10px] text-slate-400 font-normal">Tippen zum Testen</span>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#122526] mb-1">
                        Unternehmensname:
                      </label>
                      <input
                        type="text"
                        value={builderCompany}
                        onChange={(e) => setBuilderCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8F8] border border-slate-300 text-xs font-medium text-[#122526] focus:border-[#57BBBD] outline-none transition-colors"
                        placeholder="z.B. Meisterbetrieb Schmidt"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122526] mb-1">
                        Angebot / Gewerk:
                      </label>
                      <input
                        type="text"
                        value={builderService}
                        onChange={(e) => setBuilderService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8F8] border border-slate-300 text-xs font-medium text-[#122526] focus:border-[#57BBBD] outline-none transition-colors"
                        placeholder="z.B. Badsanierung & Sanitär"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122526] mb-1">
                        Region / Einzugsgebiet:
                      </label>
                      <input
                        type="text"
                        value={builderLocation}
                        onChange={(e) => setBuilderLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8F8] border border-slate-300 text-xs font-medium text-[#122526] focus:border-[#57BBBD] outline-none transition-colors"
                        placeholder="z.B. Wien & Umland"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122526] mb-1">
                        Hauptvorteil für Kunden:
                      </label>
                      <input
                        type="text"
                        value={builderBenefit}
                        onChange={(e) => setBuilderBenefit(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8F8] border border-slate-300 text-xs font-medium text-[#122526] focus:border-[#57BBBD] outline-none transition-colors"
                        placeholder="z.B. Festpreisgarantie & 24h Vor-Ort"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#122526] mb-1">
                        Button-Aufschrift (CTA):
                      </label>
                      <input
                        type="text"
                        value={builderCta}
                        onChange={(e) => setBuilderCta(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8F8] border border-slate-300 text-xs font-medium text-[#122526] focus:border-[#57BBBD] outline-none transition-colors"
                        placeholder="z.B. Kostenloses Angebot anfordern"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#EEF8F8] rounded-xl text-[11px] text-[#1F6B6F] leading-relaxed border border-[#57BBBD]/30 mt-3">
                  💡 <strong>Beispiel-Vorschau:</strong> Sehen Sie <span className="hidden lg:inline">rechts</span><span className="inline lg:hidden">unten</span> in Echtzeit, wie Ihre Angaben in einer fokussierten Landingpage sofort Vertrauen stiften.
                </div>
              </div>

              {/* Live Preview Display (Right) */}
              <div className="w-full relative flex flex-col justify-between">
                {/* Simulated Browser Frame */}
                <div className="rounded-[28px] overflow-hidden border-4 border-[#122526]/10 shadow-2xl bg-white flex flex-col h-full">
                  
                  {/* Browser Bar */}
                  <div className="bg-[#122526] px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#57BBBD]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F1C]" />
                      <span className="ml-3 text-[11px] text-slate-300 font-mono hidden sm:inline-block">
                        https://ihre-domain.at/angebot
                      </span>
                    </div>
                    <span className="text-[10px] text-[#57BBBD] font-bold">
                      ✓ SSL-gesichert
                    </span>
                  </div>

                  {/* Dynamic Page Content */}
                  <div className="p-6 sm:p-8 bg-gradient-to-b from-[#EEF8F8] to-white space-y-5 flex-1 flex flex-col justify-between">
                    
                    {/* Header bar inside page */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="font-['Lilita_One'] text-lg text-[#122526] truncate max-w-[220px] sm:max-w-none">
                        {builderCompany || 'Ihr Meisterbetrieb'}
                      </div>
                      <span className="text-[11px] font-bold text-[#1F6B6F] bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {builderLocation || 'Ihre Region'}
                      </span>
                    </div>

                    {/* Hero section inside page */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#43A4AA] mb-1 font-['Montserrat']">
                        Spezialist für {builderService || 'Ihre Leistung'}
                      </div>
                      <h4 className="font-['Lilita_One'] text-2xl sm:text-3xl text-[#122526] leading-tight mb-2">
                        Ihr zuverlässiger Partner für {builderService || 'qualitative Facharbeit'}.
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-['Montserrat'] max-w-lg leading-relaxed">
                        Wir begleiten Sie von der ersten unverbindlichen Beratung bis zur sauberen Übergabe direkt in {builderLocation || 'Ihrer Region'}.
                      </p>
                    </div>

                    {/* Customer Benefit Card */}
                    <div className="p-4 rounded-xl bg-white border border-[#57BBBD]/30 shadow-xs flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#57BBBD] flex items-center justify-center text-[#122526] font-bold text-lg shrink-0">
                        ✓
                      </div>
                      <div className="font-['Montserrat']">
                        <div className="text-[11px] font-bold uppercase text-[#1F6B6F]">Ihr Kunden-Vorteil</div>
                        <div className="text-xs sm:text-sm font-bold text-[#122526]">
                          {builderBenefit || 'Faire Festpreise & termingerechte Fertigstellung'}
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Form Card with Live Button */}
                    <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-sm space-y-3 font-['Montserrat']">
                      <div className="text-xs font-bold text-[#122526]">
                        Unverbindliche Anfrage in 1 Minute:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-[#F8F8F8] rounded-lg border border-slate-200 text-slate-500">
                          Projekt: {builderService || 'Beratung'}
                        </div>
                        <div className="p-2.5 bg-[#F8F8F8] rounded-lg border border-slate-200 text-slate-500">
                          Ort: {builderLocation || 'Vor Ort'}
                        </div>
                      </div>
                      <button className="w-full py-3 rounded-xl bg-[#FF9F1C] text-[#122526] font-['Lilita_One'] text-sm shadow-md flex items-center justify-center gap-2 hover:bg-[#122526] hover:text-white transition-colors cursor-pointer">
                        <span>{builderCta || 'Jetzt unverbindlich anfragen'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[10px] text-center text-slate-400 font-['Montserrat']">
                      *Dies ist eine interaktive Vorschau. Bell´s Revenue baut jede Landingpage individuell, professionell getextet und technisch schlüsselfertig für Ihren Betrieb.
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Section Footer: Closing & CTA */}
          <div className="pt-6 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Lilita_One'] text-lg sm:text-xl text-[#122526] text-center sm:text-left">
              Das Ziel: ein klarer Weg vom ersten Klick zur konkreten Anfrage.
            </p>
            <button
              onClick={onCtaClick}
              className="btn-swoop-primary !text-base !py-3 !px-7 shadow-md shrink-0"
            >
              <span>Landingpage anfragen</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SERVICE 2: GOOGLE ADS
          Background: BLUE (#57BBBD)
          Features: Interactive Journey Explorer (B) & Interactive Budget Slider (C)
          ========================================================================= */}
      <section id="service-google-ads" className="py-20 lg:py-28 bg-[#57BBBD] text-[#122526] border-t-2 border-[#122526]/10 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Speech Bubble */}
          <div className="max-w-3xl mb-12 relative">
            {/* Cloud speech bubble placed cleanly above heading */}
            <div className="inline-flex mb-3.5 bg-[#122526] text-white px-3.5 py-1.5 rounded-2xl rounded-bl-none shadow-md border-2 border-white items-center gap-2 text-xs font-bold font-['Montserrat'] -rotate-1">
              <span className="text-white">🔍</span>
              <span>„Wie finden mich Kunden in meiner Region?“</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Seien Sie sichtbar, wenn Kunden nach Ihrer Leistung suchen.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/90 font-['Montserrat'] font-medium leading-relaxed">
              Mit Google Ads erreichen Unternehmen Menschen, die aktiv nach bestimmten Produkten oder Dienstleistungen suchen. Die Anzeigen können genau dann erscheinen, wenn bereits konkreter Bedarf besteht.
            </p>
            <HandDrawnUnderline color="#FF9F1C" className="w-44 h-3 mt-1" />
          </div>

          {/* INTERACTIVE EXPERIENCE B: Interactive Google Ads Journey Explorer */}
          <div className="mb-14 max-w-[1020px] mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#122526] mb-3 font-['Montserrat']">
              Interaktive Stationen: Klicken Sie durch den Weg des Kunden
            </div>

            {/* 4 Interactive Step Tabs (Black & Gray letters, darker numerical title, lighter gray active background) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-['Montserrat']">
              {[
                { step: 0, title: '1. Suchanfrage', desc: 'Kunde sucht Bedarf' },
                { step: 1, title: '2. Werbeanzeige', desc: 'Relevantes Ergebnis' },
                { step: 2, title: '3. Landingpage', desc: 'Fokussiertes Angebot' },
                { step: 3, title: '4. Kundenanfrage', desc: 'Konkreter Kontakt' },
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setAdsJourneyStep(item.step)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border-2 ${
                    adsJourneyStep === item.step
                      ? 'bg-[#F1F3F5] text-gray-900 border-slate-400 shadow-md -translate-y-0.5'
                      : 'bg-white/95 text-gray-700 border-white/80 hover:bg-slate-50'
                  }`}
                >
                  <div className={`text-xs font-bold ${adsJourneyStep === item.step ? 'text-gray-950 font-extrabold' : 'text-gray-800'}`}>
                    {item.title}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>

            {/* Interactive Step Content Box - Sized Wider & Stable Fixed Height Across Steps */}
            <div className="w-full rounded-[24px] sm:rounded-[32px] p-3.5 sm:p-7 bg-white border-2 sm:border-4 border-white shadow-2xl font-['Montserrat'] flex flex-col justify-between">
              
              {/* Google Search Browser Container */}
              <div className="rounded-2xl border border-slate-200 bg-[#FAFAFA] overflow-hidden shadow-xs mb-5">
                
                {/* Desktop & Tablet Google Search Bar Header (Unchanged for tablet and PC) */}
                <div className="hidden sm:block bg-white px-5 py-3 border-b border-slate-200">
                  <div className="flex sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Clean Google wordmark */}
                      <span className="text-2xl font-bold font-sans tracking-tight text-gray-800 select-none">
                        Google
                      </span>
                      
                      {/* Realistic Google Search Input Bar */}
                      <div className="flex-1 max-w-lg flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white shadow-xs">
                        <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="text-xs text-gray-800 font-medium truncate">
                          {adsJourneyStep === 0
                            ? 'fassadendämmung & meisterbetrieb graz angebote preise'
                            : 'fassadendämmung graz meisterbetrieb'}
                        </span>
                        <div className="ml-auto flex items-center gap-1.5 text-gray-400 shrink-0 text-xs">
                          <span className="cursor-pointer hover:text-gray-600">✕</span>
                          <span className="text-slate-300">|</span>
                          <span className="cursor-pointer hover:text-gray-600">🎙️</span>
                          <span className="cursor-pointer hover:text-gray-600">📷</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-gray-600 border border-slate-200 flex items-center justify-center font-bold text-[10px]">
                        G
                      </span>
                    </div>
                  </div>

                  {/* Google Filter Sub-Tabs */}
                  <div className="flex items-center gap-5 text-xs text-gray-500 pt-1 border-t border-slate-100 overflow-x-auto">
                    <span className="font-semibold text-gray-900 pb-1.5 border-b-2 border-gray-900 flex items-center gap-1.5 cursor-pointer">
                      <Search className="w-3 h-3 text-gray-800" />
                      Alle
                    </span>
                    <span className="pb-1.5 text-gray-500 hover:text-gray-800 cursor-pointer">Bilder</span>
                    <span className="pb-1.5 text-gray-500 hover:text-gray-800 cursor-pointer">Maps</span>
                    <span className="pb-1.5 text-gray-500 hover:text-gray-800 cursor-pointer">Shopping</span>
                    <span className="pb-1.5 text-gray-500 hover:text-gray-800 cursor-pointer">Videos</span>
                    <span className="pb-1.5 text-gray-500 hover:text-gray-800 cursor-pointer">News</span>
                  </div>
                </div>

                {/* Mobile Dedicated Google Search Bar Header (Authentic mobile Google screen) */}
                <div className="block sm:hidden bg-white px-3.5 pt-2.5 pb-2 border-b border-slate-200">
                  {/* Top Mobile Bar: Google Logo + Profile Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold font-sans tracking-tight text-gray-800 select-none">
                      Google
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-gray-700 flex items-center justify-center font-bold text-[10px]">
                      G
                    </div>
                  </div>

                  {/* Mobile Search Input Bar */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300 bg-white shadow-xs mb-2">
                    <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-xs text-gray-800 font-medium truncate flex-1">
                      {adsJourneyStep === 0
                        ? 'fassadendämmung graz meisterbetrieb'
                        : 'fassadendämmung graz meisterbetrieb'}
                    </span>
                    <span className="text-gray-400 text-xs shrink-0">✕</span>
                    <span className="text-slate-300 text-xs shrink-0">|</span>
                    <span className="text-xs shrink-0">🎙️</span>
                  </div>

                  {/* Mobile Filter Tabs */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-1.5 border-t border-slate-100 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <span className="font-semibold text-gray-900 pb-1 border-b-2 border-gray-900 flex items-center gap-1 shrink-0">
                      <Search className="w-3 h-3 text-gray-800" />
                      Alle
                    </span>
                    <span className="pb-1 text-gray-500 shrink-0">Bilder</span>
                    <span className="pb-1 text-gray-500 shrink-0">Maps</span>
                    <span className="pb-1 text-gray-500 shrink-0">Shopping</span>
                    <span className="pb-1 text-gray-500 shrink-0">Videos</span>
                  </div>
                </div>

                {/* Google Search Results Canvas - Same Stable Size Across All Steps */}
                <div className="p-3 sm:p-5">
                  <div className="text-[10px] text-gray-400 font-sans mb-3">
                    Ungefähr 19.400 Ergebnisse (0,31 Sekunden)
                  </div>

                  {/* Fixed-height Step Container so the window never shifts or jumps */}
                  <div className="min-h-[300px] sm:h-[300px] flex flex-col justify-between">
                    {adsJourneyStep === 0 && (
                      <div className="h-full flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-2 border-b border-slate-200 mb-2">
                            <div className="font-['Lilita_One'] text-base sm:text-lg text-gray-900">
                              Schritt 1: Der Kunde sucht mit aktiver Absicht auf Google
                            </div>
                            <span className="text-[10px] sm:text-[11px] bg-[#F1F3F5] text-gray-700 px-2.5 py-0.5 rounded-full font-bold border border-slate-200 self-start sm:self-auto shrink-0">
                              Hohe Kaufbereitschaft
                            </span>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Der Interessent sitzt nicht passiv auf Social Media, sondern tippt aktiv einen konkreten Suchbegriff in Google ein. Dadurch sprechen Sie Menschen genau im Moment des akuten Bedarfs an.
                          </p>
                        </div>

                        <div className="bg-[#F8F9FA] p-3.5 sm:p-4 rounded-2xl border border-slate-200 space-y-2.5 flex-1 flex flex-col justify-center">
                          <div className="text-[11px] font-bold text-gray-500 uppercase">Aktive Google-Suchanfrage:</div>
                          <div className="bg-white rounded-full px-3.5 py-2.5 border border-slate-300 flex items-center gap-2.5 shadow-xs">
                            <Search className="w-4 h-4 text-gray-400 shrink-0" />
                            <span className="text-xs font-semibold text-gray-900 truncate">
                              fassadendämmung & meisterbetrieb graz angebote preise
                            </span>
                          </div>
                          <div className="text-[11px] text-gray-500 pt-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                            <span>Nutzer sucht gezielt nach regionalen Preisen, Meisterqualität und Vor-Ort-Terminen.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {adsJourneyStep === 1 && (
                      <div className="h-full flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-2 border-b border-slate-200 mb-2">
                            <div className="font-['Lilita_One'] text-base sm:text-lg text-gray-900">
                              Schritt 2: Ihre Anzeige erscheint prominent als #1 auf Google
                            </div>
                            <span className="text-[10px] sm:text-[11px] bg-[#F1F3F5] text-gray-700 px-2.5 py-0.5 rounded-full font-bold border border-slate-200 self-start sm:self-auto shrink-0">
                              Platzierung ganz oben
                            </span>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            So sieht Ihre Google-Anzeige in der echten Google-Suche aus: mit offizieller URL, Vertrauensmerkmalen, Vorteils-Sitelinks und Anruf-Option.
                          </p>
                        </div>

                        {/* Authentic Google Sponsored Ad - Desktop & Tablet */}
                        <div className="hidden sm:flex p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200 space-y-2 flex-1 flex-col justify-between">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-gray-700 font-sans">
                              <span className="w-4 h-4 rounded-full bg-slate-200 text-gray-700 flex items-center justify-center font-bold text-[9px]">
                                B
                              </span>
                              <span className="font-medium text-gray-900 text-[11px]">Ihr Meisterbetrieb</span>
                              <span className="text-gray-400">·</span>
                              <span className="text-gray-500 text-[11px]">https://www.ihr-meisterbetrieb.at/graz</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-900 uppercase tracking-wide">
                              Gesponsert
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-900 hover:underline cursor-pointer leading-snug">
                              Fassadendämmung & Sanierung Graz | Zertifizierter Meisterbetrieb
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mt-0.5 line-clamp-2">
                              Zertifizierte Wärmedämmung mit Festpreis-Garantie & Vor-Ort-Termin in 48 Stunden. Bis zu 75% Sanierungsbonus sichern.
                            </p>
                          </div>

                          {/* Google Sitelinks Assets */}
                          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200 text-xs">
                            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-gray-800 font-medium">
                              ✓ Kostenlose Vor-Ort Beratung
                            </div>
                            <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-gray-800 font-medium">
                              ✓ Transparente Festpreise
                            </div>
                          </div>

                          <div className="text-[11px] text-gray-700 flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-medium text-gray-800">
                              📞 0664 / 123 45 67
                            </span>
                            <span className="text-gray-500">Direkt anrufen oder online anfragen</span>
                          </div>
                        </div>

                        {/* Authentic Google Sponsored Ad - Mobile */}
                        <div className="flex sm:hidden p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-200 flex-col justify-between space-y-2 flex-1">
                          {/* Mobile Ad Header: Gesponsert + Site URL + Menu dots */}
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <div className="flex items-center gap-1.5 text-gray-700 font-sans">
                                <span className="w-4 h-4 rounded-full bg-slate-200 text-gray-700 flex items-center justify-center font-bold text-[9px]">
                                  B
                                </span>
                                <span className="font-semibold text-gray-900 text-[11px]">Gesponsert</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-500 text-[11px] truncate max-w-[150px]">ihr-meisterbetrieb.at</span>
                              </div>
                              <span className="text-gray-400 text-xs">⋮</span>
                            </div>

                            {/* Mobile Ad Headline */}
                            <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                              Fassadendämmung & Sanierung Graz | Meisterbetrieb
                            </h4>
                            <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                              Wärmedämmung mit Festpreis-Garantie & Vor-Ort-Termin in 48h. Bis zu 75% Sanierungsbonus.
                            </p>
                          </div>

                          {/* Mobile Ad Sitelink Badges & Call Action */}
                          <div className="space-y-1.5 pt-1 border-t border-slate-200">
                            <div className="flex flex-wrap gap-1.5 text-[11px]">
                              <span className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-gray-800 font-medium">
                                ✓ Kostenlose Beratung
                              </span>
                              <span className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-gray-800 font-medium">
                                ✓ Festpreisgarantie
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-800 font-medium pt-0.5">
                              <span className="px-2 py-0.5 rounded-lg bg-white border border-slate-200">
                                📞 0664 / 123 45 67
                              </span>
                              <span className="text-gray-500 text-[10px]">Direkt anrufen</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {adsJourneyStep === 2 && (
                      <div className="h-full flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-2 border-b border-slate-200 mb-2">
                            <div className="font-['Lilita_One'] text-base sm:text-lg text-gray-900">
                              Schritt 3: Klick führt direkt auf die passende Landingpage
                            </div>
                            <span className="text-[10px] sm:text-[11px] bg-[#F1F3F5] text-gray-700 px-2.5 py-0.5 rounded-full font-bold border border-slate-200 self-start sm:self-auto shrink-0">
                              Direkter Fokus
                            </span>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Statt auf einer unübersichtlichen Startseite zu landen, sieht der Kunde exakt das Thema, nach dem er gesucht hat. Alle Vorteile und das Anfrageformular sind sofort sichtbar.
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200 space-y-2 flex-1 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-xs sm:text-sm text-gray-900">Spezialisierte Einzelseite</div>
                              <div className="text-[10px] sm:text-[11px] text-gray-500">Mobil optimiert & blitzschnell geladen</div>
                            </div>
                            <span className="text-[10px] sm:text-[11px] bg-white text-gray-800 font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200 shrink-0">
                              Kein Streuverlust
                            </span>
                          </div>
                          <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200 text-xs text-gray-700 space-y-1">
                            <div>✓ <strong>Sofortige Antworten:</strong> Wer führt die Arbeit aus? Wie läuft der Termin ab?</div>
                            <div>✓ <strong>Einfacher Klick:</strong> Anfrageformular mit 1-Minuten-Aufwand direkt im Sichtfeld.</div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-gray-500">
                            Zielgerichtete Benutzerführung führt Besucher direkt zum Angebot.
                          </div>
                        </div>
                      </div>
                    )}

                    {adsJourneyStep === 3 && (
                      <div className="h-full flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-2 border-b border-slate-200 mb-2">
                            <div className="font-['Lilita_One'] text-base sm:text-lg text-gray-900">
                              Schritt 4: Der Interessent stellt eine qualifizierte Anfrage
                            </div>
                            <span className="text-[10px] sm:text-[11px] bg-[#F1F3F5] text-gray-700 px-2.5 py-0.5 rounded-full font-bold border border-slate-200 self-start sm:self-auto shrink-0">
                              Ziel erreicht
                            </span>
                          </div>

                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Über ein einfaches Formular oder einen Klick auf die Telefonnummer nimmt der Interessent Kontakt auf. Aus einem Klick wird ein konkretes Angebot oder ein neuer Auftrag.
                          </p>
                        </div>

                        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200 text-xs text-gray-800 space-y-2 flex-1 flex flex-col justify-between">
                          <div className="flex items-center gap-2 font-bold text-gray-900">
                            <CheckCircle2 className="w-4 h-4 text-gray-800 shrink-0" />
                            <span>Eingegangener qualifizierter Lead:</span>
                          </div>
                          <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1 text-gray-700">
                            <div><strong>Name & Telefon:</strong> Fam. Gruber — 0664 / 789 XX XX</div>
                            <div><strong>Projekt:</strong> Fassadendämmung Einfamilienhaus (ca. 180 m²)</div>
                            <div><strong>Ort:</strong> Graz-Umgebung (Wunschtermin: nächste Woche)</div>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-gray-500">
                            Der Betrieb erhält alle Eckdaten fertig vorbereitet für das Telefonat.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Step Navigation Controls (Pure Neutral / Gray Styling) */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setAdsJourneyStep((prev) => Math.max(0, prev - 1))}
                  disabled={adsJourneyStep === 0}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-gray-700 disabled:opacity-30 cursor-pointer hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Zurück
                </button>
                <div className="text-xs font-semibold text-gray-500">
                  Station {adsJourneyStep + 1} von 4
                </div>
                <button
                  onClick={() => setAdsJourneyStep((prev) => Math.min(3, prev + 1))}
                  disabled={adsJourneyStep === 3}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-900 text-white text-xs font-bold disabled:opacity-30 cursor-pointer hover:bg-black transition-colors flex items-center gap-1.5"
                >
                  Weiter
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Section Footer */}
          <div className="pt-6 border-t border-[#122526]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Lilita_One'] text-lg sm:text-xl text-[#122526] text-center sm:text-left">
              Nicht einfach mehr Klicks – sondern planbare Werbung mit klarem Ziel.
            </p>
            <button
              onClick={onCtaClick}
              className="btn-swoop-primary !text-base !py-3 !px-7 shadow-md shrink-0"
            >
              <span>Google Ads kennenlernen</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SERVICE 3: COMMUNICATION AUTOMATION
          Background: LIGHT (#FFFFFF)
          Features: Interactive Conversation Simulator (D)
          ========================================================================= */}
      <section id="service-communication" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#122526] border-t-2 border-slate-200/80 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 relative">
            {/* Cloud speech bubble placed cleanly above heading */}
            <div className="inline-flex mb-3.5 bg-[#122526] text-white px-3.5 py-1.5 rounded-2xl rounded-bl-none shadow-md border-2 border-[#57BBBD] items-center gap-2 text-xs font-bold font-['Montserrat'] rotate-1">
              <span className="text-[#FF9F1C]">⚡</span>
              <span>„Wie lässt sich der Ablauf vereinfachen?“</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Weniger manuelle Arbeit. Besser organisierte Anfragen.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/85 font-['Montserrat'] font-medium leading-relaxed">
              Neue Anfragen sind wertvoll. Doch wenn im Tagesgeschäft die Zeit fehlt, bleiben Nachrichten manchmal zu lange unbeantwortet oder wichtige Informationen gehen verloren.
            </p>
            <HandDrawnUnderline color="#FF9F1C" className="w-44 h-3 mt-1" />
          </div>

          {/* INTERACTIVE EXPERIENCE D: Interactive Conversation Simulator */}
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-[#43A4AA] mb-4 font-['Montserrat']">
              Interaktiver Ablauf-Simulator: Klicken Sie die Schritte durch
            </div>

            {/* 5 Progress Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6 font-['Montserrat']">
              {[
                { step: 1, label: '1. Anfrage' },
                { step: 2, label: '2. Antwort' },
                { step: 3, label: '3. Eckdaten' },
                { step: 4, label: '4. Bestätigung' },
                { step: 5, label: '5. Übergabe' },
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setCommSimStep(item.step)}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                    commSimStep === item.step
                      ? 'bg-[#122526] text-white shadow-md'
                      : 'bg-[#EEF8F8] text-[#1F6B6F] hover:bg-[#57BBBD]/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Simulated Live Viewport */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F8F8] p-6 sm:p-8 rounded-[32px] border-2 border-slate-200">
              
              {/* Left: Chat Window */}
              <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-['Montserrat']">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-[#122526]">Simulator: Kunden-Dialog</span>
                  <span className="text-[10px] bg-[#EEF8F8] text-[#1F6B6F] px-2.5 py-0.5 rounded-full font-bold border border-[#57BBBD]/30">
                    Schritt {commSimStep} von 5
                  </span>
                </div>

                {commSimStep >= 1 && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#122526] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      K
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 text-xs text-slate-800 shadow-xs max-w-sm">
                      „Guten Tag, wir planen eine Badsanierung und hätten gerne ein Vor-Ort-Angebot in Graz.“
                    </div>
                  </div>
                )}

                {commSimStep >= 2 && (
                  <div className="flex items-start gap-2.5 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#57BBBD] text-[#122526] flex items-center justify-center text-xs font-bold shrink-0">
                      ⚡
                    </div>
                    <div className="p-3 rounded-2xl rounded-tr-none bg-[#122526] text-white text-xs shadow-xs max-w-sm">
                      „Vielen Dank für Ihre Anfrage! Um den Termin vorzubereiten: Wie groß ist das Bad ca. und wann soll es losgehen?“
                    </div>
                  </div>
                )}

                {commSimStep >= 3 && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#122526] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      K
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 text-xs text-slate-800 shadow-xs max-w-sm">
                      „Ca. 14 m², barrierefreie Dusche gewünscht. Start im Frühjahr 2026. Tel: 0664 / 123 45 67.“
                    </div>
                  </div>
                )}

                {commSimStep >= 4 && (
                  <div className="flex items-start gap-2.5 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#57BBBD] text-[#122526] flex items-center justify-center text-xs font-bold shrink-0">
                      ⚡
                    </div>
                    <div className="p-3 rounded-2xl rounded-tr-none bg-[#122526] text-white text-xs shadow-xs max-w-sm">
                      „Vielen Dank für die Informationen! Unser Servicetechniker wird sich in Kürze mit Ihnen in Verbindung setzen, um einen passenden Vor-Ort-Termin zu vereinbaren.“
                    </div>
                  </div>
                )}

                {commSimStep < 4 && (
                  <div className="p-3 bg-slate-50 rounded-xl text-center text-xs text-slate-400 italic">
                    Klicken Sie auf „Nächster Schritt“, um den weiteren Dialog zu sehen.
                  </div>
                )}
              </div>

              {/* Right: Handover State */}
              <div className="lg:col-span-6 bg-[#122526] text-white p-6 rounded-2xl shadow-xl border-2 border-[#57BBBD] font-['Montserrat'] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-[#57BBBD] uppercase font-mono">
                    STRUKTURIERTES LEAD-BLATT
                  </span>
                  <span className="text-[10px] text-slate-400">Automatische Erfassung</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-slate-400">Kunde:</span>
                    <span className="font-bold">{commSimStep >= 1 ? 'Stefan M. (Graz)' : 'Warte auf Anfrage...'}</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-slate-400">Vorhaben:</span>
                    <span className="font-bold text-[#FF9F1C]">{commSimStep >= 1 ? 'Badsanierung (14 m²)' : 'Noch offen'}</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-slate-400">Zeitfenster:</span>
                    <span className="font-bold">{commSimStep >= 3 ? 'Frühjahr 2026' : 'Wird abgefragt'}</span>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-bold text-[#57BBBD]">
                      {commSimStep === 5 ? '✓ Bereit für Techniker-Termin' : commSimStep === 4 ? 'Bestätigung an Kunden versendet' : `Stufe ${commSimStep}/5 aktiv`}
                    </span>
                  </div>
                </div>

                {commSimStep === 5 && (
                  <div className="p-2.5 bg-[#57BBBD]/20 rounded-xl text-xs text-[#EEF8F8] border border-[#57BBBD]/40">
                    🎉 Alle Daten liegen fertig vor. Ihr Servicetechniker meldet sich direkt mit passenden Terminvorschlägen – keine Zeitverschwendung am Telefon.
                  </div>
                )}
              </div>

            </div>

            {/* Stepper Buttons */}
            <div className="pt-4 flex items-center justify-between font-['Montserrat']">
              <button
                onClick={() => setCommSimStep((prev) => Math.max(1, prev - 1))}
                disabled={commSimStep === 1}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#122526] disabled:opacity-40 cursor-pointer hover:bg-slate-50 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Vorheriger Schritt
              </button>
              <button
                onClick={() => setCommSimStep((prev) => Math.min(5, prev + 1))}
                disabled={commSimStep === 5}
                className="px-4 py-2 rounded-xl bg-[#57BBBD] text-[#122526] text-xs font-bold disabled:opacity-40 cursor-pointer hover:bg-[#122526] hover:text-white transition-colors flex items-center gap-1.5"
              >
                Nächster Schritt
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Section Footer */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Lilita_One'] text-lg sm:text-xl text-[#122526] text-center sm:text-left">
              Damit aus einer eingehenden Nachricht ein klarer nächster Schritt wird.
            </p>
            <button
              onClick={onCtaClick}
              className="btn-swoop-primary !text-base !py-3 !px-7 shadow-md shrink-0"
            >
              <span>Kommunikation automatisieren</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SERVICE 4: TRACKING & MEASUREMENT
          Background: BLUE (#57BBBD)
          Features: Interactive Analytics Dashboard (E)
          ========================================================================= */}
      <section id="service-tracking" className="py-20 lg:py-28 bg-[#57BBBD] text-[#122526] border-t-2 border-[#122526]/10 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 relative">
            {/* Cloud speech bubble placed cleanly above heading */}
            <div className="inline-flex mb-3.5 bg-[#122526] text-white px-3.5 py-1.5 rounded-2xl rounded-bl-none shadow-md border-2 border-white items-center gap-2 text-xs font-bold font-['Montserrat'] -rotate-1">
              <span className="text-[#FF9F1C]">📈</span>
              <span>„Welche Anfragen entstehen daraus?“</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Messen, was wirklich zählt.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/90 font-['Montserrat'] font-medium leading-relaxed">
              Wie viele Klicks eine Anzeige erhält, sagt noch nicht, wie erfolgreich sie ist. Entscheidend ist, ob daraus relevante Anfragen oder andere vereinbarte Geschäftsziele entstehen.
            </p>
            <HandDrawnUnderline color="#FF9F1C" className="w-44 h-3 mt-1" />
          </div>

          {/* INTERACTIVE EXPERIENCE E: Interactive Analytics Dashboard */}
          <div className="mb-14">
            <div className="rounded-[32px] p-6 sm:p-8 bg-[#122526] text-white shadow-2xl border-4 border-white font-['Montserrat']">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
                <div>
                  <span className="text-[10px] text-[#57BBBD] font-bold uppercase tracking-wider font-mono">
                    INTERAKTIVES ANALYTICS-DASHBOARD
                  </span>
                  <h3 className="font-['Lilita_One'] text-2xl text-white">
                    Kennzahlen interaktiv durchschalten
                  </h3>
                </div>
                <span className="text-xs bg-white/10 text-[#FF9F1C] px-3 py-1 rounded-full font-bold">
                  Illustrative Beispieldaten
                </span>
              </div>

              {/* 4 Switchable Metric Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { key: 'klicks', label: 'Relevante Klicks', val: '342', sub: '100% gezielter Traffic' },
                  { key: 'besuche', label: 'Website-Besuche', val: '320', sub: 'Hohe Klick-zu-Besuch-Rate' },
                  { key: 'anfragen', label: 'Echte Anfragen', val: '28', sub: 'Formulare & Telefonate' },
                  { key: 'cvr', label: 'Conversion-Rate', val: '8,75 %', sub: 'Abschlussquote der Seite' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setTrackingMetric(item.key as any)}
                    className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                      trackingMetric === item.key
                        ? 'bg-[#57BBBD] text-[#122526] border-white shadow-lg'
                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold opacity-80">{item.label}</div>
                    <div className="font-['Lilita_One'] text-2xl my-1">{item.val}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>

              {/* Interactive SVG Chart for the Active Metric */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span className="font-bold text-[#57BBBD]">
                    Verlauf der gewählten Metrik ({trackingMetric.toUpperCase()}) über 4 Wochen:
                  </span>
                  <span className="text-slate-400 font-mono">Woche 1 → Woche 4</span>
                </div>

                <div className="h-28 w-full relative flex items-end justify-between border-b border-white/20 pb-2">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                    <defs>
                      <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF9F1C" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={
                        trackingMetric === 'klicks'
                          ? 'M 10 70 Q 130 50 260 30 T 390 15 L 390 100 L 10 100 Z'
                          : trackingMetric === 'besuche'
                          ? 'M 10 75 Q 130 55 260 35 T 390 20 L 390 100 L 10 100 Z'
                          : trackingMetric === 'anfragen'
                          ? 'M 10 85 Q 130 65 260 40 T 390 15 L 390 100 L 10 100 Z'
                          : 'M 10 65 Q 130 55 260 30 T 390 18 L 390 100 L 10 100 Z'
                      }
                      fill="url(#metricGrad)"
                    />
                    <path
                      d={
                        trackingMetric === 'klicks'
                          ? 'M 10 70 Q 130 50 260 30 T 390 15'
                          : trackingMetric === 'besuche'
                          ? 'M 10 75 Q 130 55 260 35 T 390 20'
                          : trackingMetric === 'anfragen'
                          ? 'M 10 85 Q 130 65 260 40 T 390 15'
                          : 'M 10 65 Q 130 55 260 30 T 390 18'
                      }
                      fill="none"
                      stroke="#FF9F1C"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] text-slate-400 pt-2 font-mono">
                  <span>Start (Woche 1)</span>
                  <span>Woche 2</span>
                  <span>Woche 3</span>
                  <span className="text-[#FF9F1C] font-bold">Aktuell (Woche 4)</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-400">
                *Zur Veranschaulichung möglicher Messwerte. Bell´s Revenue richtet saubere Conversion-Events (z.B. Formularsendungen & Anrufe) DSGVO-konform für Ihr Werbekonto ein.
              </div>

            </div>
          </div>

          {/* Section Footer */}
          <div className="pt-6 border-t border-[#122526]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Lilita_One'] text-lg sm:text-xl text-[#122526] text-center sm:text-left">
              Mehr Transparenz darüber, wohin Ihr Werbebudget fliesst und welche Ergebnisse messbar sind.
            </p>
            <button
              onClick={onCtaClick}
              className="btn-swoop-primary !text-base !py-3 !px-7 shadow-md shrink-0"
            >
              <span>Tracking kennenlernen</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SERVICE 5: CONTINUOUS OPTIMIZATION
          Background: LIGHT (#F8F8F8)
          Features: Interactive Optimization Loop (F)
          ========================================================================= */}
      <section id="service-optimization" className="py-20 lg:py-28 bg-[#F8F8F8] text-[#122526] border-t-2 border-slate-200/80 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Nicht nur starten. Kontinuierlich verbessern.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/85 font-['Montserrat'] font-medium leading-relaxed">
              Eine Kampagne ist kein einmaliges Projekt. Suchverhalten, Wettbewerb und Ergebnisse verändern sich – deshalb sollten verfügbare Daten regelmässig ausgewertet werden.
            </p>
            <HandDrawnUnderline color="#FF9F1C" className="w-44 h-3 mt-1" />
          </div>

          {/* INTERACTIVE EXPERIENCE F: Selectable Optimization Loop */}
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-4 font-['Montserrat']">
              Interaktiver Kreislauf: Wählen Sie eine Phase aus
            </div>

            {/* 4 Stage Selector Buttons (Lighter gray active background matching Section 2) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-['Montserrat']">
              {[
                { id: 'analysieren', num: '01', title: 'Analysieren', desc: 'Suchdaten & Klicks prüfen' },
                { id: 'anpassen', num: '02', title: 'Anpassen', desc: 'Texte & Keywords schärfen' },
                { id: 'messen', num: '03', title: 'Messen', desc: 'Wirkung auf Anfragen prüfen' },
                { id: 'verfeinern', num: '04', title: 'Verfeinern', desc: 'Gewinner-Kampagnen ausbauen' },
              ].map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setOptStage(stage.id as any)}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer border-2 ${
                    optStage === stage.id
                      ? 'bg-[#F1F3F5] text-gray-900 border-slate-400 shadow-sm -translate-y-0.5'
                      : 'bg-white/95 text-gray-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`text-xs font-bold ${optStage === stage.id ? 'text-gray-950 font-extrabold' : 'text-gray-800'} mb-0.5`}>
                    {stage.num}
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-gray-900">{stage.title}</div>
                  <div className="text-[11px] text-gray-500">{stage.desc}</div>
                </button>
              ))}
            </div>

            {/* Dynamic Stage Display Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border-2 border-slate-200/90 shadow-md font-['Montserrat']">
              {optStage === 'analysieren' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phase 01</span>
                    <h3 className="font-['Lilita_One'] text-2xl text-[#122526]">
                      Echte Nutzerdaten und Suchmuster auswerten
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Wir prüfen regelmäßig, welche Suchbegriffe von Interessenten tatsächlich eingetippt wurden und welche Anzeigen die höchste Aufmerksamkeit erzeugen.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F8F9FA] p-5 rounded-2xl border border-slate-200 text-xs">
                    <div className="font-bold text-gray-900 mb-1">Was wird analysiert?</div>
                    <ul className="space-y-1 text-gray-600 list-disc pl-4">
                      <li>Tatsächliche Google-Suchbegriffe</li>
                      <li>Klickraten der Anzeigentexte</li>
                      <li>Verweildauer auf der Landingpage</li>
                    </ul>
                  </div>
                </div>
              )}

              {optStage === 'anpassen' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phase 02</span>
                    <h3 className="font-['Lilita_One'] text-2xl text-[#122526]">
                      Gezielte Feinjustierung der Anzeigen & Seiten
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Auf Basis der Auswertung werden unpassende Klicks ausgeschlossen, Texte noch präziser formuliert und Buttons auf der Landingpage optimal positioniert.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F8F9FA] p-5 rounded-2xl border border-slate-200 text-xs">
                    <div className="font-bold text-gray-900 mb-1">Konkrete Maßnahmen:</div>
                    <ul className="space-y-1 text-gray-600 list-disc pl-4">
                      <li>Ausschluss von Streuverlust-Suchbegriffen</li>
                      <li>Verfeinern der regionalen Ansprache</li>
                      <li>Vereinfachen der Formular-Eingabe</li>
                    </ul>
                  </div>
                </div>
              )}

              {optStage === 'messen' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phase 03</span>
                    <h3 className="font-['Lilita_One'] text-2xl text-[#122526]">
                      Auswirkung auf Anfragen und Kosten kontrollieren
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Jede Anpassung wird gemessen: Führt die Änderung zu mehr qualifizierten Kontakten? Sinken die Kosten je eingegangener Anfrage?
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F8F9FA] p-5 rounded-2xl border border-slate-200 text-xs">
                    <div className="font-bold text-gray-900 mb-1">Messbare Kontrollpunkte:</div>
                    <ul className="space-y-1 text-gray-600 list-disc pl-4">
                      <li>Anzahl eingegangener Formulare</li>
                      <li>Kosten pro qualifizierter Anfrage</li>
                      <li>Rückmeldung des Betriebs zur Lead-Qualität</li>
                    </ul>
                  </div>
                </div>
              )}

              {optStage === 'verfeinern' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phase 04</span>
                    <h3 className="font-['Lilita_One'] text-2xl text-[#122526]">
                      Erkenntnisse sichern und Budget gezielt skalieren
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Was nachweislich funktioniert, wird ausgebaut. Das Werbebudget wird dorthin gelenkt, wo die meisten und besten Kundenanfragen entstehen.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-[#F8F9FA] p-5 rounded-2xl border border-slate-200 text-xs">
                    <div className="font-bold text-gray-900 mb-1">Der Skalierungseffekt:</div>
                    <p className="text-gray-600">
                      Kampagnen werden mit jedem Monat zielgerichteter und wirtschaftlicher für Ihr Unternehmen.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Section Footer */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['Lilita_One'] text-lg sm:text-xl text-[#122526] text-center sm:text-left">
              Fundierte Entscheidungen statt blinder Vermutungen.
            </p>
            <button
              onClick={onCtaClick}
              className="btn-swoop-primary !text-base !py-3 !px-7 shadow-md shrink-0"
            >
              <span>Optimierung besprechen</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW THE SERVICES WORK TOGETHER
          Background: BLUE (#57BBBD)
          Features: Connected Visual Ecosystem with Feedback Loop
          ========================================================================= */}
      <section id="services-interplay" className="py-20 lg:py-28 bg-[#57BBBD] text-[#122526] border-t-2 border-[#122526]/10 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
              Ein durchdachter Weg vom Klick zur Anfrage.
            </h2>
            
            <p className="text-base sm:text-lg text-[#122526]/90 font-['Montserrat'] font-medium">
              Alle fünf Bausteine greifen ineinander, um Interessenten systematisch von der ersten Google-Suche bis zur qualifizierten Kontaktaufnahme zu begleiten.
            </p>
          </div>

          {/* Connected System Architecture with Feedback Loop */}
          <div className="rounded-[36px] p-6 sm:p-10 bg-white border-4 border-white shadow-2xl mb-12 relative overflow-hidden">
            
            <div className="text-xs font-bold uppercase tracking-wider text-[#1F6B6F] mb-6 text-center font-['Montserrat']">
              5 Module – 1 geschlossener Wachstumskreislauf
            </div>

            {/* Linear Steps 1 to 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-['Montserrat'] mb-8">
              
              <div className="p-4 rounded-2xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#57BBBD] uppercase mb-1">Schritt 1</div>
                  <div className="w-10 h-10 rounded-xl bg-[#57BBBD]/25 text-[#1F6B6F] flex items-center justify-center mx-auto mb-2 text-lg">
                    🔍
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-[#122526] mb-1">Google Ads</div>
                  <p className="text-[11px] text-slate-600 leading-snug">Bringt relevante Besucher mit echter Kaufabsicht.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#FF9F1C] uppercase mb-1">Schritt 2</div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF9F1C]/25 text-[#122526] flex items-center justify-center mx-auto mb-2 text-lg">
                    🖥️
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-[#122526] mb-1">Landingpage</div>
                  <p className="text-[11px] text-slate-600 leading-snug">Erklärt das Angebot & motiviert zur schnellen Anfrage.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#43A4AA] uppercase mb-1">Schritt 3</div>
                  <div className="w-10 h-10 rounded-xl bg-[#57BBBD]/25 text-[#1F6B6F] flex items-center justify-center mx-auto mb-2 text-lg">
                    📊
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-[#122526] mb-1">Tracking</div>
                  <p className="text-[11px] text-slate-600 leading-snug">Misst vereinbarte Aktionen & liefert exakte Daten.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#122526] uppercase mb-1">Schritt 4</div>
                  <div className="w-10 h-10 rounded-xl bg-[#122526] text-white flex items-center justify-center mx-auto mb-2 text-lg">
                    💬
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-[#122526] mb-1">Automation</div>
                  <p className="text-[11px] text-slate-600 leading-snug">Organisiert & strukturiert eingehende Kundenanfragen.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#FF9F1C] uppercase mb-1">Schritt 5</div>
                  <div className="w-10 h-10 rounded-xl bg-[#57BBBD]/25 text-[#1F6B6F] flex items-center justify-center mx-auto mb-2 text-lg">
                    ⚙️
                  </div>
                  <div className="font-['Lilita_One'] text-lg text-[#122526] mb-1">Optimierung</div>
                  <p className="text-[11px] text-slate-600 leading-snug">Nutzt Messdaten zur stetigen Verfeinerung des Systems.</p>
                </div>
              </div>

            </div>

            {/* VISUAL FEEDBACK LOOP ARCHITECTURE */}
            <div className="p-5 rounded-2xl bg-[#EEF8F8] border-2 border-[#57BBBD] flex flex-col sm:flex-row items-center justify-between gap-4 font-['Montserrat']">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#57BBBD] flex items-center justify-center text-[#122526] shrink-0 shadow-sm">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F6B6F] uppercase tracking-wider flex items-center gap-2">
                    <span>Kontinuierlicher Feedback-Loop</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Jede neue Anfrage macht das Gesamtsystem schlauer: Erkenntnisse aus Messung & Vorqualifizierung fließen direkt zurück in schärfere Google-Anzeigen und höhere Landingpage-Abschlussquoten.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#122526] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shrink-0 shadow-xs">
                Stetiger Lerneffekt ↺
              </span>
            </div>

          </div>

          {/* Modular Flexibility Callout */}
          <div className="p-5 rounded-2xl bg-white/95 border-2 border-white text-center max-w-2xl mx-auto shadow-md">
            <p className="text-xs sm:text-sm text-[#122526] font-['Montserrat'] font-medium leading-relaxed">
              <strong>Maximale Flexibilität:</strong> Sie können einzelne Bausteine gezielt buchen oder das Gesamtsystem als durchdachtes Komplettpaket nutzen.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
