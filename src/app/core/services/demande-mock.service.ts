import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { MOCK_DEMANDES } from '../../mocks/demande.mock';
import { DemandeFilter, DemandeResponse } from '../models/demande.model';
import { IDemandeService } from './interfaces/demande.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeMockService implements IDemandeService {

  getDemandes(filter: DemandeFilter, page: number = 1): Observable<DemandeResponse> {
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

    const response: DemandeResponse = {
      data,
      totalPage,
      currentPage: page,
      totalItems,
      pages
    };

    return of(response).pipe(delay(100));
  }
}
