import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Persona } from 'src/app/service/interface/Persona';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
persona! :Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
   
  }

}

