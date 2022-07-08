import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {


url2:string="https://portfolio-api3320.herokuapp.com/api"

constructor(private http: HttpClient) { }

getById(id: number): Observable<any> {
  return this.http.get(this.url2 + `/educacion/${id}`);
}
getAll(): Observable<any> {
  console.log("pasa por getAll?")
  return this.http.get(this.url2+'/educacion');
}
update(id: number, educacion: any): Observable<any>{
  return this.http.put(this.url2 + `/educacion/${id}`, educacion);
}

delete(id: number): Observable<any>{
  return this.http.delete(this.url2 + `/educacion/${id}`);
}
save(educacion:any) : Observable<any>{
 return this.http.post(this.url2 + `/educacion/`, educacion);
}
}
