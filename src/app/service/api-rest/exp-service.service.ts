import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpServiceService {

   url2:string="https://portfolio-api3320.herokuapp.com/api"

  constructor(private http: HttpClient) { }
  
  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/laboral/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/laboral');
	}
  update(id: number, experiencia: any): Observable<any>{
    return this.http.put(this.url2 + `/laboral/${id}`, experiencia);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/laboral/${id}`);
  }
 save(experiencia:any) : Observable<any>{
   return this.http.post(this.url2 + `/laboral/`, experiencia);
 }
}
