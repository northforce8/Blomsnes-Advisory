export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  results: string[];
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  preferredDate: string;
  message?: string;
}
