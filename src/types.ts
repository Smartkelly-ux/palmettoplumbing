export type ProjectCategory = 
  | 'NEW CONSTRUCTION'
  | 'REMODELING'
  | 'TENANT IMPROVEMENT'
  | 'COMMERCIAL PLUMBING'
  | 'GAS PIPING'
  | 'GREASE TRAP SERVICES';

export interface ProjectIndexItem {
  id: string;
  number: string;
  title: string;
  scope: string;
  specification: string;
  image: string;
  deliverables: string[];
}

export interface QuoteFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  details: string;
}
