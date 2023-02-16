import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

 employeeForm!:FormGroup;

 constructor(private empService:EmployeeService,private router:Router,private route:ActivatedRoute){}

 ngOnInit() {
   this.initForm()
 }


onclose(){
 
    this.router.navigate(['/list'])

 
}

onSubmit(){
  this.empService.addEmployee(this.employeeForm.value)
  this.router.navigate(['/list']);
  
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
