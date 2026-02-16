import { Specialite, Statut } from './demande.model';

export interface DemandeFilter {
  specialite?: Specialite;
  statut?: Statut;
  dateDemande?: string;
}
