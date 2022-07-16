import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Proyecto } from 'src/app/service/interface/proyecto';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { ProyectoService } from 'src/app/service/api-rest/proyecto.service';
@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements OnInit {
  @Input()  id!:number; 
  @Input() proNueva!:boolean;

  proyecto!:Proyecto[];
  formulario!:FormGroup;
  constructor(public activeModal: NgbActiveModal, private proyectoService:ProyectoService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      idproyecto: [''],
      titulo: [''],
      descripcion: [''],
      url: [''],
      persona: ['']
    })
  }
    ngOnInit(): void {
      if(!this.proNueva){
        this.getById(this.id)}    
      
    }
    cerrarModal(){
      this.activeModal.close();
    }
    getById(id: number) {
      this.proyectoService.getById(id).subscribe (
              data => {
           this.proyecto = data; 
           this.editarForm(this.proyecto)
          }
          );
    }
          
          editarForm(pro:any){
            this.formulario.setValue( {
              idproyecto: pro.ideducacion,
              titulo: pro.titulo,
              descripcion: pro.descripcion,
              url: pro.url,
              persona: pro.persona
            });
          }
        
          guardarProyecto(){
            if(this.proNueva){
                this.crearProyecto();      
            }else{
              this.actualizarProyecto();
            }
        
          }
          crearProyecto(){
            this.formulario.value.persona = 1
            this.proyectoService.save(this.formulario.value).subscribe(
              data => {
                this.activeModal.close();
              }
            );
          }
          actualizarProyecto(){
            console.log(this.formulario.value)
            this.proyectoService.update(this.id, this.formulario.value).subscribe(
              data => {
                this.activeModal.close();
              }
            );
          }
  }

