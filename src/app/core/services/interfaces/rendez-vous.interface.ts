import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous, StatutRv } from '../../models/rendez-vous.model';

export interface IRendezVousService {
  getRendezVousByPatient(patientId: number): Observable<RendezVous[]>;
  getRendezVousById(id: number): Observable<RendezVous | undefined>;
  filterByStatut(rvList: RendezVous[], statut: StatutRv | 'tous'): RendezVous[];
}

export const RENDEZ_VOUS_SERVICE_TOKEN = new InjectionToken<IRendezVousService>('IRendezVousService');
