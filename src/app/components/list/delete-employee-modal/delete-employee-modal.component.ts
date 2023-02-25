import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employe } from 'src/app/core/services/employe';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.scss']
})
export class DeleteEmployeeModalComponent {
employe: Employe;
id:number;
   
  constructor(private route:ActivatedRoute,
              private emplyeeService:EmployeeService,
            private router:Router ){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    this.id=+params['id']
    this.employe=this.emplyeeService.getEmploye(this.id)
    
    })
  }

  onNavigate(){
    this.router.navigate(['/list'])
}

onDeleteRecipe() {
  this.emplyeeService.deleteEmployee(this.id);
  this.router.navigate(['/list']);

}

}