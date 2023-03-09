import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import { api } from 'src/environments/environment';
import { Employe } from './employe';

export const EMPLOYEE = `${api}/employee`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeChanged=new Subject<Employe[]>()

  constructor(protected http: HttpClient, private httpBackend: HttpBackend) {}

//   public commesseNoIntercpetor(): Observable<Commessa []> {
//     const newHttpClient = new HttpClient(this.httpBackend);
//     return newHttpClient.get<HttpResponse<Commessa []>>(COMMESSE, {
//       observe: 'response',
//     }).pipe(
//       map(res => {
//           const ts: any = res.body;
//           return ts;
//         }
//       )
//     );
//   }

  public count(): Observable<Number> {
    return this.http.get<HttpResponse<Number>>(`${EMPLOYEE}/count`, {
      observe: 'response',
    }).pipe(
      map(res => {
          const ts: any = res.body;
          return ts;
        }
      )
    );
  }

//   public commesseSize(): Observable<number> {
//     let params = new HttpParams();
//     params = params.set('pageSize', '1');
//     return this.http.get<HttpResponse<number>>(COMMESSE, {
//       observe: 'response',
//       params
//     }).pipe(
//       map(res => {
//           console.log('headers', res.headers.keys());
//           return +res.headers.get('listsize');
//         }
//       )
//     );
//   }



private employe:Employe[]=[
  new Employe(
    1213,'tesi','test',200,'vlora@VideoColorSpace.com',+35520202020,'Employee Expiration Smart Card',2022,2023,5,111
  ), new Employe(
    1312,'testtt','testtttt',200,'vloraaaa@VideoColorSpace.com',+355204050,'Employee Expiration Smart Card',2020,2024,3,1122)
]


 getEmployye() {
  return this.employe.slice();
 }

 getEmploye(index:number){
   return this.employe[index]
 }

 addEmployee(employ:Employe){
  this.employe.push(employ)
  this.employeeChanged.next(this.employe.slice())
}

updateHistory(index:number,
              category:number,
              notes:string,
              repeatEvery:number,
              startDate:number,
              endDate:number){

  this.employe[index] = Object.assign({}, this.employe[index], 
                                          {category :`${category}` },
                                          {notes:`${notes}`},
                                          {repeatEvery:`${repeatEvery}`},
                                          {startDate:`${startDate}`},
                                          {endDate:`${endDate}`});
      
      this.employeeChanged.next(this.employe.slice())
}

  
updateEmployeeNew(index:number,
                  id:number,
                  firstName:string,
                  lastName:string,
                  dob:number,
                  phone:number,
               email:string){

  Object.keys(this.employe[index]).forEach(() => {
  
    
        this.employe[index].id=id
        this.employe[index].firstName=firstName
        this.employe[index].lastName=lastName
        this.employe[index].dob=dob
        this.employe[index].phone=phone
        this.employe[index].email=email
})
  

    
  this.employeeChanged.next(this.employe.slice())
}


//  updateEmployee(index:number,editEmployee:Employe){
//   this.employe[index]=editEmployee
//   this.employeeChanged.next(this.employe.slice())
//  }

 deleteEmployee(index: number) {
  this.employe.splice(index, 1);
  this.employeeChanged.next(this.employe.slice());
}
 
}