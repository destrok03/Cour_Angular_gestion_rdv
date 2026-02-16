import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { Demande } from '../models/demande.model';
import { DemandeFilter } from '../models/demande-filter.model';
import { DemandeResponse } from '../models/demande-response.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }

  public getDemandes(filter: DemandeFilter, page: number = 1): DemandeResponse {
    let demandes = [...MOCK_DEMANDES];
    
    if (filter.statut) {
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    if (filter.specialite) {
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }
    if (filter.dateDemande) {
      demandes = demandes.filter(d => d.dateDemande === filter.dateDemande);
    }

    const totalItems = demandes.length;
    const pageSize = environment.pageSize;
    const totalPage = Math.ceil(totalItems / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const data = demandes.slice(start, end);
    const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

    return {
      data,
      totalPage,
      currentPage: page,
      totalItems,
      pages
    };
  }
}
