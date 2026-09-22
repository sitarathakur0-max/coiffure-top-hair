import React from 'react';
import { Heart, Sparkles, ShieldCheck, Users, Coffee, Scissors } from 'lucide-react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';

interface AtmosphereSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const content = {
    tag: {
      de: 'Handwerk & Wohlgefühl',
      fr: 'Savoir-faire & Bien-être',
      en: 'Craftsmanship & Well-being',
    },
    title: {
      de: 'Ein Haarschnitt, der genau zu Ihrer Persönlichkeit passt',
      fr: 'Une coupe pensée pour révéler votre personnalité',
      en: 'Hair artistry tailored to your individuality',
    },
    description1: {
      de: 'Coiffure Top Hair steht für authentische Friseurkunst im Herzen von Wünnewil. Wir nehmen uns Zeit für eine ehrliche, typgerechte Beratung und hören genau zu, welcher Stil und welche Pflege zu Ihrem Alltag passen.',
      fr: 'Coiffure Top Hair incarne l’artisanat de la coiffure au cœur de Wünnewil. Nous prenons le temps d’une consultation personnalisée et bienveillante pour comprendre votre style et vos habitudes de vie.',
      en: 'Coiffure Top Hair stands for authentic hair craftsmanship in the heart of Wünnewil. We dedicate time to understanding your lifestyle, hair texture, and styling wishes.',
    },
    description2: {
      de: 'Ob regelmässiger Formschnitt für Herren, anspruchsvolle Farbverläufe und Highlights für Damen oder der erste Friseurbesuch für Kinder – bei uns geniessen Sie eine ruhige Auszeit vom Trubel des Alltags mit einer feinen Tasse Kaffee.',
      fr: 'Qu’il s’agisse d’un entretien précis pour hommes, de balayages délicats pour dames ou d’une première coupe enfant, profitez d’une parenthèse sereine accompagnée d’un café soigné.',
      en: 'Whether it is a sharp men’s cut, vibrant highlights for women, or a gentle first salon visit for children, experience a restful pause from everyday hustle.',
    },
    values: [
      {
        icon: Scissors,
        title: {
          de: 'Präzise Schnitt-Technik',
          fr: 'Technique de coupe précise',
          en: 'Precision cutting technique',
        },
        text: {
          de: 'Saubere Konturen und typgerechte Formgebung, die auch zu Hause mühelos nachzustylen ist.',
          fr: 'Lignes harmonieuses et faciles à recoiffer au quotidien chez soi.',
          en: 'Clean contours and flattering silhouettes easy to recreate at home.',
        },
      },
      {
        icon: Sparkles,
        title: {
          de: 'Haarschonende Produkte',
          fr: 'Produits doux & respectueux',
          en: 'Gentle & nourishing formulas',
        },
        text: {
          de: 'Erstklassige Marken für brillanten Farbglanz, Kopfhautschutz und langanhaltende Frische.',
          fr: 'Gammes professionnelles sélectionnées pour l’éclat de la couleur et le confort du cuir chevelu.',
          en: 'Selected professional lines for vibrant luster, scalp comfort, and long-lasting freshness.',
        },
      },
      {
        icon: Users,
        title: {
          de: 'Herzliche Atmosphäre',
          fr: 'Accueil chaleureux & convivial',
          en: 'Warm & welcoming care',
        },
        text: {
          de: 'Persönliche, individuelle Betreuung in Wünnewil ohne Hektik und ohne Fliessbandarbeit.',
          fr: 'Prise en charge attentionnée et individualisée, sans précipitation.',
          en: 'Dedicated one-on-one attention without haste or rushed transitions.',
        },
      },
      {
        icon: Coffee,
        title: {
          de: 'Entspannung & Wohlfühlen',
          fr: 'Pause détente & café',
          en: 'Relaxation & comfort',
        },
        text: {
          de: 'Genussvolle Haarwäsche mit sanfter Kopfmassage und heissem Kaffee oder Erfrischung.',
          fr: 'Shampooing relaxant avec massage délicat et boisson offerte.',
          en: 'Enjoy a soothing scalp massage alongside complimentary coffee or refreshments.',
        },
      },
    ],
    cta: {
      de: 'Lernen Sie uns kennen',
      fr: 'Venez nous rencontrer',
      en: 'Experience the difference',
    },
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase with generated craftsmanship image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 aspect-4/3 group">
              <img
                src="/src/assets/images/top_hair_craft_1789899879310.jpg"
                alt="Coiffure Top Hair Wünnewil Handwerk und Präzision"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-stone-900/80 backdrop-blur-sm border border-stone-700/60 text-white text-xs">
                <div className="font-semibold text-amber-300">Coiffure Top Hair • Wünnewil</div>
                <div className="text-stone-300">Felsenegg 3, 3184 Wünnewil • 026 534 10 17</div>
              </div>
            </div>
          </div>

          {/* Text & Value propositions */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
              <Heart className="w-3.5 h-3.5 text-amber-800" />
              <span>{content.tag[currentLang]}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              {content.title[currentLang]}
            </h2>

            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>{content.description1[currentLang]}</p>
              <p>{content.description2[currentLang]}</p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {content.values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-amber-800" />
                      </div>
                      <h4 className="font-semibold text-stone-900 text-sm">
                        {val.title[currentLang]}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pl-9.5">
                      {val.text[currentLang]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
