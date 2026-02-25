export type StatutRv = 'en_attente' | 'confirme' | 'annule' | 'termine';

export interface Consultation {
  id: number;
  diagnostic: string;
  traitement: string;
  notes?: string;
  date: string;
}

export interface Ordonnance {
  id: number;
  consultationId: number;
  medicaments: string[];
  posologie: string;
  duree: string;
}

export interface RendezVous {
  id: number;
  patientId: number;
  patientNom: string;
  date: string;
  heure: string;
  motif: string;
  statut: StatutRv;
  consultation?: Consultation;
  ordonnance?: Ordonnance;
}
