import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { Educacion } from 'src/app/service/interface/Educacion';
import { EducacionServiceService } from 'src/app/service/api-rest/educacion-service.service';
import { EducacionModalComponent } from '../educacion-modal/educacion-modal.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
 
  login:any;

   
  constructor(private edu:EducacionServiceService,private loginService:LoginServiceService,private modalService:NgbModal) { }
  educacion!: Educacion [] ;
  eduNueva:boolean = true;
  
  ngetById(id: number) {
    this.edu.getById(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  getAll() {
    this.edu.getAll().subscribe (
			data => { 
        this.educacion = data;
        //console.log(this.educacion)
      }
		);
    
  }
  delete(id: number) {
    this.edu.delete(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  save(educacion:any) {
    this.edu.save(educacion).subscribe (
			data => { this.educacion = data; }
		);
  }

  update(id: number, educacion: any) {
    this.edu.update(id,educacion).subscribe (
			data => { this.educacion = data; }
		);
  }


  ngOnInit(): void {
     
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.login = login));
  }
 

  abrirModal(id:any){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  crearEducacionModal(){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.eduNueva = this.eduNueva;     // pasa un buleano para avisar al modal que es un objeto a crear

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  borrarEducacion(id:any){
    this.edu.delete(id).subscribe (
      data => { this.ngOnInit() }
    );
  }

}