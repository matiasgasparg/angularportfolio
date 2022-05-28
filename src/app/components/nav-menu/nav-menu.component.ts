import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';

import { Redes } from 'src/app/service/interface/Redes';
import { AutenticationService } from 'src/app/servicios/autentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

 

  public red:Redes ={
    idred:"" , nombre: "", url: "", fotourl: "", persona:""
  }
  constructor(private api:PersonaService,private aut:AutenticationService) { }

  ngOnInit(): void {
    this.getByIdRed(1);
  }
getByIdRed(id:number){
  this.api.getById(id).subscribe(
  data=>{this.red=data}

  )};
  redirigir(url:string){
    window.open(url,"_blank")
  }

}
