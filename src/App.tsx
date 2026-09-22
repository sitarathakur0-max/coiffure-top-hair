import React, { useState } from 'react';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ReviewsFaqSection } from './components/ReviewsFaqSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Language } from './types';
import { SALON_INFO } from './data/salonData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Sticky Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        <ServicesSection
          currentLang={currentLang}
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenBookingModal={handleOpenBooking}
        />

        <AtmosphereSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        <LocationHoursSection
          currentLang={currentLang}
        />

        <ReviewsFaqSection
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
        currentLang={currentLang}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewers */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 z-30 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SALON_INFO.phone.raw}`}
          id="floating-mobile-call"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-900 text-white font-semibold text-xs rounded-xl shadow-sm"
        >
          <Phone className="w-4 h-4 text-amber-300" />
          <span>{SALON_INFO.phone.display}</span>
        </a>

        <button
          onClick={handleOpenBooking}
          id="floating-mobile-book"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-800 text-white font-semibold text-xs rounded-xl shadow-sm"
        >
          <Calendar className="w-4 h-4 text-amber-200" />
          <span>{currentLang === 'de' ? 'Termin anfragen' : currentLang === 'fr' ? 'Rendez-vous' : 'Book'}</span>
        </button>
      </div>
    </div>
  );
}
