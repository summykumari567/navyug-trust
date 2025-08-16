export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  price?: number;
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
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StudentLogin {
  email: string;
  password: string;
}
