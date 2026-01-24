// Service types
export type ServiceType = 'conversion-audit' | 'bug-bash' | 'monthly-support' | 'custom-support';

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Service data
export interface Service {
  id: ServiceType;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  deliverable?: string;
}

// Free Audit Includes
export interface FreeAuditIncludes {
  tests: string[];
  deliverables: string[];
}

// Testimonial data
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

// Benefit/Feature item
export interface Benefit {
  title: string;
  description: string;
}

// Stats/metrics
export interface Stat {
  value: string;
  label: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Problem item
export interface Problem {
  title: string;
  description: string;
}
