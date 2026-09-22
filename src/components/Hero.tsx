import React from 'react';
import { Phone, Calendar, MapPin, Clock, CheckCircle2, Navigation, Sparkles } from 'lucide-react';
import { SALON_INFO, getSalonStatus } from '../data/salonData';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const status = getSalonStatus();

  const heroContent = {
    badge: {
      de: 'Damen- & Herrencoiffeur in Wünnewil (FR)',
      fr: 'Coiffure mixte dames & messieurs à Wünnewil',
      en: 'Hair salon for women & men in Wünnewil',
    },
    title: {
      de: 'Ihr Friseur für zeitlose Eleganz und individuelle Schnitte',
      fr: 'Votre salon pour des coupes soignées et un style sur-mesure',
      en: 'Precision cuts and tailored styling for your unique look',
    },
    subtitle: {
      de: 'An der Felsenegg 3 in Wünnewil erwartet Sie eine entspannte Wohlfühlatmosphäre, persönliche Fachberatung und erstklassiges Handwerk für Damen, Herren und Kinder.',
      fr: 'À Felsenegg 3 à Wünnewil, découvrez une atmosphère chaleureuse, des conseils personnalisés et un savoir-faire dédié aux dames, messieurs et enfants.',
      en: 'Located at Felsenegg 3 in Wünnewil, enjoy a warm and welcoming atmosphere, dedicated styling advice, and precision hair artistry.',
    },
    callCta: {
      de: 'Jetzt anrufen: 026 534 10 17',
      fr: 'Appeler: 026 534 10 17',
      en: 'Call now: 026 534 10 17',
    },
    bookCta: {
      de: 'Termin online anfragen',
      fr: 'Demander un rendez-vous',
      en: 'Request appointment',
    },
    mapCta: {
      de: 'Route in Maps öffnen',
      fr: 'Ouvrir l’itinéraire',
      en: 'Open directions',
    },
    quickFeatures: [
      {
        de: 'Damen & Herren',
        fr: 'Dames & Messieurs',
        en: 'Women & Men',
      },
      {
        de: 'Gratis Parkplätze vor Ort',
        fr: 'Places gratuites sur place',
        en: 'Free parking on site',
      },
      {
        de: '4 Min. ab Bahnhof Wünnewil',
        fr: '4 min gare de Wünnewil',
        en: '4 min from train station',
      },
      {
        de: 'TWINT & Kartenzahlung',
        fr: 'Paiement TWINT & Cartes',
        en: 'TWINT & Cards accepted',
      },
    ],
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80 bg-linear-to-b from-stone-100/60 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Messaging & Primary CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status & Category pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                <span>{heroContent.badge[currentLang]}</span>
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                status.isOpen ? 'bg-emerald-100/80 text-emerald-800 border border-emerald-300' : 'bg-stone-200 text-stone-700 border border-stone-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'}`}></span>
                <span>{status.isOpen ? (currentLang === 'de' ? 'Offen' : currentLang === 'fr' ? 'Ouvert' : 'Open') : (currentLang === 'de' ? 'Geschlossen' : currentLang === 'fr' ? 'Fermé' : 'Closed')}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
                {heroContent.title[currentLang]}
              </h1>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl">
                {heroContent.subtitle[currentLang]}
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${SALON_INFO.phone.raw}`}
                id="hero-phone-cta"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-semibold text-base shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>{heroContent.callCta[currentLang]}</span>
              </a>

              <button
                onClick={onOpenBooking}
                id="hero-booking-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-semibold text-base border border-stone-300 shadow-xs transition-all hover:border-stone-400 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-amber-800" />
                <span>{heroContent.bookCta[currentLang]}</span>
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-stone-200">
              {heroContent.quickFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{feat[currentLang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase & Address Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300/80 bg-stone-900 aspect-16/11 group">
              <img
                src="/src/assets/images/top_hair_salon_1789899862136.jpg"
                alt="Coiffure Top Hair Salon Interior Wünnewil"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/30 to-transparent"></div>

              {/* Floating Address and Quick Map Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700/80 text-white shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                      Coiffure Top Hair
                    </div>
                    <div className="text-sm font-semibold text-stone-100 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{SALON_INFO.address.fullFormatted}</span>
                    </div>
                    <div className="text-xs text-stone-300">
                      3184 Wünnewil (Sensebezirk, FR)
                    </div>
                  </div>

                  <a
                    href={SALON_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-white shrink-0 transition-colors shadow-sm"
                    title={heroContent.mapCta[currentLang]}
                    aria-label="Route in Google Maps"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border border-stone-300 rounded-xl px-3.5 py-2 shadow-sm text-left items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-800" />
              <div>
                <div className="text-[11px] text-stone-500 font-medium">
                  {currentLang === 'de' ? 'Di – Sa geöffnet' : currentLang === 'fr' ? 'Ouvert mar – sam' : 'Open Tue – Sat'}
                </div>
                <div className="text-xs font-bold text-stone-900">
                  {currentLang === 'de' ? 'Termine nach Vereinbarung' : currentLang === 'fr' ? 'Sur rendez-vous' : 'By appointment'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
