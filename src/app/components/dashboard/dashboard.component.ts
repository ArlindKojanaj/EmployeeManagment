import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private employeeService: EmployeeService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('dashboard2');
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
