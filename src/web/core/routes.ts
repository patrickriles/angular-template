import { Routes } from '@angular/router';
import {
    LoginComponent, PageNotFoundComponent,
    PermissionDeniedComponent
} from '@howser/core';

export const routes: Routes = [
    { path: 'permission-denied', component: PermissionDeniedComponent, data: { title: 'Unauthorized' } },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        loadChildren: () => import('../app/howser-app.module').then(m => m.HowserAppModule),
        data: { Title: 'Ng Seed' }
    },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } },
];
