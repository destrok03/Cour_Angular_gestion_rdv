import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemandeRvComponent } from './demande-rv/demande-rv.component';
import { ListDemandeComponent } from './demande-rv/list-demande/list-demande.component';
import { FormDemandeComponent } from './demande-rv/form-demande/form-demande.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from '../../core/guards/auth.guard';

export const privateRoutes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: DashboardComponent },
      { path: 'drv', component: DemandeRvComponent },
      { path: 'liste-demande-rv', component: ListDemandeComponent },
      { path: 'create-demande', component: FormDemandeComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
