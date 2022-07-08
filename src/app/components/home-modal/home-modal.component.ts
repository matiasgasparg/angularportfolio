import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/service/interface/Persona';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { PersonaService } from 'src/app/service/api-rest/persona.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {
  @Input()  id!:number; 
  @Input() persoNueva!:boolean;
  persona!:Persona;
  formulario!:FormGroup;
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder,private perso:PersonaService) { 
    this.formulario=this.fb.group({
      nombre:[''],
      apellido:[''],
      titulo:[''],     
      fotourl:[''],
  
    })
  }

  ngOnInit(): void {
    if(!this.persoNueva){
      this.getById(this.id)}    
    
  }
  cerrarModal(){
    this.activeModal.close();
  }
  getById(id: number) {
    this.perso.getById(id).subscribe (
            data => {
         this.persona = data; 
         //console.log(this.educacion)
         this.editarForm(this.persona)
        }
        )};

        editarForm(persona:any){
          this.formulario.setValue( {
            nombre: persona.nombre,
            apellido:persona.apellido,
            titulo:persona.titulo,
            fotourl:persona.fotourl,
          });
        }
      
     
actualizar(){
  
  this.armar()
  console.log(this.persona)
  this.perso.update(this.id,this.persona).subscribe (
    data => {      
    
      this.cerrarModal()
    }
  );
}
  

  armar(){

    this.persona.nombre = this.formulario.value.nombre;
    this.persona.apellido = this.formulario.value.apellido;
    this.persona.titulo = this.formulario.value.titulo;
    this.persona.fotourl=this.formulario.value.fotourl;
}

}

