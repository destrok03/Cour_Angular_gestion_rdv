import { Demande } from './demande.model';

export interface DemandeResponse {
  data: Demande[];
  totalPage: number;
  currentPage: number;
  totalItems: number;
  pages: number[];
}
