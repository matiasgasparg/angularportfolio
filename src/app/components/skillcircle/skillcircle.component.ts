import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { Skill } from 'src/app/service/interface/skills';
import { AutenticationService } from 'src/app/service/api-rest/autentication.service';
import { SkillServiceService } from 'src/app/service/api-rest/skill-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { SkillcircleModalComponent } from '../skillcircle-modal/skillcircle-modal.component';

@Component({
  selector: 'app-skillcircle',
  templateUrl: './skillcircle.component.html',
  styleUrls: ['./skillcircle.component.css']
})
export class SkillcircleComponent implements OnInit {
  login:any;

  constructor(
    private skillService:SkillServiceService,  private modalService: NgbModal, private loginService:LoginServiceService 
  ) { }
  skill!: Skill [] ;


  getById(id: number) {
    this.skillService.getById(id).subscribe (
      data => { this.skill = data; }
    );
  }
 
  getAll() {
    this.skillService.getAll().subscribe (
      data => { this.skill = data; }
    );
  }
  delete(id: number) {
    this.skillService.delete(id).subscribe (
      data => { this.skill = data; }
    );
  }
 
  save(skill:any) {
    this.skillService.save(skill).subscribe (
      data => { this.skill = data; }
    );
  }
 
  update(id: number, skill: any) {
    this.skillService.update(id,skill).subscribe (
      data => { this.skill = data; }
    );
  }
 
 
  ngOnInit(): void {
   this.loginService.LogState().subscribe((login) => (this.login = login));  
   this.getAll()
 }
 

  skills: any[] = []; 
 abrirModal(id:number){
   const modalRef = this.modalService.open(SkillcircleModalComponent, { centered: true, size: 'sm' }   );   //{ centered: true }     
   modalRef.componentInstance.id = id;      
   modalRef.result.then((data) => {
     this.ngOnInit();
   }, (reason) => {
     alert("Algo anda Mal")
   })
 
 }
 
 }
 
