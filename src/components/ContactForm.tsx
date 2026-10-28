import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Info } from 'lucide-react';

interface ContactFormProps {
  selectedPackage: 'BASIC' | 'ADVANCED' | 'PREMIUM' | 'Allgemeine Anfrage';
  onPrivacyClick: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedPackage,
  onPrivacyClick,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    interest: selectedPackage,
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, interest: selectedPackage }));
  }, [selectedPackage]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Bitte Namen angeben.';
    if (!formData.company.trim()) errs.company = 'Bitte Unternehmen angeben.';
    if (!formData.email.trim()) {
      errs.email = 'Bitte E-Mail angeben.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ungültige E-Mail-Adresse.';
    }
    if (!formData.privacyAccepted) {
      errs.privacyAccepted = 'Bitte Datenschutz zustimmen.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#57BBBD] text-[#122526] relative overflow-hidden border-t-4 border-[#122526]/10">
      {/* Decorative Swoop elements */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/20 blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#122526]/10 blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Lilita_One'] text-[#122526] mb-3">
            Lassen Sie uns starten.
          </h2>
          <p className="text-base sm:text-lg text-[#122526]/90 font-['Montserrat']">
            Unverbindlich prüfen, wie viele qualifizierte Anfragen in Ihrer Region möglich sind.
          </p>
        </div>

        {/* Form Card (Crisp White for contrast and readability) */}
        <div className="bg-white rounded-[36px] p-6 sm:p-10 shadow-2xl border-2 border-white">
          
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#57BBBD]/20 text-[#1F6B6F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#43A4AA]" />
              </div>
              <h3 className="font-['Lilita_One'] text-2xl text-[#122526] mb-2">
                Anfrage erfolgreich gesendet!
              </h3>
              <p className="text-sm text-[#122526]/85 font-['Montserrat'] mb-6 max-w-sm mx-auto">
                Vielen Dank, {formData.name}. Wir melden uns kurzfristig bei Ihnen.
              </p>

              <div className="p-3.5 rounded-xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-xs text-[#1F6B6F] text-left mb-6">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Hinweis zur Live-Anbindung:</span>
                </div>
                <p>
                  Vorschau-Modus aktiv. Zur Inbetriebnahme wird dieses Formular direkt an Ihren E-Mail-Dienst oder CRM gekoppelt.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    website: '',
                    interest: 'ADVANCED',
                    message: '',
                    privacyAccepted: false,
                  });
                }}
                className="btn-swoop-outline !text-xs !py-2 !px-5"
              >
                Weitere Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                    Name <span className="text-[#FF9F1C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border ${
                      errors.name ? 'border-[#FF9F1C]' : 'border-slate-200 focus:border-[#57BBBD]'
                    } text-sm text-[#122526] outline-none transition-all`}
                  />
                  {errors.name && <p className="text-xs text-[#FF9F1C] font-semibold mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                    Unternehmen <span className="text-[#FF9F1C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Firmenname"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border ${
                      errors.company ? 'border-[#FF9F1C]' : 'border-slate-200 focus:border-[#57BBBD]'
                    } text-sm text-[#122526] outline-none transition-all`}
                  />
                  {errors.company && <p className="text-xs text-[#FF9F1C] font-semibold mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                    E-Mail-Adresse <span className="text-[#FF9F1C]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@unternehmen.de"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border ${
                      errors.email ? 'border-[#FF9F1C]' : 'border-slate-200 focus:border-[#57BBBD]'
                    } text-sm text-[#122526] outline-none transition-all`}
                  />
                  {errors.email && <p className="text-xs text-[#FF9F1C] font-semibold mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                    Website <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="www.unternehmen.de"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F8F8] border border-slate-200 focus:border-[#57BBBD] text-sm text-[#122526] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Package selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                  Gewünschtes Paket
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['BASIC', 'ADVANCED', 'PREMIUM', 'Allgemeine Anfrage'] as const).map((pkg) => (
                    <button
                      key={pkg}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: pkg })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all text-center ${
                        formData.interest === pkg
                          ? 'bg-[#122526] text-white'
                          : 'bg-[#F8F8F8] text-slate-700 hover:border-[#57BBBD]'
                      }`}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Short message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#122526] mb-1.5 font-['Montserrat']">
                  Kurze Nachricht <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ihr Anliegen in wenigen Worten..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F8F8] border border-slate-200 focus:border-[#57BBBD] text-sm text-[#122526] outline-none resize-none transition-all"
                />
              </div>

              {/* Privacy checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#FF9F1C] border-slate-300 focus:ring-[#FF9F1C]"
                  />
                  <span className="text-xs text-slate-600 font-['Montserrat'] leading-relaxed">
                    Ich stimme der Datenverarbeitung gemäß{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onPrivacyClick();
                      }}
                      className="text-[#43A4AA] underline hover:text-[#122526]"
                    >
                      Datenschutzerklärung
                    </button>{' '}
                    zu.
                  </span>
                </label>
                {errors.privacyAccepted && (
                  <p className="text-xs text-[#FF9F1C] font-semibold mt-1">{errors.privacyAccepted}</p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-swoop-primary w-full !text-base !py-3 shadow-lg"
              >
                {isSubmitting ? 'Wird übermittelt...' : 'Anfrage senden'}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
