import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Redes } from 'src/app/service/interface/Redes';
import { AutenticationService } from 'src/app/servicios/autentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  red!:Redes[];
  componente:string="redes"
    constructor(
      private api:PersonaService,private aut:AutenticationService
    ) { }
    ngOnInit(): void {
      this.datos()
    }
  
    datos(){
      this.api.getByIns(this.componente).subscribe((datos) => {
        console.log(datos)  
        this.red = datos});
      
    }
  }