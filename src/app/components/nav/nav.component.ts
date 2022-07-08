import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Redes } from 'src/app/service/interface/Redes';
import { AutenticationService } from 'src/app/service/api-rest/autentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  login: any;

  red!:Redes[];
  componente:string="redes"
    constructor(
      private api:PersonaService,private aut:AutenticationService
    ,private router: Router, private loginService : LoginServiceService) { }
    ngOnInit(): void {
      this.datos()
      this.loginService.LogState().subscribe((login) => (this.login = login));    

    }
  
    datos(){
      this.api.getByIns(this.componente).subscribe((datos) => {
        console.log(datos)  
        this.red = datos});
      
    } 

  
  
    iniciarSesion(){
      this.router.navigate(['login']);   
    }
  
    cerrarSesion(){
      this.aut.cerrarSesion();
      this.router.navigate(['cerrarSesion']);   
     
    }
    logOut(): void {
      this.loginService.LogOut();
      this.router.navigate(['cerrarSesion']);   
    }
  }