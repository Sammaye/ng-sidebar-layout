import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullLayoutComponent} from './layouts/full-layout.component';
import {AuthGaurdService} from './auth-gaurd.service';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'user/login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'admin',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
        canActivate: [AuthGaurdService],
        data: {requireAuth: true},
      },
    ]
  },
  {path: '**', redirectTo: '/user/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  declarations: [],
  providers: [
    AuthGaurdService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
