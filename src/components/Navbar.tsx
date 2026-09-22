import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, Sparkles } from 'lucide-react';
import { SALON_INFO, getSalonStatus } from '../data/salonData';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getSalonStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Refresh status every 2 minutes
    const interval = setInterval(() => {
      setStatus(getSalonStatus());
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  const navLabels = {
    services: { de: 'Dienstleistungen & Preise', fr: 'Prestations & Tarifs', en: 'Services & Prices' },
    about: { de: 'Über uns', fr: 'Le Salon', en: 'About' },
    hours: { de: 'Öffnungszeiten', fr: 'Horaires', en: 'Hours' },
    contact: { de: 'Anfahrt & Kontakt', fr: 'Accès & Contact', en: 'Contact & Map' },
    bookBtn: { de: 'Termin anfragen', fr: 'Prendre rendez-vous', en: 'Request appointment' },
  };

  return (
    <>
      {/* Top Notification / Urgency Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <span className="font-medium text-white">{status.isOpen ? (currentLang === 'de' ? 'Jetzt geöffnet' : currentLang === 'fr' ? 'Actuellement ouvert' : 'Open now') : (currentLang === 'de' ? 'Derzeit geschlossen' : currentLang === 'fr' ? 'Fermé actuellement' : 'Currently closed')}</span>
            <span className="text-stone-400 hidden sm:inline">•</span>
            <span className="text-stone-400 hidden sm:inline">{status.text[currentLang]}</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <a
              href={`tel:${SALON_INFO.phone.raw}`}
              id="topbar-call-link"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SALON_INFO.phone.display}</span>
            </a>
            <div className="flex items-center gap-1 border-l border-stone-700 pl-3">
              {(['de', 'fr', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  id={`lang-btn-${lang}`}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors uppercase ${
                    currentLang === lang
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-stone-50 border-b border-stone-200/50 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-100 flex items-center justify-center font-serif font-bold text-xl shadow-inner border border-amber-800/40 group-hover:scale-105 transition-transform">
              TH
            </div>
            <div>
              <div className="text-xl font-serif font-bold tracking-tight text-stone-900 leading-tight">
                Coiffure Top Hair
              </div>
              <div className="text-xs text-stone-700 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-amber-700" />
                <span>Wünnewil • Sensebezirk</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a href="#services" className="hover:text-amber-800 transition-colors">
              {navLabels.services[currentLang]}
            </a>
            <a href="#about" className="hover:text-amber-800 transition-colors">
              {navLabels.about[currentLang]}
            </a>
            <a href="#hours" className="hover:text-amber-800 transition-colors">
              {navLabels.hours[currentLang]}
            </a>
            <a href="#location" className="hover:text-amber-800 transition-colors">
              {navLabels.contact[currentLang]}
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone.raw}`}
              id="header-phone-button"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300 transition-all hover:border-stone-400"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{SALON_INFO.phone.display}</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="header-booking-button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-all hover:shadow cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>{navLabels.bookBtn[currentLang]}</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SALON_INFO.phone.raw}`}
              className="p-2 text-stone-800 bg-stone-200 rounded-lg sm:hidden"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-amber-800" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Open menu"
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:bg-stone-100"
              >
                {navLabels.services[currentLang]}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:bg-stone-100"
              >
                {navLabels.about[currentLang]}
              </a>
              <a
                href="#hours"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:bg-stone-100"
              >
                {navLabels.hours[currentLang]}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:bg-stone-100"
              >
                {navLabels.contact[currentLang]}
              </a>
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-2">
              <a
                href={`tel:${SALON_INFO.phone.raw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-stone-100 text-stone-900 font-semibold rounded-lg border border-stone-300"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>{SALON_INFO.phone.display}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-amber-800 text-white font-semibold rounded-lg shadow"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>{navLabels.bookBtn[currentLang]}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
