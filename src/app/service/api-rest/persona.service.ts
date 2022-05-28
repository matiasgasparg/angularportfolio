import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Login, Persona } from '../interface/Persona';
import { AutenticationService } from 'src/app/servicios/autentication.service';
import { environment } from 'src/environments/environment.prod';
import { Edu } from '../interface/Educacion';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    private url:string=environment.URL
    private token:string=""
    constructor(private api: HttpClient, private autorizacion:AutenticationService) { }

  getToken(){ 
    let tk = localStorage.getItem('token')
    if(tk!==null){
      this.token=tk;
    }
    return this.token;
  }

  getById(id: number): Observable<any>{
    return this.api.get(`https://portfolio-api3320.herokuapp.com/api/personas/${id}`);

  }
  update(id:number, persona:any):Observable<any>{
    return this.api.put(`/---------/${id}`,persona);
  }
  delete(id:number):Observable<any>{
    return this.api.delete(`/---------/${id}`);
  }

 
  getByIns(componente:string): Observable<any>{
    return this.api.get(`${this.url}/api/${componente}`);

  }
  updateIns(id:number, edu:any):Observable<any>{
    return this.api.put(`/---------/${id}`,edu);
  }
  deleteIns(id:number):Observable<any>{
    return this.api.delete(`/---------/${id}`);
  }
  
  logearServicio(log:Login){
        return this.api.post(this.url+"/api/login",log).subscribe((data:any)=>{
          this.token=data.tokenDeAcceso
          localStorage.setItem('token',this.token);
          this.autorizacion.modoEdicion();
          location.reload()
          
        })
}
}