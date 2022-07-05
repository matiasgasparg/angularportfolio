import { Component, OnInit } from '@angular/core';
import { ExpServiceService } from 'src/app/service/api-rest/exp-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModalComponent } from '../skill-modal/skill-modal.component';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { Laboral } from 'src/app/service/interface/laboral';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(
    private expServ:ExpServiceService, private modalService: NgbModal, private loginService:LoginServiceService
  ) { }
  login:any;

  experiencia!:Laboral[];

expNueva:boolean = true;
getById(id: number) {
  this.expServ.getById(id).subscribe (
    data => { this.experiencia = data; }
  );
}

  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 

    this.getAll()

    console.log(this.login)
   }
   
   update(id: number, laboral: any) {
    this.expServ.update(id,laboral).subscribe (
			data => { this.experiencia = data; }
		);
  }
 

   getAll() {
    this.expServ.getAll().subscribe (
			data => {this.experiencia = data}
		);
  }

  abrirModal(id:any){
    const modalRef = this.modalService.open(SkillModalComponent, { centered: true }   );   //{ centered: true }     
    modalRef.componentInstance.id = id;  
    
    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
  }
  save(laboral:any) {
    this.expServ.save(laboral).subscribe (
			data => { this.experiencia = data; }
		);
  }
  abrirModalAgregar(){
    const modalRef = this.modalService.open(SkillModalComponent, { centered: true }   );   //{ centered: true }  
   modalRef.componentInstance.expNueva = this.expNueva;     // pasa un buleano para avisar al modal que es un objeto a crear

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    }) 
  }  
    delete(id: number) {
      this.expServ.delete(id).subscribe (
        data => { this.experiencia = data; }
      );
    }
    
  

  borrarExperiencia(id:any){
    console.log("Eliminado")
     this.expServ.delete(id).subscribe (
       data => { this.ngOnInit() }
     );
   }
}