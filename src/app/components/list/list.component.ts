import { Component,OnDestroy,OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MenuItem } from 'primeng/api';
import { Employe } from 'src/app/core/services/employe';
import {  Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit,OnDestroy {
  employe:Employe[]=[]
  items: MenuItem[];
  itemsL: MenuItem[];
  activeItem: MenuItem;
  subscription:Subscription=new Subscription
  

  constructor(private employeeService: EmployeeService, private authService: AuthService,private router:Router,private route:ActivatedRoute)  { 
    this.items = []; 
    this.itemsL = []; 
    this.activeItem = {};
}
 

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-table',routerLink:'/home'},
      {label: 'Employe List', icon: 'pi pi-fw pi-list',routerLink:'/list'},
    ];
    
    this.itemsL = [{label: 'Logout', icon: 'pi pi-fw pi-arrow-right', command: () => this.logout()}];

    this.activeItem = this.items[0];

    this.subscription = this.employeeService.employeeChanged
      .subscribe(
        (emp: Employe[]) => {
          this.employe = emp;
        }
      );
      
  
    this.employe=this.employeeService.getEmployye()
  }

  logout() {
    this.authService.logout();
  }

  showform() {
    this.router.navigate(['new'],{relativeTo:this.route})

  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }

}