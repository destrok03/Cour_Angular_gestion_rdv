import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { IRendezVousService } from './interfaces/rendez-vous.interface';
import { RendezVous, StatutRv } from '../models/rendez-vous.model';
import { MOCK_RENDEZ_VOUS } from '../../mocks/rendez-vous.mock';

@Injectable({
  providedIn: 'root'
})
export class RendezVousMockService implements IRendezVousService {
  private rendezVous = MOCK_RENDEZ_VOUS;

  getRendezVousByPatient(patientId: number): Observable<RendezVous[]> {
    return of(this.rendezVous.filter(rv => rv.patientId === patientId)).pipe(delay(500));
  }

  getRendezVousById(id: number): Observable<RendezVous | undefined> {
    return of(this.rendezVous.find(rv => rv.id === id)).pipe(delay(300));
  }

  filterByStatut(rvList: RendezVous[], statut: StatutRv | 'tous'): RendezVous[] {
    return statut === 'tous' ? rvList : rvList.filter(rv => rv.statut === statut);
  }
}
