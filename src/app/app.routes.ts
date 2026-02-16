import { Routes } from '@angular/router';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { DemandeRvComponent } from './features/private/demande-rv/demande-rv.component';
import { FormDemandeComponent } from './features/private/demande-rv/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/private/demande-rv/list-demande/list-demande.component';
import { PatientComponent } from './features/public/patient/patient.component';
import { LoginComponent } from './features/public/login/login.component';
import { PublicComponent } from './features/public/public.component';
import { PrivateComponent } from './features/private/private.component';


export const routes: Routes = [

    //private routes

    {
        path: 'private',
        component: PrivateComponent,
        children:
        [
        {
             path: '',
         redirectTo: 'dash',
         pathMatch: 'full'
         },
            {
        path: 'liste-demande-rv',
        component: ListDemandeComponent
    },

    {
        path: 'dash',
        component: DashboardComponent
    },
    {
        path: 'drv',
        component: DemandeRvComponent
    },
    {
        path: 'create-demande',
        component: FormDemandeComponent

    },
         
     ]

    },


    

    //public routes

    {
        path: 'public',
        component: PublicComponent,
        children:
        [
        {
          path: '',
         redirectTo: 'login',
         pathMatch: 'full'
         },

         {
          path: 'login',
         component:LoginComponent
         },

        {
        path: 'create-patient',
        component: PatientComponent

        },
     ]

    },

     { path: '', redirectTo: '/public/', pathMatch: 'full'},
     { path: '**', redirectTo: '/public/login', pathMatch: 'full'},
];
