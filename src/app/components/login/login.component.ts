import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService]
})
export class LoginComponent implements OnInit {

  constructor(public dialogService: DialogService) {}

  loginForm: any;

  submitted = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
        'login': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(){ 
    this.submitted = true;

    const ref = this.dialogService.open(ListComponent, {
      header: 'Insert Data!',
      width: '33%',
      height: 'auto'
  });
  }
}
