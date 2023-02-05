import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MenuItem } from 'primeng/api';
import { Employe } from 'src/app/core/services/employe';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
@Injectable()
export class ListComponent {
  employe:Employe[];
  items: MenuItem[];
  itemsL: MenuItem[];
  activeItem: MenuItem;
  addmode:boolean=false

  constructor(private employeeService: EmployeeService, private authService: AuthService) { 
    this.items = []; 
    this.itemsL = []; 
    this.activeItem = {};
     this.employe=[{
      id:11,
      firstName:'Test',
      lastName:'Test',
      dob:12001,
      email:'test@test.com'
     },{
      id:11,
      firstName:'Test',
      lastName:'Test',
      dob:12001,
      email:'test@test.com'
     }]}

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-table',routerLink:'/home'},
      {label: 'Employe List', icon: 'pi pi-fw pi-list',routerLink:'/list'},
    ];
    
    this.itemsL = [{label: 'Logout', icon: 'pi pi-fw pi-arrow-right', command: () => this.logout()}];

    this.activeItem = this.items[0];
  
    
  }

  logout() {
    this.authService.logout();
  }

  showform() {
    this.addmode=true
  }


}