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



private employe:Employe[]=[{
  id:11,
  firstName:'Test',
  lastName:'Test',
  dob:12001,
  email:'test@test.com'
 },{
  id:11,
  firstName:'Test',
  lastName:'Test',
  dob:12001,
  email:'test@test.com'
 }]


 getEmployye() {
  return this.employe.slice();
 }

 addEmployee(employ:Employe){
  this.employe.push(employ)

 }


 
}