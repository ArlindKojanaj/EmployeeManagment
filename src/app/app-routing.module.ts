import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './init/auth.authguard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/components/login/login.component').then( m => m.LoginComponent)
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AppAuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
