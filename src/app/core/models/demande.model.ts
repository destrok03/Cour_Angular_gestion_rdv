export type Specialite = 'cardiologie' | 'dermatologie' | 'pediatrie' | 'neurologie' | 'ophtalmologie' | '';

export type Statut = 'en attente' | 'accepté' | 'refusé' | '';

export interface Demande {
  id: number;
  dateDemande: string;
  heure: string;
  statut: Statut;
  specialite: Specialite;
}

export interface DemandeFilter {
  specialite?: Specialite;
  statut?: Statut;
  dateDemande?: string;
}

export interface DemandeResponse {
  data: Demande[];
  totalPage: number;
  currentPage: number;
  totalItems: number;
  pages: number[];
}
