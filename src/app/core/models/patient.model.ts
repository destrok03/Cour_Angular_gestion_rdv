export interface Patient {
  id?: number;
  numero: string;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  adresse: string;
  antecedents?: string;
}

export type PatientRequest = Omit<Patient, 'id'>;
