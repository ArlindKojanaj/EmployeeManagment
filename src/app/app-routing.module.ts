import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppAuthGuard } from './init/auth.authguard';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ListEmployeeDetailComponent } from './components/list/list-employee-detail/list-employee-detail.component';
import { DeleteEmployeeModalComponent } from './components/list/delete-employee-modal/delete-employee-modal.component';
import { ListEmployeeAddHistoryComponent } from './components/list/list-employee-detail/list-employee-add-history/list-employee-add-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'list',
    component:ListComponent,
    canActivate: [AppAuthGuard],
    
    children:[{
      path:'new',
      component:AddComponent,
      canActivate:[AppAuthGuard]
    },{
      path:':id',component:ListEmployeeDetailComponent,canActivate:[AppAuthGuard]
    },{
      path:':id/history',component:ListEmployeeAddHistoryComponent,canActivate:[AppAuthGuard]
    },
    {
      path:':id/edit',component:AddComponent,canActivate:[AppAuthGuard]
    },{
      path:':id/delete',component:DeleteEmployeeModalComponent,canActivate:[AppAuthGuard]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
