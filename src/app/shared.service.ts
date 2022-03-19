import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:53861/api";

  constructor(private http:HttpClient) { }

getDonorList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/donor');
}

addDonor(val:any){
  return this.http.post(this.APIUrl+'/Donor',val)
}

getSingleDonorList(val:any){
  return this.http.get(this.APIUrl+'/DonorSearch/'+val)
}

}
