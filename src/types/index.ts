export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  beneficiaries?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
}

export interface TrustInfo {
  name: string;
  tagline: string;
  description: string;
  established: string;
  mission: string;
  vision: string;
  focusAreas: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerForm {
  name: string;
  email: string;
  phone?: string;
  areaOfInterest?: string;
}

export interface DonationForm {
  name: string;
  email: string;
  amount: number;
  fundType: 'education' | 'women-empowerment' | 'health-environment' | 'general';
}
