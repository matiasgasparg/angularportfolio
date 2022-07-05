import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url2: string = "https://portfolio-api3320.herokuapp.com/api/login";

  user: User = { username: "", password: "", token: "" };

  constructor(private api: HttpClient) {}
  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    return this.api.post(`https://portfolio-api3320.herokuapp.com/api/login`, this.user);
    
	}

}
