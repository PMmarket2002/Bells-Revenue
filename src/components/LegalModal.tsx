import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-[28px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border-2 border-[#57BBBD]/30"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'impressum' ? (
          <div className="space-y-5 text-sm font-['Montserrat'] text-[#122526]">
            <h3 className="font-['Lilita_One'] text-3xl text-[#122526]">
              Impressum
            </h3>
            
            <div className="p-4 rounded-xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-xs text-[#1F6B6F]">
              <strong>Hinweis:</strong> Gesetzliche Pflichtangaben gemäß § 5 ECG und Offenlegung nach § 25 Mediengesetz. Die mit eckigen Klammern markierten Angaben sind Platzhalter für die endgültigen Unternehmensdaten.
            </div>

            <div className="space-y-3">
              <p>
                <strong>Diensteanbieter / Medieninhaber:</strong><br />
                Bell´s Revenue<br />
                [Vollständiger rechtlicher Firmenname oder Name des Inhabers]<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort, z.B. Graz, Österreich]
              </p>

              <p>
                <strong>Kontakt:</strong><br />
                E-Mail: pascal@bellsrevenue.com<br />
                Telefon: [Telefonnummer für geschäftliche Anfragen]
              </p>

              <p>
                <strong>Unternehmensgegenstand:</strong><br />
                Agenturdienstleistungen in den Bereichen digitales Marketing, Suchmaschinenwerbung, Erstellung von Landingpages und Unterstützung bei der vorqualifizierenden Kundenkommunikation für Handwerks- und Installationsbetriebe.
              </p>

              <p>
                <strong>Kammerzugehörigkeit & Aufsichtsbehörde:</strong><br />
                Wirtschaftskammer Österreich (WKO / Fachgruppe Werbung und Marktkommunikation)<br />
                Gewerbebehörde: [Zuständige Bezirkshauptmannschaft bzw. Magistrat in Österreich]
              </p>

              <p>
                <strong>UID-Nummer:</strong><br />
                [UID-Nummer, falls vorhanden / vergeben]
              </p>

              <p className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                EU-Streitschlichtung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: https://ec.europa.eu/odr.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-5 text-sm font-['Montserrat'] text-[#122526]">
            <h3 className="font-['Lilita_One'] text-3xl text-[#122526]">
              Datenschutzerklärung
            </h3>

            <div className="p-4 rounded-xl bg-[#EEF8F8] border border-[#57BBBD]/30 text-xs text-[#1F6B6F]">
              <strong>Hinweis:</strong> Diese Datenschutzerklärung klärt über die Erhebung und Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO und österreichischem TKG auf.
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-[#122526] text-base">1. Verantwortliche Stelle</h4>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist Bell´s Revenue ([Inhaber/Betreiber], E-Mail: pascal@bellsrevenue.com).
              </p>

              <h4 className="font-bold text-[#122526] text-base">2. Kontaktaufnahme über das Formular</h4>
              <p>
                Wenn Sie per Kontaktformular oder E-Mail mit uns Kontakt aufnehmen, werden Ihre angegebenen Daten (Name, Unternehmen, E-Mail-Adresse, optionale Website und Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h4 className="font-bold text-[#122526] text-base">3. Zweck und Rechtsgrundlage</h4>
              <p>
                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Erfüllung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten und professionellen Kommunikation).
              </p>

              <h4 className="font-bold text-[#122526] text-base">4. Ihre Rechte</h4>
              <p>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich an die Datenschutzbehörde in Österreich (dsb.gv.at) wenden.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="btn-swoop-outline !text-sm !py-2 !px-6"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
