import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { AutenticationService } from 'src/app/service/api-rest/autentication.service';
import { environment } from 'src/environments/environment.prod';
import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    private url:string=environment.URL
    constructor(private http: HttpClient) {}


    url2: string = "https://portfolio-api3320.herokuapp.com/api";

    getById(id: number): Observable<any> {
      return this.http.get(this.url2 + `/personas/${id}`);
    }
    getAll(): Observable<any> {
      console.log("pasa por getAll?")
      return this.http.get(this.url2+'/personas');
    }
    //terminar en algun momento
    update(id: number, persona: any): Observable<any>{
      return this.http.put(this.url2 + `/personas/${id}`, persona);
    }
  
    //terminar en algun momento
    delete(id: number): Observable<any>{
      return this.http.delete(this.url2 + `/personas/${id}`);
    }
   save(persona:any) : Observable<any>{
     return this.http.post(this.url2 + `/personas/`, persona);
   }
   getByIns(componente:string):Observable<any>{
    return this.http.get(`${this.url}/api/${componente}`);

  
  }
	


}