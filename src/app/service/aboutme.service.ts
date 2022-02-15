import { Injectable } from '@angular/core';
import{HttpClient,HttpHandler,HttpHeaders} from "@angular/common/http"
import { Aboutme } from '../aboutme';
import { ABOUTME } from 'src/app/mock-aboutme';
import {Observable,of} from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {
  private apiUrl="http://localhost:5000/aboutme"

  constructor(
    private http:HttpClient

  ) { }
  obtenerTexto(): Observable <any> {

    return this.http.get<Aboutme[]>(this.apiUrl)
}

}
