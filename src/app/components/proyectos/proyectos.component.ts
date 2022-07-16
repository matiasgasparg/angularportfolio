import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { ProyectoService } from 'src/app/service/api-rest/proyecto.service';
import { Proyecto } from 'src/app/service/interface/proyecto';
import { ProyectosModalComponent } from '../proyectos-modal/proyectos-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  login:any;
   
  constructor(private pro:ProyectoService,private loginService:LoginServiceService,private modalService:NgbModal) { }
  proyecto!: Proyecto [] ;
  proNueva:boolean = true;
  

  ngetById(id: number) {
    this.pro.getById(id).subscribe (
			data => { this.proyecto = data; }
		);
  }

  getAll() {
    this.pro.getAll().subscribe (
			data => { 
        this.proyecto = data;
      }
		);
    
  }
  delete(id: number) {
    this.pro.delete(id).subscribe (
			data => { this.proyecto = data; }
		);
  }

  save(proyecto:any) {
    this.pro.save(proyecto).subscribe (
			data => { this.proyecto = data; }
		);
  }

  update(id: number, proyecto: any) {
    this.pro.update(id,proyecto).subscribe (
			data => { this.proyecto = data; }
		);
  }


  ngOnInit(): void {
     
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.login = login));
  }
 

  abrirModal(id:any){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  crearProyectoModal(){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });        
    modalRef.componentInstance.proNueva = this.proNueva;    
    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  borrarProyecto(id:any){
    this.pro.delete(id).subscribe (
      data => { this.ngOnInit() }
    );
  }

}

