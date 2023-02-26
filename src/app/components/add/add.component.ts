import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ActivatedRoute,  Params,  Router } from '@angular/router';
import { Employe } from 'src/app/core/services/employe';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

 employeeForm!:FormGroup;
 id:number
 editMode=false
 constructor(private empService:EmployeeService,private router:Router,private route:ActivatedRoute){}

 ngOnInit() {
   
   this.route.params.
   subscribe(
    (params:Params)=>{
    this.id=+params['id']
    this.editMode=params['id'] != null
    // console.log(this.editMode)
    this.initForm()
   })
 }


onclose(){
 
    this.router.navigate(['/list'])

 
}

onSubmit(){
  if(this.editMode){
    this.empService.updateEmployee(this.id,this.employeeForm.value)
  }
  else{
    this.empService.addEmployee(this.employeeForm.value)
  }
  this.router.navigate(['/list']);
  
}


private initForm() {
  let firstName = '';
  let lastName = '';
  let dob=0;
  let email=''
  let phone=0

  if(this.editMode){
    const employeee=this.empService.getEmploye(this.id)
    firstName=employeee.firstName
    lastName=employeee.lastName
    dob=employeee.dob
    email=employeee.email
    phone=employeee.phone
  }

  this.employeeForm = new FormGroup({
    firstName: new FormControl(firstName, Validators.required),
    lastName: new FormControl(lastName, Validators.required),
    dob: new FormControl(dob, Validators.required),
    email: new FormControl(email, Validators.required),
    phone: new FormControl(phone, Validators.required),
    
  });
}
}
