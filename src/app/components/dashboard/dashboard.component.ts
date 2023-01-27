import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  items: MenuItem[];
  itemsL: MenuItem[];
  activeItem: MenuItem;

  constructor(private employeeService: EmployeeService, private authService: AuthService) { this.items = []; this.itemsL = []; this.activeItem = {}; }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-table'},
      {label: 'Employe List', icon: 'pi pi-fw pi-list'},
    ];
    
    this.itemsL = [{label: 'Logout', icon: 'pi pi-fw pi-arrow-right', command: () => this.logout()}];

    this.activeItem = this.items[0];
  
    this.getEmployeeCount();
  }

  logout() {
    this.authService.logout();
  }

  getEmployeeCount() {
    this.employeeService.count().subscribe(
      c => {
        console.log('count', c);
      }
    );

  }
}