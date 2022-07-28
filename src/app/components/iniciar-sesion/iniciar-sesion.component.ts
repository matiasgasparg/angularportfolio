import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/api-rest/login-service.service';
import { PersonaService } from 'src/app/service/api-rest/persona.service';
import { UserService } from 'src/app/service/api-rest/user.service';
import { Persona } from 'src/app/service/interface/Persona';
import { AutenticationService } from 'src/app/service/api-rest/autentication.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  hide = true;
  usuario:string = "";
  password:string = "";
  loading:boolean =false;
  persona!:Persona;

  form:FormGroup;

  constructor(private router: Router, private loginService: LoginServiceService, private formBuilder: FormBuilder, private autentificacionServ:AutenticationService,private userService:UserService) {
    this.form = this.formBuilder.group(
        {
          username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
          password: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
        } 
      )
  }
  

  

  get Username(){
    return this.form.get("username"); 
  }
      
  get Password(){
    return this.form.get("password");
  }

  ngOnInit(): void {
  }
  loginFalso() {
    this.userService.login("", "").subscribe(
      data => {
        this.persona = data;
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverHome();
      }
    );
  }

  volverHome(){
    this.router.navigate([''])
  }

  login() {
    this.userService.login( this.form.value.username, this.form.value.password).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverHome();
      }
    );
  }
  


  

  

    iniciarSesion() {
    
    console.log(this.form.value);
    this.autentificacionServ.iniciarSesion(this.form.value.username, this.form.value.password).subscribe( data => {
      
      this.volverHome();
      /*
      this.loginService.setToken(data.token);
      if(data.token !== null){
        this.logIn();
      }
      */
     this.loading= false; 
     
    });
    
    
  }
 

}



















