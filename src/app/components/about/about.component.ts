import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/service/interface/Persona';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { AutenticationService } from 'src/app/servicios/autentication.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public url_foto:string="";

  public persona:Persona ={
    idpersona: "1", nombre: "", apellido: "", acerca: "", titulo: "", correo: "",
    telefono: "",
    ubicacion: "",
    fotourl: "",
    username:"",
    password:"",
    token:"",
  }
  constructor(
    private api:PersonaService,private aut:AutenticationService
  ) { }

  ngOnInit(): void {
    this.getById(1);
  }
  getById(id:number){
    this.api.getById(id).subscribe(
    data=>{this.persona=data}
  
    );
  }

}
