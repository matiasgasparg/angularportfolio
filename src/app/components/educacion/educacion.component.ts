import { Component, OnInit } from '@angular/core';
import { AboutmeService } from 'src/app/service/aboutme.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
eduList:any;
  constructor(
    private datos:AboutmeService

  ) { }

  ngOnInit(): void {
    this.datos.obtenerTexto().subscribe(datos=>{
     console.log(datos);
     this.eduList=datos.edu
    });
     }
}
