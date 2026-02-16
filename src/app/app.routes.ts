import { Routes } from '@angular/router';
import { publicRoutes } from './features/public/public-routing';
import { privateRoutes } from './features/private/private-routing';

export const routes: Routes = [
  ...publicRoutes,
  ...privateRoutes,
  { path: '', redirectTo: '/public/', pathMatch: 'full' },
  { path: '**', redirectTo: '/public/login', pathMatch: 'full' }
];
