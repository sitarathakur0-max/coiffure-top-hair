import React from 'react';
import { Phone, MapPin, Clock, Scissors, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif font-bold text-lg border border-amber-800">
                TH
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                Coiffure Top Hair
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {currentLang === 'de'
                ? 'Ihr sympathischer Damen- und Herrencoiffeur in Wünnewil. Fachkompetenz, individuelle Schnittkreationen und ehrliche Beratung für die ganze Familie.'
                : currentLang === 'fr'
                ? 'Votre salon de coiffure dames et messieurs à Wünnewil. Savoir-faire, créativité et écoute attentive pour toute la famille.'
                : 'Your friendly women’s and men’s hair salon in Wünnewil. Professional craftsmanship, tailored styling, and warm service.'}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-950/60 px-3 py-1 rounded-lg border border-amber-900/50">
                <Scissors className="w-3.5 h-3.5" />
                <span>{SALON_INFO.tagline[currentLang]}</span>
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              {currentLang === 'de' ? 'Kontakt & Anfahrt' : currentLang === 'fr' ? 'Contact & Accès' : 'Contact & Address'}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{SALON_INFO.name}</div>
                  <div>{SALON_INFO.address.street}</div>
                  <div>{SALON_INFO.address.postalCode} {SALON_INFO.address.city}</div>
                  <div className="text-[11px] text-stone-400">Kanton Freiburg / Sense</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phone.raw}`}
                  className="hover:text-amber-300 font-semibold text-white transition-colors"
                >
                  {SALON_INFO.phone.display}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              {currentLang === 'de' ? 'Öffnungszeiten' : currentLang === 'fr' ? 'Horaires' : 'Hours'}
            </h4>
            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Di – Fr:</span>
                <span className="text-stone-200">08:30–12:00 | 13:30–18:30</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span className="text-stone-200">08:00–15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mo & So:</span>
                <span className="text-stone-400">Geschlossen / Ruhetag</span>
              </div>
              <div className="pt-2 text-[11px] text-amber-300/80">
                {currentLang === 'de'
                  ? 'Termine nach telefonischer Vereinbarung empfohlen.'
                  : currentLang === 'fr'
                  ? 'Rendez-vous par téléphone recommandé.'
                  : 'Appointments by phone recommended.'}
              </div>
            </div>
          </div>

          {/* Language & Actions */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              {currentLang === 'de' ? 'Sprache & Service' : currentLang === 'fr' ? 'Langue & Réservation' : 'Language & Service'}
            </h4>

            <div className="flex items-center gap-2">
              {(['de', 'fr', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase transition-colors cursor-pointer ${
                    currentLang === lang
                      ? 'bg-amber-800 text-white'
                      : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-800 hover:bg-amber-700 text-white text-xs font-semibold transition-colors text-center cursor-pointer shadow-xs"
              >
                {currentLang === 'de' ? 'Terminanfrage senden' : currentLang === 'fr' ? 'Demander un rendez-vous' : 'Request Appointment'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {SALON_INFO.name} • {SALON_INFO.address.fullFormatted}.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Damen- und Herrencoiffeur Wünnewil (FR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
