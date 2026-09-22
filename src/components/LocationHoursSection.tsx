import React from 'react';
import { MapPin, Phone, Clock, Car, Train, Navigation, CheckCircle, ExternalLink } from 'lucide-react';
import { SALON_INFO, OPENING_HOURS, getSalonStatus } from '../data/salonData';
import { Language } from '../types';

interface LocationHoursSectionProps {
  currentLang: Language;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ currentLang }) => {
  const currentDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
  const status = getSalonStatus();

  const labels = {
    tag: { de: 'Anfahrt & Öffnungszeiten', fr: 'Accès & Horaires', en: 'Location & Hours' },
    title: {
      de: 'So finden Sie zu Coiffure Top Hair',
      fr: 'Comment vous rendre au salon',
      en: 'How to visit Coiffure Top Hair',
    },
    subtitle: {
      de: 'Zentral und ruhig gelegen an der Felsenegg 3 in Wünnewil – mit bequemen Parkmöglichkeiten und bester Anbindung an den öffentlichen Verkehr.',
      fr: 'Situé au calme à Felsenegg 3 à Wünnewil – accès aisé avec places de stationnement et proximité de la gare.',
      en: 'Located conveniently at Felsenegg 3 in Wünnewil – with easy parking and direct public transport connections.',
    },
    hoursCardTitle: { de: 'Öffnungszeiten', fr: 'Horaires d’ouverture', en: 'Opening Hours' },
    todayBadge: { de: 'Heute', fr: 'Aujourd’hui', en: 'Today' },
    closed: { de: 'Geschlossen', fr: 'Fermé', en: 'Closed' },
    byAppointment: {
      de: 'Termine nach telefonischer Voranmeldung',
      fr: 'Rendez-vous sur réservation préalable',
      en: 'Appointments upon prior booking',
    },
    addressCardTitle: { de: 'Adresse & Kontakt', fr: 'Adresse & Contact', en: 'Address & Contact' },
    parkingTitle: { de: 'Parkplätze', fr: 'Parking gratuit', en: 'Free Parking' },
    parkingDesc: {
      de: 'Kostenlose Kundenparkplätze befinden sich direkt vor dem Gebäude an der Felsenegg 3.',
      fr: 'Des places de parc gratuites pour nos clients sont situées juste devant le bâtiment.',
      en: 'Free customer parking is available right in front of the building.',
    },
    transitTitle: { de: 'Öffentlicher Verkehr (ÖV)', fr: 'Transports publics', en: 'Public Transit' },
    transitDesc: {
      de: 'Nur 4 Gehminuten vom Bahnhof Wünnewil (S-Bahn Linie S1 Bern – Fribourg).',
      fr: 'À seulement 4 minutes à pied de la gare de Wünnewil (Ligne RER S1 Berne – Fribourg).',
      en: 'Only a 4-minute walk from Wünnewil train station (S1 line Bern – Fribourg).',
    },
    openMapsBtn: { de: 'In Google Maps öffnen', fr: 'Ouvrir dans Google Maps', en: 'Open in Google Maps' },
    callBtn: { de: 'Telefonisch anrufen: 026 534 10 17', fr: 'Téléphone: 026 534 10 17', en: 'Call: 026 534 10 17' },
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            <span>{labels.tag[currentLang]}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {labels.title[currentLang]}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            {labels.subtitle[currentLang]}
          </p>
        </div>

        {/* Content Columns: Opening Hours + Address & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Opening Hours Table */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-800" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  {labels.hoursCardTitle[currentLang]}
                </h3>
              </div>

              {/* Status Pill */}
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                  status.isOpen
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-200 text-stone-700'
                }`}
              >
                {status.isOpen
                  ? currentLang === 'de'
                    ? 'Jetzt geöffnet'
                    : currentLang === 'fr'
                    ? 'Ouvert'
                    : 'Open'
                  : currentLang === 'de'
                  ? 'Geschlossen'
                  : currentLang === 'fr'
                  ? 'Fermé'
                  : 'Closed'}
              </span>
            </div>

            {/* Daily Hours List */}
            <div className="space-y-2.5">
              {OPENING_HOURS.map((oh) => {
                const isToday = oh.dayIndex === currentDayIndex;
                return (
                  <div
                    key={oh.dayIndex}
                    className={`flex items-center justify-between text-sm py-2 px-3 rounded-xl transition-colors ${
                      isToday
                        ? 'bg-amber-100/70 border border-amber-300/80 font-medium text-stone-900'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={isToday ? 'font-bold text-stone-950' : 'font-medium'}>
                        {oh.dayName[currentLang]}
                      </span>
                      {isToday && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-800 text-white">
                          {labels.todayBadge[currentLang]}
                        </span>
                      )}
                    </div>

                    <div className={`text-right text-xs sm:text-sm ${oh.isClosed ? 'text-stone-400 font-normal' : 'text-stone-800 font-semibold'}`}>
                      {oh.hours}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-stone-200 text-xs text-stone-600 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-800 shrink-0" />
              <span>{labels.byAppointment[currentLang]}</span>
            </div>
          </div>

          {/* Right Column: Address, Directions, Map and Call CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-stone-900 mb-1">
                    {SALON_INFO.name}
                  </h3>
                  <p className="text-stone-700 font-medium text-base flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{SALON_INFO.address.fullFormatted}</span>
                  </p>
                  <p className="text-xs text-stone-500 pl-5.5">
                    Kanton Freiburg (Sensebezirk) • Region Bern / Fribourg
                  </p>
                </div>

                <a
                  href={`tel:${SALON_INFO.phone.raw}`}
                  id="location-phone-btn"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-sm font-semibold transition-colors shrink-0 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{SALON_INFO.phone.display}</span>
                </a>
              </div>

              {/* Transit & Parking Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                    <Car className="w-4 h-4 text-amber-800" />
                    <span>{labels.parkingTitle[currentLang]}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {labels.parkingDesc[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                    <Train className="w-4 h-4 text-amber-800" />
                    <span>{labels.transitTitle[currentLang]}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {labels.transitDesc[currentLang]}
                  </p>
                </div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-200 h-56 group">
                {/* Clean stylized map representation */}
                <div className="absolute inset-0 bg-stone-100 flex flex-col justify-between p-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-xs">
                      <span className="font-bold text-stone-900">Coiffure Top Hair</span>
                      <span className="text-stone-500 block text-[11px]">Felsenegg 3, 3184 Wünnewil</span>
                    </div>

                    <a
                      href={SALON_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{labels.openMapsBtn[currentLang]}</span>
                    </a>
                  </div>

                  {/* Pin illustration */}
                  <div className="self-center flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-900 text-white flex items-center justify-center shadow-lg ring-4 ring-amber-300/40 animate-bounce">
                      <MapPin className="w-5 h-5 text-amber-200" />
                    </div>
                    <div className="w-8 h-2 bg-stone-400/40 rounded-full blur-[2px] mt-1"></div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-stone-600 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-stone-200">
                    <span>Bahnhof Wünnewil: ca. 350 m</span>
                    <span>Autobahn A12 (Ausfahrt Flamatt): ca. 4 km</span>
                  </div>
                </div>
              </div>

              {/* Mobile Call CTA */}
              <div className="sm:hidden pt-2">
                <a
                  href={`tel:${SALON_INFO.phone.raw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-amber-900 text-white font-semibold rounded-xl text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{labels.callBtn[currentLang]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
