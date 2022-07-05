import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Skills } from 'src/app/service/interface/skills';
import { AutenticationService } from 'src/app/servicios/autentication.service';

@Component({
  selector: 'app-skillcircle',
  templateUrl: './skillcircle.component.html',
  styleUrls: ['./skillcircle.component.css']
})
export class SkillcircleComponent implements OnInit {
  datosSkills!:Skills[];
  componente:string="skills";
  constructor(
    private api:PersonaService,private aut:AutenticationService
  ) { }

  ngOnInit(): void {
    this.datos()
  }
  datos(){
    this.api.getByIns(this.componente).subscribe((datos) => {
      console.log(datos)  
      this.datosSkills = datos});
    
  }
}
