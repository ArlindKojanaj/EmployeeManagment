import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {Commessa} from '../model/commessa';
import {map} from 'rxjs/operators';

export const COMMESSE = 'https://panta.coopservice.it/asset-rs/assets/commesse';
export const EMPLOYEE = `/employee`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(protected http: HttpClient, private httpBackend: HttpBackend) {
  }


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

}