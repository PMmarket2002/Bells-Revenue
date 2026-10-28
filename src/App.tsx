import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { DetailedServices } from './components/DetailedServices';
import { Packages } from './components/Packages';
import { HowItWorks } from './components/HowItWorks';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<
    'BASIC' | 'ADVANCED' | 'PREMIUM' | 'Allgemeine Anfrage'
  >('ADVANCED');
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: 'BASIC' | 'ADVANCED' | 'PREMIUM') => {
    setSelectedPackage(pkg);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8] text-[#122526]">
      {/* Top Header: Wordmark on left, single small CTA on right, NO nav menu */}
      <Header onCtaClick={scrollToContact} />

      <main className="flex-1">
        {/* Section 1: Hero (BLUE: #57BBBD) */}
        <Hero onPrimaryCtaClick={scrollToContact} />

        {/* Section 2: Services & Who We Help (LIGHT: #FFFFFF) */}
        <ServicesOverview />

        {/* Detailed Service Sections & Interplay Journey */}
        <DetailedServices onCtaClick={scrollToContact} />

        {/* Section 3: Packages - BASIC, ADVANCED, PREMIUM (BLUE: #122526) */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Section 4: How It Works - 3 short steps (LIGHT: #F8F8F8) */}
        <HowItWorks />

        {/* Section 5: Contact - Simple Lead Form (BLUE: #57BBBD) */}
        <ContactForm
          selectedPackage={selectedPackage}
          onPrivacyClick={() => setLegalModalType('datenschutz')}
        />
      </main>

      {/* Section 6: Footer (DARK: #122526) */}
      <Footer
        onOpenImpressum={() => setLegalModalType('impressum')}
        onOpenDatenschutz={() => setLegalModalType('datenschutz')}
      />

      {/* Modals for Impressum & Datenschutz */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
