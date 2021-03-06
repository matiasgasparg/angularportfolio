import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {Persona } from '../interface/Persona';
import { LoginServiceService } from './login-service.service';
import { User } from '../interface/user';



@Injectable({
  providedIn: 'root'
})

export class  AutenticationService {

   url:string ="https://portfolio-api3320.herokuapp.com/api/login"
  user:User={
    username: '',
    password: '',
    token:""
  }
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  constructor(private api:HttpClient,private loggedService:LoginServiceService){
    this.currentUserSubject = new BehaviorSubject<any >(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}
loggedIn(): void {
  this.loggedService.LogIn()
}
loggedOut(): void {
  this.loggedService.LogOut();
}
logState(): void {
  this.loggedService.LogState();
}
iniciarSesion(username: string, password: string) {
  this.user.username = username;
  this.user.password = password;
  console.log("llega aca?")
    return this.api.post<any>(this.url, this.user)
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log("funciona esto?", this.currentUserSubject.value.token)
            this.loggedIn();
            return user;
           
        }));
        
}
cerrarSesion() {
  // remove user from local storage to log user out
  sessionStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
  this.loggedOut();
}

 
}


