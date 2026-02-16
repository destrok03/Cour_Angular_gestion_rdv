import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';

export const publicRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-patient', component: PatientComponent }
    ]
  }
];
