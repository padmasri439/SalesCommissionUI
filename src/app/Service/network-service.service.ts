import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  PATH_OF_API ="http://localhost:8080";

  headers: HttpHeaders = new HttpHeaders();

  constructor(private http : HttpClient) {
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getAllSales(){
    const api = this.PATH_OF_API + "/sales";
    return  this.http.get(api);
  }

  getCommissionByDate(date:any){
    const api = this.PATH_OF_API + "/sales/date?date="+date;
   return  this.http.get(api);
  }

  computeSalesAndSaveToDB(formData : FormData) {
    const api = this.PATH_OF_API + "/sales";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(api,formData.get('data'), { headers: headers }).subscribe(
      (data) => {
        console.log("Added in the db successfully")
      }
    );
  }

}
