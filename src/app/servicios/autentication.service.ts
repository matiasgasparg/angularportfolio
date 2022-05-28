import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})

export class  AutenticationService {

  public autorizado=false;
  private url=environment.URL

  constructor(private api:HttpClient){
  }

  modoEdicion(){
    localStorage.setItem('sesion','true');
  }
  estaAutorizado(){
    async () => {
      this.checkToken()  
    }
    return this.autorizado

  }
  logout(){
    localStorage.clear()
    location.reload();
  }
  checkToken(){
    this.api.post(this.url+"tokenValido",localStorage.getItem('sesion')).subscribe(data=>{
      if(typeof(data)==='boolean'&& data){
        this.modoEdicion()
        this.autorizado=true;
      }else{
        localStorage.clear()
      }
   })
 }
}


