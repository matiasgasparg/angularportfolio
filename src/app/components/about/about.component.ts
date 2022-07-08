import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/service/interface/Persona';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutmemodalComponent } from '../aboutmemodal/aboutmemodal.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  id:number =1
  persona!: Persona ;
  login:any;
  constructor(
    private perServ:PersonaService, private modalService:NgbModal, private loginService:LoginServiceService
  ) { }

   
  getById(id:number){
    this.perServ.getById(id).subscribe(
    data=>{this.persona=data}
  
    );
  }
  update(id: number, profile: any) {
    this.perServ.update(id,this.persona).subscribe (
      data => { this.persona = data; }
    );
  }
  ngOnInit(): void {
    this.getById(this.id) 
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
    
  }

  abrirModal(id:any){
 
    console.log(id)
    const modalRef = this.modalService.open(AboutmemodalComponent, { centered: true }   );   //{ centered: true }     
    modalRef.componentInstance.id = id;     
    modalRef.result.then((data) => {
      console.log("pasa por aca?")
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

}
