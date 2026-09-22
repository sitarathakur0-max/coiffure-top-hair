import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS, FAQS, SALON_INFO } from '../data/salonData';
import { Language } from '../types';

interface ReviewsFaqSectionProps {
  currentLang: Language;
}

export const ReviewsFaqSection: React.FC<ReviewsFaqSectionProps> = ({ currentLang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const labels = {
    reviewsTag: { de: 'Kundenstimmen', fr: 'Avis Clients', en: 'Customer Reviews' },
    reviewsTitle: {
      de: 'Was unsere Kundinnen und Kunden sagen',
      fr: 'Ce que disent nos clients',
      en: 'What our clients say',
    },
    faqTag: { de: 'Häufige Fragen', fr: 'Questions fréquentes', en: 'Frequently Asked Questions' },
    faqTitle: {
      de: 'Gut zu wissen vor Ihrem Besuch',
      fr: 'Bon à savoir avant votre visite',
      en: 'Good to know before your visit',
    },
    localNote: {
      de: 'Zufriedene Kundinnen und Kunden aus Wünnewil, Flamatt, Schmitten und der Region Sense.',
      fr: 'Clientèle fidèle de Wünnewil, Flamatt, Schmitten et de tout le district de la Singine.',
      en: 'Satisfied clients from Wünnewil, Flamatt, Schmitten, and the greater Sense region.',
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-800" />
              <span>{labels.reviewsTag[currentLang]}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              {labels.reviewsTitle[currentLang]}
            </h2>
            <p className="text-sm text-stone-600">
              {labels.localNote[currentLang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed italic">
                    "{rev.text[currentLang]}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div>
                    <span className="font-semibold text-stone-900 block">{rev.name}</span>
                    <span>{rev.location}</span>
                  </div>
                  <span className="text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-900/10 text-amber-950 border border-amber-800/20">
              <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
              <span>{labels.faqTag[currentLang]}</span>
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
              {labels.faqTitle[currentLang]}
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`faq-toggle-${idx}`}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question[currentLang]}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer[currentLang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
