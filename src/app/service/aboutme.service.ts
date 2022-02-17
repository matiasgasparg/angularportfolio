import { DoBootstrap, Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import {Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor
  (private http:HttpClient ) { }

  obtenerTexto(): Observable <any> {

    return this.http.get('assets/data/datos.json');
    
}

}
