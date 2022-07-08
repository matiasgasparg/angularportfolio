import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillServiceService } from 'src/app/service/api-rest/skill-service.service';
import { Skill } from 'src/app/service/interface/skills';

@Component({
  selector: 'app-skillcircle-modal',
  templateUrl: './skillcircle-modal.component.html',
  styleUrls: ['./skillcircle-modal.component.css']
})
export class SkillcircleModalComponent implements OnInit {

  @Input()  id!:number; 
  skill!: Skill;
  formulario!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private skillService:SkillServiceService,  private fb: FormBuilder) {
      
    this.formulario = this.fb.group({
      idskill: [''],
      titulo: [''],
      dominio: [''],
      persona: ['']      
      
    })


   }

  ngOnInit(): void {
    console.log(this.id)
    this.getById(this.id)
  }
  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
    this.skillService.getById(id).subscribe (
            data => {
              //console.log(data) 
              this.skill = data;      
              this.editarForm(data);
        }
        );
          
  }

  editarForm(skill:Skill){
    console.log(skill)
    this.formulario.setValue( {
      idskill: skill.idskill,
      titulo: skill.titulo,
      dominio: skill.dominio,
      persona: skill.persona
    });
  }

  guardarSkill(){
    this.skillService.update(this.id, this.formulario.value).subscribe (
      data => {       
        this.cerrarModal();
      }
    ); 
  }
}
