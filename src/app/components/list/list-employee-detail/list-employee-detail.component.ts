import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employe } from 'src/app/core/services/employe';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-list-employee-detail',
  templateUrl: './list-employee-detail.component.html',
  styleUrls: ['./list-employee-detail.component.scss']
})
export class ListEmployeeDetailComponent implements OnInit {
  employe:Employe
  id:number;
   
  constructor(private route:ActivatedRoute,private emplyeeService:EmployeeService,private router:Router ){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    this.id=+params['id']
    this.employe=this.emplyeeService.getEmploye(this.id)
    console.log(this.employe)
    })
  }

  onNavigate(){
    this.router.navigate(['/list'])

  }
}
