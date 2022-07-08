import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Persona } from 'src/app/service/interface/Persona';
import { AutenticationService } from 'src/app/service/api-rest/autentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public url_foto:string="";

  public persona:Persona ={
    idpersona: 1, nombre: "", apellido: "", acerca: "", titulo: "", correo: "",
    telefono: "",
    ubicacion: "",
    fotourl: "",
    password:"",
    username:"",
    token:""
  }
  constructor(private api:PersonaService,private aut:AutenticationService) { }

  ngOnInit(): void {
    this.getById(1);
  }
getById(id:number){
  this.api.getById(id).subscribe(
  data=>{this.persona=data}

  );
}
}

  



