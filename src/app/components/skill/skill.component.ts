import { Component, OnInit } from '@angular/core';


import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Laboral } from 'src/app/service/interface/laboral';
import { AutenticationService } from 'src/app/servicios/autentication.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
expList!:Laboral[];
componente:string="laborales"
  constructor(
    private api:PersonaService,private aut:AutenticationService
  ) { }
  ngOnInit(): void {
    this.datos()
  }

  datos(){
    this.api.getByIns(this.componente).subscribe((datos) => {
      console.log(datos)  
      this.expList = datos});
    
  }
}