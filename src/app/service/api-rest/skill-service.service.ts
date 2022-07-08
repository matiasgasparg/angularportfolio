import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  constructor(private http: HttpClient) {}

  url2:string="https://portfolio-api3320.herokuapp.com/api"

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/skills/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/skills');
	}
  //terminar en algun momento
  update(id: number, skill: any): Observable<any>{
    return this.http.put(this.url2 + `/skills/${id}`, skill);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/skills/${id}`);
  }
 save(skill:any) : Observable<any>{
   return this.http.post(this.url2 + `/skills/`, skill);
 }
}
