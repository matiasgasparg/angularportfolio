import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpServiceService } from 'src/app/service/api-rest/exp-service.service';
import { Laboral } from 'src/app/service/interface/laboral';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent implements OnInit {

  @Input()  id!:number; 
  @Input() expNueva!:boolean;

  experiencia!:Laboral;
  formulario!:FormGroup
  constructor(public activeModal:NgbActiveModal,private experienciaService:ExpServiceService, private fb: FormBuilder) {

    this.formulario = this.fb.group({
    idlaboral: [''],
      puesto: [''],
      descripcion: [''],
      empresa: [''],
      inicio: [''],
      fin: [''],
      fotourl: [''],
      persona: ['']
  })
}

  ngOnInit(): void {
    if(!this.expNueva){
      this.getById(this.id)}    
    
  }

  cerrarModal(){
    this.activeModal.close();
  }
  getById(id: number) {
    //console.log(this.id)
    this.experienciaService.getById(id).subscribe (
            data => {
         this.experiencia = data; 
         //console.log(this.experiencia)
         this.editarForm(this.expNueva)
        }
        );

  }
  
  editarForm(experiencia:any){
    this.formulario.setValue( {
      idlaboral: this.experiencia.idlaboral,
      puesto: this.experiencia.puesto,
      descripcion: this.experiencia.descripcion,
      empresa: this.experiencia.empresa,
      inicio:this.experiencia.inicio,
      fin: this.experiencia.fin,
      fotourl: this.experiencia.fotourl,
      persona: this.experiencia.persona
    });
  }
  guardarExperiencia(){
    if(this.expNueva){
        this.crearExperiencia();      
    }else{
      this.actualizarExperiencia();
    }

  }
 

  crearExperiencia(){
    console.log(this.formulario.value)

    this.formulario.value.persona =1
    this.experienciaService.save(this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }

  actualizarExperiencia(){
    console.log(this.formulario.value)
    this.experienciaService.update(this.id, this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
}
