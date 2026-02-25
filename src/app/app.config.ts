import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { RENDEZ_VOUS_SERVICE_TOKEN } from './core/services/interfaces/rendez-vous.interface';
import { RendezVousMockService } from './core/services/rendez-vous-mock.service';
import { DOSSIER_MEDICAL_SERVICE_TOKEN } from './core/services/interfaces/dossier-medical.interface';
import { DossierMedicalMockService } from './core/services/dossier-medical-mock.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: RENDEZ_VOUS_SERVICE_TOKEN, useClass: RendezVousMockService },
    { provide: DOSSIER_MEDICAL_SERVICE_TOKEN, useClass: DossierMedicalMockService }
  ]
};
