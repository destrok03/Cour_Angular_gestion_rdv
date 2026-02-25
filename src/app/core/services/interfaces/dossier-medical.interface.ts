import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DossierMedical } from '../../models/dossier-medical.model';

export interface IDossierMedicalService {
  getDossierByPatient(patientId: number): Observable<DossierMedical | undefined>;
}

export const DOSSIER_MEDICAL_SERVICE_TOKEN = new InjectionToken<IDossierMedicalService>('IDossierMedicalService');
