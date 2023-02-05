import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {

 constructor(private ls:ListComponent){
  
 }
onclose(){
  this.ls.addmode=false

}

}
