import { Component, OnInit } from '@angular/core';

import { AboutmeService } from 'src/app/service/aboutme.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
expList:any;
  constructor(
    private datos:AboutmeService
  ) { }

  ngOnInit(): void {
    this.datos.obtenerTexto().subscribe(datos=>{
     this.expList=datos.exp
    });
     }
}