export type Language = 'de' | 'fr' | 'en';

export type ServiceCategory = 'all' | 'women' | 'men' | 'color' | 'care';

export interface ServiceItem {
  id: string;
  category: 'women' | 'men' | 'color' | 'care';
  title: {
    de: string;
    fr: string;
    en: string;
  };
  description: {
    de: string;
    fr: string;
    en: string;
  };
  duration: string;
  price: string;
  popular?: boolean;
}

export interface OpeningHourDay {
  dayIndex: number; // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
  dayName: {
    de: string;
    fr: string;
    en: string;
  };
  hours: string;
  isClosed?: boolean;
}

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
  selectedServices: string[];
  notes?: string;
}
