import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

 employeeForm!:FormGroup;

 constructor(private ls:ListComponent,private empService:EmployeeService,private router:Router){}

 ngOnInit() {
   this.initForm()
 }


onclose(){
  this.ls.addmode=false
  
}

onSubmit(){
  this.empService.addEmployee(this.employeeForm.value)
  // this.router.navigate(['/home']);
  // this.ls.addmode=false
}


private initForm() {
  let firstName = '';
  let lastName = '';
  let dob = '';
  let email=''

  this.employeeForm = new FormGroup({
    firstName: new FormControl(firstName, Validators.required),
    lastName: new FormControl(lastName, Validators.required),
    dob: new FormControl(dob, Validators.required),
    email: new FormControl(email, Validators.required),
    
  });
}
}
