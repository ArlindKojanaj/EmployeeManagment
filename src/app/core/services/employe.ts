export class Employe {

    
  //  public id: number,
    public firstName: string
    public lastName: string
    public  dob: number
    public email: string
    public phone:number
    public  note: string
    public startDate: number
    public  endDate: number
    public repeatEvery: number

    constructor(firstName: string, 
                laName: string,
                dbirth: number, 
                emaiil:string,
                phonee:number,
                notee:string,
                startDate:number,
                endDate:number,
                repeatEvery:number) {
      this.firstName =firstName ;
      this.lastName = laName;
      this.dob = dbirth;
      this.email = emaiil;
      this.phone=phonee;
      this.note=notee;
      this.startDate=startDate;
      this.endDate=endDate;
      this.repeatEvery=repeatEvery
    }
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