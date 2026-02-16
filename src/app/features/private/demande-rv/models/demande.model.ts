export type Specialite = 'cardiologie' | 'dermatologie' | 'pediatrie' | 'neurologie' | 'ophtalmologie' | '';

export type Statut = 'en attente' | 'accepté' | 'refusé' | '';

export interface Demande {
  id: number;
  dateDemande: string;
  heure: string;
  statut: Statut;
  specialite: Specialite;
}
