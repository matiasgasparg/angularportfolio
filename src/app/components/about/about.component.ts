import { Component, Input, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/aboutme';
import { ABOUTME } from 'src/app/mock-aboutme';
import { AboutmeService } from 'src/app/service/aboutme.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  datosAbout:any;

  constructor(
    private aboutme:AboutmeService
  ) { }

  ngOnInit(): void {
   this.aboutme.obtenerTexto().subscribe((aboutme)=>{
    this.datosAbout=aboutme;
   })
    };

}
