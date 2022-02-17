import { Component, Input, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/aboutme';
import { ABOUTME } from 'src/app/mock-aboutme';
import { AboutmeService } from 'src/app/service/aboutme.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
aboutme:any;

  constructor(
    private datos:AboutmeService
  ) { }

  ngOnInit(): void {
   this.datos.obtenerTexto().subscribe(datos=>{
    console.log(datos);
    this.aboutme=datos
   });
    }

}
