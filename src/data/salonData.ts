import { ServiceItem, OpeningHourDay } from '../types';

export const SALON_INFO = {
  name: 'Coiffure Top Hair',
  tagline: {
    de: 'Ihr persönlicher Damen- & Herrencoiffeur in Wünnewil',
    fr: 'Votre salon de coiffure dames & messieurs à Wünnewil',
    en: 'Your dedicated women’s & men’s hair salon in Wünnewil',
  },
  address: {
    street: 'Felsenegg 3',
    postalCode: '3184',
    city: 'Wünnewil',
    canton: 'Freiburg / Fribourg (Sensebezirk)',
    country: 'Schweiz / Suisse',
    fullFormatted: 'Felsenegg 3, 3184 Wünnewil',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Felsenegg+3+3184+W%C3%BCnnewil',
  },
  phone: {
    display: '026 534 10 17',
    international: '+41265341017',
    raw: '0265341017',
  },
  features: [
    {
      de: 'Damen-, Herren- & Kinderschnitte',
      fr: 'Coupes dames, messieurs & enfants',
      en: 'Women, men & children cuts',
    },
    {
      de: 'Kostenlose Kundenparkplätze vor dem Haus',
      fr: 'Places de parc gratuites devant le salon',
      en: 'Free customer parking on site',
    },
    {
      de: 'Nur 4 Gehminuten vom Bahnhof Wünnewil (S1)',
      fr: 'À 4 min à pied de la gare de Wünnewil (S1)',
      en: '4 min walk from Wünnewil train station',
    },
    {
      de: 'Zahlung: TWINT, Bar, Maestro, Kreditkarten',
      fr: 'Paiement: TWINT, Espèces, Maestro, Cartes',
      en: 'Payment: TWINT, Cash, Maestro, Cards',
    },
  ],
};

export const OPENING_HOURS: OpeningHourDay[] = [
  {
    dayIndex: 1, // Monday
    dayName: { de: 'Montag', fr: 'Lundi', en: 'Monday' },
    hours: 'Geschlossen / Ruhetag',
    isClosed: true,
  },
  {
    dayIndex: 2, // Tuesday
    dayName: { de: 'Dienstag', fr: 'Mardi', en: 'Tuesday' },
    hours: '08:30 – 12:00 | 13:30 – 18:30',
  },
  {
    dayIndex: 3, // Wednesday
    dayName: { de: 'Mittwoch', fr: 'Mercredi', en: 'Wednesday' },
    hours: '08:30 – 12:00 | 13:30 – 18:30',
  },
  {
    dayIndex: 4, // Thursday
    dayName: { de: 'Donnerstag', fr: 'Jeudi', en: 'Thursday' },
    hours: '08:30 – 12:00 | 13:30 – 18:30',
  },
  {
    dayIndex: 5, // Friday
    dayName: { de: 'Freitag', fr: 'Vendredi', en: 'Friday' },
    hours: '08:30 – 12:00 | 13:30 – 18:30',
  },
  {
    dayIndex: 6, // Saturday
    dayName: { de: 'Samstag', fr: 'Samedi', en: 'Saturday' },
    hours: '08:00 – 15:00 (durchgehend)',
  },
  {
    dayIndex: 0, // Sunday
    dayName: { de: 'Sonntag', fr: 'Dimanche', en: 'Sunday' },
    hours: 'Geschlossen',
    isClosed: true,
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // Damen
  {
    id: 'w-cut-style',
    category: 'women',
    title: {
      de: 'Damen: Waschen, Schneiden & Föhnen',
      fr: 'Dames: Shampooing, coupe & brushing',
      en: 'Women: Wash, Cut & Blowdry',
    },
    description: {
      de: 'Individuelle Typberatung, wohltuende Haarwäsche, Präzisionshaarschnitt und professionelles Föhnstyling.',
      fr: 'Conseil personnalisé, shampooing relaxant, coupe de précision et mise en plis soignée.',
      en: 'Personal styling consultation, relaxing shampoo, precision haircut and blowdry finish.',
    },
    duration: '60 Min.',
    price: 'ab CHF 78.–',
    popular: true,
  },
  {
    id: 'w-wash-blowdry',
    category: 'women',
    title: {
      de: 'Waschen & Föhnen (Brushing)',
      fr: 'Shampooing & Brushing',
      en: 'Wash & Blowdry Styling',
    },
    description: {
      de: 'Perfekt für besondere Anlässe oder das wöchentliche Frischegefühl. Inklusive Kopfmassage.',
      fr: 'Idéal pour une occasion spéciale ou un coup d’éclat hebdomadaire. Massage crânien inclus.',
      en: 'Perfect for special events or regular weekly care. Includes gentle scalp massage.',
    },
    duration: '40 Min.',
    price: 'ab CHF 46.–',
  },
  {
    id: 'w-dry-cut',
    category: 'women',
    title: {
      de: 'Spitzenschnitt / Neuschnitt',
      fr: 'Coupe d’entretien pointes',
      en: 'Ends Refresh / Trim',
    },
    description: {
      de: 'Korrektur und Erfrischung der Spitzen ohne Föhnaufwand.',
      fr: 'Rafraîchissement des pointes sans brushing complet.',
      en: 'Refreshing ends and hair shape.',
    },
    duration: '30 Min.',
    price: 'ab CHF 52.–',
  },

  // Herren
  {
    id: 'm-cut-wash',
    category: 'men',
    title: {
      de: 'Herren: Waschen, Schneiden & Styling',
      fr: 'Messieurs: Shampooing, coupe & coiffage',
      en: 'Men: Wash, Haircut & Styling',
    },
    description: {
      de: 'Klassischer oder moderner Haarschnitt nach Wunsch, Konturenfinish, Haarwäsche und Matt-/Glanzstyling.',
      fr: 'Coupe classique ou moderne, finitions nettes des contours, shampooing et coiffage.',
      en: 'Classic or contemporary haircut, neat contour edging, hair wash and styling product finish.',
    },
    duration: '40 Min.',
    price: 'ab CHF 44.–',
    popular: true,
  },
  {
    id: 'm-clipper-cut',
    category: 'men',
    title: {
      de: 'Maschinenschnitt (Fade / Kurz)',
      fr: 'Coupe tondeuse (Fade / Court)',
      en: 'Clipper Cut / Fade',
    },
    description: {
      de: 'Präziser Maschinenschnitt mit Übergängen und sauber ausgearbeiteten Konturen.',
      fr: 'Coupe précise à la tondeuse avec dégradé et contours soignés.',
      en: 'Precision clipper fade haircut with neat neckline detailing.',
    },
    duration: '25 Min.',
    price: 'CHF 32.–',
  },
  {
    id: 'm-beard-groom',
    category: 'men',
    title: {
      de: 'Bartpflege & Konturen',
      fr: 'Taille de barbe & contours',
      en: 'Beard Trim & Contouring',
    },
    description: {
      de: 'Kürzen, Formgebung und saubere Rasur der Wangen- und Halslinien mit pflegendem Bartöl.',
      fr: 'Définition des lignes, taille symétrique et soin avec huile nourrissante.',
      en: 'Beard shaping, length correction and clean contour lines with nourishing beard oil.',
    },
    duration: '20 Min.',
    price: 'ab CHF 22.–',
  },

  // Farbe & Strähnen
  {
    id: 'c-full-color',
    category: 'color',
    title: {
      de: 'Ansatz- & Komplett-Coloration',
      fr: 'Coloration racine & globale',
      en: 'Roots & Full Coloration',
    },
    description: {
      de: 'Brillante, schonende Haarfarben mit optimaler Grauabdeckung und samtigem Farbglanz.',
      fr: 'Couleurs intenses et respectueuses de la fibre, couverture optimale des cheveux blancs.',
      en: 'Vibrant, gentle hair coloring with excellent grey coverage and radiant shine.',
    },
    duration: '60–80 Min.',
    price: 'ab CHF 68.–',
    popular: true,
  },
  {
    id: 'c-meches-balayage',
    category: 'color',
    title: {
      de: 'Mèches & Balayage Effekte',
      fr: 'Mèches & Balayage ensoleillé',
      en: 'Highlights & Balayage',
    },
    description: {
      de: 'Feine Foliensträhnen oder weiche Freihand-Balayage für lebendige Lichtreflexe und Dimension.',
      fr: 'Mèches au papier ou balayage à l’air libre pour des reflets naturels et lumineux.',
      en: 'Fine foil highlights or seamless freehand balayage for natural depth and dimension.',
    },
    duration: '90–120 Min.',
    price: 'ab CHF 95.–',
  },
  {
    id: 'c-toning-gloss',
    category: 'color',
    title: {
      de: 'Glossing & Glanztönung',
      fr: 'Glossing & Nuanceur d’éclat',
      en: 'Glossing & Tone Refresh',
    },
    description: {
      de: 'Frischt verblasste Farbreflexe auf und schenkt dem Haar intensive Geschmeidigkeit und Spiegeleffekt.',
      fr: 'Ravive les reflets ternes et apporte brillance intense et douceur soyeuse.',
      en: 'Revives faded tones while infusing hair with intense softness and mirror-like shine.',
    },
    duration: '30 Min.',
    price: 'ab CHF 42.–',
  },

  // Pflege & Wellness
  {
    id: 'care-deep-mask',
    category: 'care',
    title: {
      de: 'Intensiv-Aufbaukur & Kopfmassage',
      fr: 'Soin réparateur profond & massage',
      en: 'Deep Nourishing Mask & Scalp Massage',
    },
    description: {
      de: 'Tiefenwirksame Keratin- oder Feuchtigkeitspflege inklusive entspannender Akupressur-Kopfmassage.',
      fr: 'Soin restructurant à la kératine ou hydratant avec massage relaxant du cuir chevelu.',
      en: 'Deep restructuring keratin or moisture treatment with a deeply relaxing scalp massage.',
    },
    duration: '25 Min.',
    price: 'ab CHF 28.–',
  },
  {
    id: 'care-scalp-detox',
    category: 'care',
    title: {
      de: 'Kopfhaut-Peeling & Balance-Ritual',
      fr: 'Gommage cuir chevelu & équilibrant',
      en: 'Scalp Detox & Balance Treatment',
    },
    description: {
      de: 'Beruhigt gereizte oder schuppende Kopfhaut, stimuliert die Haarwurzeln und belebt die Mikrozirkulation.',
      fr: 'Apaise le cuir chevelu sensible, stimule les racines et purifie en douceur.',
      en: 'Soothes stressed scalps, eliminates impurities and stimulates hair roots.',
    },
    duration: '30 Min.',
    price: 'CHF 35.–',
  },
  {
    id: 'care-kids',
    category: 'care',
    title: {
      de: 'Kinderhaarschnitt (bis 12 Jahre)',
      fr: 'Coupe enfant (jusqu’à 12 ans)',
      en: 'Kids Haircut (up to 12 yrs)',
    },
    description: {
      de: 'Geduldige, einfühlsame Betreuung für unsere kleinen Gäste in entspannter Atmosphäre.',
      fr: 'Accueil doux et attentif pour les plus jeunes dans une ambiance sereine.',
      en: 'Patient and friendly service for little ones in a relaxed setting.',
    },
    duration: '25 Min.',
    price: 'ab CHF 26.–',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ursula M.',
    location: 'Wünnewil',
    rating: 5,
    date: 'Vor 2 Wochen',
    text: {
      de: 'Sehr herzlicher Empfang, absolut pünktlich und mein neuer Haarschnitt ist einfach perfekt! Auch das Felsenegg-Parkieren direkt vor der Tür ist so praktisch.',
      fr: 'Accueil très chaleureux, horaire parfaitement respecté et ma nouvelle coupe est splendide! Le parking juste devant est super pratique.',
      en: 'Very warm welcome, strictly on time, and my haircut is spot on! Having free parking right outside makes it so effortless.',
    },
  },
  {
    name: 'Marc B.',
    location: 'Flamatt / Sense',
    rating: 5,
    date: 'Vor 1 Monat',
    text: {
      de: 'Als Mann schätze ich einen unkomplizierten, präzisen Haarschnitt ohne Schnickschnack. Top Qualität, super freundlich und sehr faire Preise.',
      fr: 'Coupe homme précise et rapide, service impeccable avec le sourire. Très bon rapport qualité/prix.',
      en: 'Precise men’s cut, fast and friendly service, very fair pricing. Highly recommended in the region.',
    },
  },
  {
    name: 'Corinne S.',
    location: 'Schmitten FR',
    rating: 5,
    date: 'Vor 3 Wochen',
    text: {
      de: 'Wunderschöne Mèches und eine tolle Farbberatung. Man fühlt sich sofort wohl und entspannt. Ich komme seit Jahren sehr gerne hierher.',
      fr: 'Superbes mèches et conseils couleur avisés. On s’y sent immédiatement à l’aise.',
      en: 'Wonderful highlights and honest coloring advice. You immediately feel relaxed in the salon.',
    },
  },
];

export const FAQS = [
  {
    question: {
      de: 'Benötige ich zwingend einen Termin?',
      fr: 'Faut-il obligatoirement prendre rendez-vous?',
      en: 'Do I need an appointment in advance?',
    },
    answer: {
      de: 'Wir empfehlen eine telefonische Voranmeldung unter 026 534 10 17 oder eine Terminanfrage über unsere Website, damit wir ohne Wartezeiten Zeit für Sie reservieren können. Spontane Vorbeikommende bedienen wir bei freien Kapazitäten natürlich ebenfalls gerne.',
      fr: 'Nous recommandons de réserver par téléphone au 026 534 10 17 ou via notre site pour vous garantir une prise en charge sans attente. Les passages spontanés sont bienvenus selon les disponibilités.',
      en: 'We recommend reserving ahead by calling 026 534 10 17 or sending an inquiry through this website to ensure dedicated time. Spontaneous walk-ins are welcomed whenever a chair is free.',
    },
  },
  {
    question: {
      de: 'Gibt es Parkplätze bei Coiffure Top Hair?',
      fr: 'Y a-t-il des places de stationnement?',
      en: 'Is there parking available at Coiffure Top Hair?',
    },
    answer: {
      de: 'Ja, es stehen Ihnen kostenlose Kundenparkplätze direkt vor dem Salon an der Felsenegg 3 in Wünnewil zur Verfügung.',
      fr: 'Oui, des places de parc gratuites pour la clientèle sont disponibles directement devant le salon à Felsenegg 3 à Wünnewil.',
      en: 'Yes, free customer parking spaces are situated directly in front of the salon at Felsenegg 3 in Wünnewil.',
    },
  },
  {
    question: {
      de: 'Welche Zahlungsmittel werden akzeptiert?',
      fr: 'Quels moyens de paiement acceptez-vous?',
      en: 'What payment methods do you accept?',
    },
    answer: {
      de: 'Sie können bequem mit TWINT, Bargeld (CHF), Maestro, Debitkarte sowie Visa und Mastercard bezahlen.',
      fr: 'Vous pouvez régler facilement par TWINT, en espèces (CHF), par carte Maestro, carte de débit ou cartes de crédit (Visa, Mastercard).',
      en: 'We gladly accept TWINT, cash (CHF), Maestro, debit cards, as well as Visa and Mastercard.',
    },
  },
  {
    question: {
      de: 'Wie erreiche ich den Salon mit dem öffentlichen Verkehr?',
      fr: 'Comment rejoindre le salon en transports publics?',
      en: 'How do I reach the salon by public transport?',
    },
    answer: {
      de: 'Der Bahnhof Wünnewil (S-Bahn Linie S1 Bern – Fribourg) ist nur rund 4 Gehminuten (ca. 350 m) entfernt. Folgen Sie einfach der Bahnhofstrasse Richtung Felsenegg.',
      fr: 'La gare CFF de Wünnewil (ligne S1 Berne – Fribourg) est à seulement 4 minutes à pied (environ 350 m). Suivez simplement la Bahnhofstrasse vers Felsenegg.',
      en: 'Wünnewil train station (S-Bahn S1 line between Bern and Fribourg) is just a 4-minute walk away (approx. 350 meters).',
    },
  },
];

export function getSalonStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, 2 Tuesday...
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  // Sunday or Monday
  if (day === 0 || day === 1) {
    return {
      isOpen: false,
      text: {
        de: 'Heute geschlossen (Montag/Sonntag Ruhetag) – Öffnet Dienstag um 08:30',
        fr: 'Fermé aujourd’hui – Ouvre mardi dès 08h30',
        en: 'Closed today – Opens Tuesday at 08:30',
      },
    };
  }

  // Saturday
  if (day === 6) {
    if (currentTime >= 8 && currentTime < 15) {
      return {
        isOpen: true,
        text: {
          de: 'Jetzt geöffnet bis 15:00 Uhr',
          fr: 'Actuellement ouvert jusqu’à 15h00',
          en: 'Open now until 15:00',
        },
      };
    }
    return {
      isOpen: false,
      text: {
        de: 'Geschlossen – Öffnet wieder Dienstag um 08:30',
        fr: 'Fermé – Réouverture mardi dès 08h30',
        en: 'Closed – Reopens Tuesday at 08:30',
      },
    };
  }

  // Tuesday to Friday: 08:30 - 12:00, 13:30 - 18:30
  if (currentTime >= 8.5 && currentTime < 12) {
    return {
      isOpen: true,
      text: {
        de: 'Jetzt geöffnet (Morgen-Schnitt bis 12:00, nachmittags ab 13:30)',
        fr: 'Actuellement ouvert (jusqu’à 12h00, puis dès 13h30)',
        en: 'Open now (morning until 12:00, afternoon from 13:30)',
      },
    };
  } else if (currentTime >= 12 && currentTime < 13.5) {
    return {
      isOpen: false,
      text: {
        de: 'Mittagspause – Öffnet wieder um 13:30 Uhr',
        fr: 'Pause de midi – Réouverture à 13h30',
        en: 'Lunch break – Reopens at 13:30',
      },
    };
  } else if (currentTime >= 13.5 && currentTime < 18.5) {
    return {
      isOpen: true,
      text: {
        de: 'Jetzt geöffnet bis 18:30 Uhr',
        fr: 'Actuellement ouvert jusqu’à 18h30',
        en: 'Open now until 18:30',
      },
    };
  } else {
    return {
      isOpen: false,
      text: {
        de: 'Geschlossen – Öffnet am nächsten Werktag um 08:30 Uhr',
        fr: 'Fermé – Ouvre au prochain jour ouvrable à 08h30',
        en: 'Closed – Opens next working day at 08:30',
      },
    };
  }
}
