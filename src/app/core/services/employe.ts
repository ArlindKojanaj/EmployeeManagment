export class Employe {

    
  //  public id: number,
    public firstName: string
    public lastName: string
    public  dob: number
    public email: string

    constructor(firstName: string, laName: string, dbirth: number, emaiil:string) {
      this.firstName =firstName ;
      this.lastName = laName;
      this.dob = dbirth;
      this.email = emaiil;
    }
    // "phone": string,
    // "address": string,
    // "city": string,
    // "zip": string,
    // "country": string,
    // "salary": number,
    // "currency": string,
    // "hireDate": number,
    // "resignDate": number,
    // "trialPeriod": number,
    // "resignPeriod": number,
    // "endTrialDate": number,
    // "effectiveResignDate": number,
    // "status": string,
    // "employeeHistoryId": number,
    // "note": string,
    // "employeeId": number,
    // "category": number,
    // "schedulerId": number,
    // "schedulerEnabled": true,
    // "startDate": number,
    // "endDate": number,
    // "repeatEvery": number
  }