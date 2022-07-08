import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/service/interface/Persona';
import { HomeModalComponent } from '../home-modal/home-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login:any;


 
  constructor(private perso:PersonaService,private loginservice:LoginServiceService,private modalService:NgbModal) { }

    persona!: Persona  ;
    persoNueva:boolean = true;

  ngOnInit(): void {
     
    this.getById(1);
    this.loginservice.LogState().subscribe((login) => (this.login = login));
  }
  
  ngetById(id: number) {
    this.perso.getById(id).subscribe (
			data => { this.persona = data; }
		);
  }
getById(id:number){
  this.perso.getById(id).subscribe(
  data=>{this.persona=data}

  );
}
getAll() {
  this.perso.getAll().subscribe (
    data => { 
      this.persona = data;
      //console.log(this.educacion)
    }
  );
  
}
delete(id: number) {
  this.perso.delete(id).subscribe (
    data => { this.persona = data; }
  );
}
save(persona:any) {
  this.perso.save(persona).subscribe (
    data => { this.persona = data; }
  );
}


update(id: number, persona: any) {
  this.perso.update(id,persona).subscribe (
    data => { this.persona = data; }
  );
}
abrirModal(id:any){
  const modalRef = this.modalService.open(HomeModalComponent,  { centered: true });        
  modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal

  modalRef.result.then((data) => {
    this.ngOnInit();
  }, (reason) => {
    alert("no funciono")
  })
  
}
}

  



