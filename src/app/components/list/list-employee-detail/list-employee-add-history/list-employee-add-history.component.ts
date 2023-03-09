import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-list-employee-add-history',
  templateUrl: './list-employee-add-history.component.html',
  styleUrls: ['./list-employee-add-history.component.scss']
})
export class ListEmployeeAddHistoryComponent implements OnInit {
  
  historyForm!:FormGroup;
  id:number
   constructor(private router:Router,private employeService:EmployeeService,private route:ActivatedRoute){}

   ngOnInit(): void {
    this.route.params.
   subscribe(
    (params:Params)=>{
    this.id=+params['id']
     this.initForm()
    })
   }
  
   onSubmit(){


      this.employeService.updateHistory(this.id,this.historyForm.value['category'],
                                         this.historyForm.value['notes'],
                                         this.historyForm.value['repeatEvery'],
                                         this.historyForm.value['startDate'],
                                         this.historyForm.value['endDate'])

                                        this.router.navigate([`/list/${this.id}`]);

                                        // console.log(this.employeService.getEmploye(this.id))
   }

  onclose(){
    this.router.navigate(['/list'])
}

private initForm() {
  let insertionDate =null;
  let dateLastMdified = null;
  let category = null;
  let notes='';
  let repeatEvery=null;
  let startDate=null;
  let endDate=null;


  
    const employeee=this.employeService.getEmploye(this.id)
    category=employeee.category
    notes=employeee.notes
    repeatEvery=employeee.repeatEvery
    startDate=employeee.startDate
    endDate=employeee.endDate
    



  this.historyForm = new FormGroup({

    category: new FormControl(category, Validators.required),
    notes: new FormControl(notes, Validators.required),
    repeatEvery: new FormControl(repeatEvery, Validators.required),
    startDate: new FormControl(startDate, Validators.required),
    endDate: new FormControl(endDate, Validators.required),
  
    
  });
}
}
