import { Injectable } from '@angular/core';
import { Airline } from './airline';
import { HttpClient} from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

   //declare variables --global
   airlines: Airline[];
   formData: Airline = new Airline();

  constructor(private httpClient : HttpClient) { }

     //get All Employees orMethod for Binding all Employees
   getAllAirlines(){
    this.httpClient.get(environment.apiUrl+'/api/airlines')
     .toPromise().then(response =>
      this.airlines= response as Airline[] );
      
}
 //get a particular Employee
 getAirline(flightId: number): Observable <any>{
  return this.httpClient.get(environment.apiUrl+'/api/airlines/' + flightId);
}
  //insert Employee
  insertAirline(fly: Airline): Observable <any>{
    return this.httpClient.post(environment.apiUrl+'/api/airlines' , fly);
 }

 //update Employee
 updateAirline(fly: Airline): Observable <any>{
  return this.httpClient.put(environment.apiUrl+'/api/airlines/' , fly);
}

 //delete Employee
 deleteAirline(flightId: number): Observable <any>{
  return this.httpClient.delete(environment.apiUrl+'/api/airlines/' + flightId);
}
}
