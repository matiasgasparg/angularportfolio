import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Login } from 'src/app/service/interface/Persona';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public sesion:Login={username:"",password:""}
  constructor(private api:PersonaService,private router:Router){}

  ngOnInit(): void {
  }
  logear(){
     this.api.logearServicio(this.sesion)  
  }
  volverAlHome(){
    this.router.navigate(['']);
  }
}