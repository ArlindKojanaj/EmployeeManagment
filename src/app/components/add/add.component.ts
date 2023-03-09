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
    this.empService.updateEmployeeNew(this.id,this.employeeForm.value['id'],
    this.employeeForm.value['firstName'],
    this.employeeForm.value['lastName'],
    this.employeeForm.value['dob'],
    this.employeeForm.value['phone'],
    this.employeeForm.value['email'])
  }
  else{
    this.empService.addEmployee(this.employeeForm.value)
    console.log(this.empService.getEmployye())
  }
  this.router.navigate(['/list']);
  
}


private initForm() {
  let id=null;
  let firstName = '';
  let lastName = '';
  let dob=0;
  let email=''
  let phone=null;

  if(this.editMode){
    const employeee=this.empService.getEmploye(this.id)
    id=employeee.id
    firstName=employeee.firstName
    lastName=employeee.lastName
    dob=employeee.dob
    email=employeee.email
    phone=employeee.phone
  }

  this.employeeForm = new FormGroup({

    id: new FormControl(id, Validators.required),
    firstName: new FormControl(firstName, Validators.required),
    lastName: new FormControl(lastName, Validators.required),
    dob: new FormControl(dob, Validators.required),
    email: new FormControl(email, Validators.required),
    phone: new FormControl(phone, Validators.required),
    
  });
}
}
