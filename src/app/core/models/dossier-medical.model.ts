import { Consultation } from './rendez-vous.model';

export interface DossierMedical {
  patientId: number;
  patientNom: string;
  consultations: Consultation[];
  antecedents: string;
  allergies?: string[];
  groupeSanguin?: string;
}
