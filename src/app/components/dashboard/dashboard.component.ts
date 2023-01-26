import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeCount();
  }

  getEmployeeCount() {
    this.employeeService.count().subscribe(
      c => {
        console.log('count', c);
      }
    );

  }
}
