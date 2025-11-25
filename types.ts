export enum ServiceType {
  ONLINE_DESIGN = 'Online Blueprint Design',
  ONSITE_DECO = 'Door-to-Door Decoration'
}

export interface BookingFormData {
  name: string;
  contact: string;
  dormLocation: string;
  serviceType: ServiceType;
  preferredDate: string;
  notes: string;
}

export interface Blueprint {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}