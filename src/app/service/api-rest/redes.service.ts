import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  private url:string=environment.URL
  private token:string=""
  constructor(private api: HttpClient) { }
  getToken(){ 
    let tk = localStorage.getItem('token')
    if(tk!==null){
      this.token=tk;
    }
    return this.token;
  }
  getById(id: number): Observable<any>{
    return this.api.get("https://portfolio-api3320.herokuapp.com/api/redes/");

  }
  update(id:number, redes:any):Observable<any>{
    return this.api.put('/---------/1',redes);
  }
  delete(id:number):Observable<any>{
    return this.api.delete('/---------/1');
  }
}
