import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Clock, User, Mail, Scissors, CheckCircle, ArrowRight } from 'lucide-react';
import { SALON_INFO, SERVICES_DATA } from '../data/salonData';
import { Language } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  currentLang: Language;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  currentLang,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('afternoon');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const parts = preselectedService.split(', ').filter(Boolean);
      setSelectedServices(parts);
    }
  }, [preselectedService]);

  // Set default date to tomorrow or next business day
  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const texts = {
    title: { de: 'Termin anfragen', fr: 'Demande de rendez-vous', en: 'Request an appointment' },
    sub: {
      de: 'Gerne reservieren wir Ihren Wunschtermin. Wir bestätigen Ihre Anfrage zeitnah telefonisch.',
      fr: 'Nous réservons votre créneau souhaité et vous confirmons rapidement par téléphone.',
      en: 'We gladly reserve your preferred slot and confirm promptly by phone.',
    },
    nameLabel: { de: 'Vor- und Nachname *', fr: 'Nom et prénom *', en: 'Full Name *' },
    namePlaceholder: { de: 'z.B. Sarah Muster', fr: 'ex. Sarah Exemple', en: 'e.g. Sarah Miller' },
    phoneLabel: { de: 'Telefonnummer für Bestätigung *', fr: 'Téléphone pour confirmation *', en: 'Phone number *' },
    phonePlaceholder: { de: '079 123 45 67', fr: '079 123 45 67', en: '079 123 45 67' },
    emailLabel: { de: 'E-Mail (optional)', fr: 'E-mail (facultatif)', en: 'Email (optional)' },
    dateLabel: { de: 'Wunschdatum *', fr: 'Date souhaitée *', en: 'Preferred Date *' },
    timeSlotLabel: { de: 'Bevorzugte Tageszeit', fr: 'Créneau horaire préféré', en: 'Preferred Time of Day' },
    morning: { de: 'Vormittag (08:30 – 12:00)', fr: 'Matin (08h30 – 12h00)', en: 'Morning (08:30 – 12:00)' },
    afternoon: { de: 'Nachmittag (13:30 – 16:30)', fr: 'Après-midi (13h30 – 16h30)', en: 'Afternoon (13:30 – 16:30)' },
    evening: { de: 'Spätnachmittag (16:30 – 18:30)', fr: 'Fin d’après-midi (16h30 – 18h30)', en: 'Late Afternoon (16:30 – 18:30)' },
    serviceLabel: { de: 'Gewünschte Behandlung(en)', fr: 'Prestation(s) souhaitée(s)', en: 'Desired Treatment(s)' },
    notesLabel: { de: 'Anmerkungen / Wünsche (optional)', fr: 'Remarques éventuelles (facultatif)', en: 'Notes / Requests (optional)' },
    notesPlaceholder: {
      de: 'z.B. Haarlänge, spezielle Farbberatung oder Wunschcoiffeur...',
      fr: 'ex. longueur des cheveux, conseil couleur...',
      en: 'e.g. hair length, color idea...',
    },
    submitBtn: { de: 'Terminanfrage unverbindlich absenden', fr: 'Envoyer ma demande', en: 'Submit Appointment Request' },
    directCallNote: {
      de: 'Eilt es? Für kurzfristige Termine heute bitte direkt anrufen:',
      fr: 'Besoin d’un rendez-vous rapide aujourd’hui? Appelez directement:',
      en: 'Urgent? For short-notice appointments today, please call directly:',
    },
    // Success View
    successTitle: { de: 'Herzlichen Dank!', fr: 'Merci beaucoup!', en: 'Thank you!' },
    successMessage: {
      de: 'Ihre Terminanfrage für Coiffure Top Hair in Wünnewil ist eingegangen. Wir melden uns telefonisch zur Bestätigung der genauen Uhrzeit.',
      fr: 'Votre demande de rendez-vous a bien été reçue. Nous vous contacterons très prochainement pour confirmer l’heure exacte.',
      en: 'Your appointment request has been received. We will contact you by phone shortly to confirm the exact time.',
    },
    successSummary: { de: 'Zusammenfassung Ihrer Anfrage', fr: 'Récapitulatif', en: 'Inquiry Summary' },
    closeBtn: { de: 'Schliessen', fr: 'Fermer', en: 'Close' },
    callNowBtn: { de: 'Direkt anrufen: 026 534 10 17', fr: 'Appeler: 026 534 10 17', en: 'Call directly: 026 534 10 17' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Coiffure Top Hair • Wünnewil
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
              {isSubmitted ? texts.successTitle[currentLang] : texts.title[currentLang]}
            </h3>
            {!isSubmitted && (
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                {texts.sub[currentLang]}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <p className="text-base text-stone-800 font-medium">
                {texts.successMessage[currentLang]}
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
              <div className="font-bold text-stone-900 border-b border-stone-200 pb-1.5 uppercase tracking-wide">
                {texts.successSummary[currentLang]}
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Name:</span>
                <span className="font-semibold text-stone-900">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Telefon:</span>
                <span className="font-semibold text-stone-900">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Datum:</span>
                <span className="font-semibold text-stone-900">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Zeitfenster:</span>
                <span className="font-semibold text-stone-900">
                  {timeSlot === 'morning' ? texts.morning[currentLang] : timeSlot === 'afternoon' ? texts.afternoon[currentLang] : texts.evening[currentLang]}
                </span>
              </div>
              {selectedServices.length > 0 && (
                <div className="flex justify-between pt-1 border-t border-stone-200">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-900 text-right">{selectedServices.join(', ')}</span>
                </div>
              )}
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`tel:${SALON_INFO.phone.raw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>{texts.callNowBtn[currentLang]}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl text-stone-600 hover:text-stone-900 text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                {texts.closeBtn[currentLang]}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-left max-h-[75vh] overflow-y-auto">
            {/* Quick Urgent Alert Callout */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs text-amber-950">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                <span>{texts.directCallNote[currentLang]}</span>
              </div>
              <a
                href={`tel:${SALON_INFO.phone.raw}`}
                className="font-bold underline text-amber-900 shrink-0"
              >
                {SALON_INFO.phone.display}
              </a>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {texts.nameLabel[currentLang]}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={texts.namePlaceholder[currentLang]}
                  className="w-full pl-9.5 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {texts.phoneLabel[currentLang]}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={texts.phonePlaceholder[currentLang]}
                    className="w-full pl-9.5 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {texts.emailLabel[currentLang]}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre@email.ch"
                    className="w-full pl-9.5 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {texts.dateLabel[currentLang]}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {texts.timeSlotLabel[currentLang]}
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value as any)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800 bg-white"
                >
                  <option value="morning">{texts.morning[currentLang]}</option>
                  <option value="afternoon">{texts.afternoon[currentLang]}</option>
                  <option value="evening">{texts.evening[currentLang]}</option>
                </select>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {texts.serviceLabel[currentLang]}
              </label>
              <select
                onChange={(e) => {
                  const val = e.target.value;
                  if (val && !selectedServices.includes(val)) {
                    setSelectedServices([...selectedServices, val]);
                  }
                }}
                className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800 bg-white mb-2"
              >
                <option value="">{currentLang === 'de' ? '+ Weitere Behandlung hinzufügen...' : currentLang === 'fr' ? '+ Ajouter une prestation...' : '+ Add a service...'}</option>
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title[currentLang]}>
                    {s.title[currentLang]} ({s.price})
                  </option>
                ))}
              </select>

              {/* Badges of selected services */}
              <div className="flex flex-wrap gap-1.5">
                {selectedServices.map((srv, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-amber-100 text-amber-900 border border-amber-300"
                  >
                    <span>{srv}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedServices(selectedServices.filter((s) => s !== srv))}
                      className="hover:text-amber-950 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {texts.notesLabel[currentLang]}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={texts.notesPlaceholder[currentLang]}
                className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                id="appointment-submit-button"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
              >
                <span>{texts.submitBtn[currentLang]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
