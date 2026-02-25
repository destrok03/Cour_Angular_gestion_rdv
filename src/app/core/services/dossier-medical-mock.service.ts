import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { IDossierMedicalService } from './interfaces/dossier-medical.interface';
import { DossierMedical } from '../models/dossier-medical.model';
import { MOCK_DOSSIER_MEDICAL } from '../../mocks/dossier-medical.mock';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalMockService implements IDossierMedicalService {
  private dossiers = MOCK_DOSSIER_MEDICAL;

  getDossierByPatient(patientId: number): Observable<DossierMedical | undefined> {
    return of(this.dossiers.find(d => d.patientId === patientId)).pipe(delay(500));
  }
}
