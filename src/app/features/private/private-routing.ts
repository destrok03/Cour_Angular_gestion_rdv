import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemandeRvComponent } from './demande-rv/demande-rv.component';
import { ListDemandeComponent } from './demande-rv/list-demande/list-demande.component';
import { FormDemandeComponent } from './demande-rv/form-demande/form-demande.component';
import { ProfileComponent } from './profile/profile.component';
import { RvComponent } from './rv/rv.component';
import { RvDetailsComponent } from './rv/rv-details/rv-details.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const privateRoutes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: DashboardComponent },
      { path: 'drv', component: DemandeRvComponent, canActivate: [roleGuard(['patient'])] },
      { path: 'liste-demande-rv', component: ListDemandeComponent, canActivate: [roleGuard(['secretaire'])] },
      { path: 'create-demande', component: FormDemandeComponent, canActivate: [roleGuard(['patient'])] },
      { path: 'profile', component: ProfileComponent, canActivate: [roleGuard(['patient'])] },
      { path: 'rv', component: RvComponent, canActivate: [roleGuard(['patient'])] },
      { path: 'rv/:id', component: RvDetailsComponent, canActivate: [roleGuard(['patient'])] },
      { path: 'dossier-medical', component: DossierMedicalComponent, canActivate: [roleGuard(['patient'])] }
    ]
  }
];
