import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Persona } from 'src/app/service/interface/Persona';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aboutmemodal',
  templateUrl: './aboutmemodal.component.html',
  styleUrls: ['./aboutmemodal.component.css']
})
export class AboutmemodalComponent implements OnInit {
  @Input()  id!:number; 

  persona!:Persona;
  formulario!:FormGroup

  constructor(public activeModal: NgbActiveModal, private personaService:PersonaService, private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      ubicacion:[''],
      acerca: [''],
      telefono:[''],

  })

}

 
  ngOnInit(): void {
    this.getById(this.id)
  }

  cerrarModal(){
    this.activeModal.close();
  }
  getById(id: number) {
    // console.log(this.id)
     this.personaService.getById(id).subscribe (
             data => {
          this.persona = data; 
          console.log(this.persona)
          this.editarForm(this.persona)
         }
         );

}
editarForm(sobremi:any){
  this.formulario.setValue( {
    
    acerca: sobremi.acerca,
    telefono:sobremi.telefono,
    ubicacion:sobremi.ubicacion,

  });
}

actualizarSobreMi(){
  
  this.armar()
  console.log(this.persona)
  this.personaService.update(this.id,this.persona).subscribe (
    data => {      
    
      this.cerrarModal()
    }
  );
}

armar(){
  
    this.persona.acerca = this.formulario.value.acerca;
    this.persona.telefono=this.formulario.value.telefono
    this.persona.ubicacion = this.formulario.value.ubicacion;
}

}