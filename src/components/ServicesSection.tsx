import React, { useState } from 'react';
import { Scissors, Sparkles, Clock, Check, Plus, Calendar, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';
import { Language, ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenBookingModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectServiceForBooking,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [basket, setBasket] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: { de: 'Alle Angebote', fr: 'Toutes les prestations', en: 'All Services' } },
    { id: 'women', label: { de: 'Damen', fr: 'Dames', en: 'Women' } },
    { id: 'men', label: { de: 'Herren & Bart', fr: 'Messieurs & Barbe', en: 'Men & Beard' } },
    { id: 'color', label: { de: 'Farbe & Mèches', fr: 'Couleurs & Mèches', en: 'Color & Highlights' } },
    { id: 'care', label: { de: 'Pflege & Kinder', fr: 'Soins & Enfants', en: 'Care & Kids' } },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const toggleBasket = (serviceTitle: string) => {
    if (basket.includes(serviceTitle)) {
      setBasket(basket.filter((t) => t !== serviceTitle));
    } else {
      setBasket([...basket, serviceTitle]);
    }
  };

  const handleBookSingleService = (service: ServiceItem) => {
    const title = service.title[currentLang];
    onSelectServiceForBooking(title);
  };

  const texts = {
    sectionTag: { de: 'Transparente Preise & Service', fr: 'Tarifs transparents & Soins', en: 'Transparent Pricing & Care' },
    heading: { de: 'Unser Leistungsangebot', fr: 'Nos Prestations & Tarifs', en: 'Our Salon Services' },
    subtitle: {
      de: 'Ob typgerechter Haarschnitt, brillante Coloration oder entspannende Kopfmassage – bei Coiffure Top Hair stehen Ihre Wünsche und Ihr Haar im Mittelpunkt.',
      fr: 'Coupes personnalisées, colorations lumineuses ou soins relaxants : vos envies et la santé de vos cheveux sont au cœur de notre attention.',
      en: 'From tailored haircuts and glowing colorations to soothing treatments, your style and well-being come first.',
    },
    popular: { de: 'Beliebt', fr: 'Populaire', en: 'Popular' },
    bookNow: { de: 'Termin anfragen', fr: 'Réserver', en: 'Book' },
    customNote: {
      de: '* Die Preise richten sich nach Haarlänge und individuellem Materialaufwand. Wir beraten Sie gerne unverbindlich vor Behandlungsbeginn.',
      fr: '* Les tarifs peuvent varier selon la longueur des cheveux et le travail technique. Devis personnalisé sur demande.',
      en: '* Prices vary depending on hair length and technical material. We gladly advise you individually beforehand.',
    },
    selectedBanner: {
      de: 'ausgewählte Behandlung(en)',
      fr: 'prestation(s) sélectionnée(s)',
      en: 'selected service(s)',
    },
    bookSelectionBtn: {
      de: 'Auswahl für Termin übernehmen',
      fr: 'Valider pour mon rendez-vous',
      en: 'Confirm for my appointment',
    },
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
            <Scissors className="w-3.5 h-3.5 text-amber-800" />
            <span>{texts.sectionTag[currentLang]}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {texts.heading[currentLang]}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            {texts.subtitle[currentLang]}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`service-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isSelected = basket.includes(service.title[currentLang]);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative bg-white rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-700 ring-2 ring-amber-700/20 shadow-md'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                      {service.title[currentLang]}
                    </h3>
                    {service.popular && (
                      <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-amber-700" />
                        <span>{texts.popular[currentLang]}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {service.description[currentLang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="font-serif font-bold text-lg text-amber-900">
                      {service.price}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => toggleBasket(service.title[currentLang])}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-amber-800" />
                          <span>{currentLang === 'de' ? 'Vorgemerkt' : currentLang === 'fr' ? 'Sélectionné' : 'Selected'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-stone-500" />
                          <span>{currentLang === 'de' ? 'Merken' : currentLang === 'fr' ? 'Choisir' : 'Select'}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleBookSingleService(service)}
                      className="px-3 py-2 text-xs font-semibold rounded-lg bg-stone-900 hover:bg-stone-800 text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{texts.bookNow[currentLang]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Services Floating Action Bar */}
        {basket.length > 0 && (
          <div className="mt-8 p-4 rounded-2xl bg-amber-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-800">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center font-bold text-sm text-amber-100">
                {basket.length}
              </span>
              <div>
                <div className="text-sm font-semibold">
                  {basket.length} {texts.selectedBanner[currentLang]}
                </div>
                <div className="text-xs text-amber-200/80 truncate max-w-md">
                  {basket.join(', ')}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectServiceForBooking(basket.join(', '));
                onOpenBookingModal();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>{texts.bookSelectionBtn[currentLang]}</span>
            </button>
          </div>
        )}

        {/* Note regarding customized consultations */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 max-w-2xl mx-auto">
            {texts.customNote[currentLang]}
          </p>
        </div>
      </div>
    </section>
  );
};
