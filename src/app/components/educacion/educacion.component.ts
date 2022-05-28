import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/service/aboutme.service';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Edu } from 'src/app/service/interface/Educacion';
import { Persona } from 'src/app/service/interface/Persona';
import { AutenticationService } from 'src/app/servicios/autentication.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
 
EduList!:Edu[];
componente:string="educacion"

   
  constructor(private api:PersonaService,private aut:AutenticationService) { }

  ngOnInit(): void {
    this.datos()
  }
  datos(){
    this.api.getByIns(this.componente).subscribe((datos) => {
      console.log(datos)  
      this.EduList = datos});
    
  }
}
