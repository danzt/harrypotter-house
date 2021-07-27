import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URI = 'http://hp-api.herokuapp.com/api/characters';

  constructor(
    private http: HttpClient
  ) { }

  obtenerCasa(casa: string):Observable<any>{
    return this.http.get(`${this.API_URI}/house/${casa}`);
  }

  obtenerEstudiantes():Observable<any>{
    return this.http.get(`${this.API_URI}/students`);
  }

  obtenerProfesores():Observable<any>{
    return this.http.get(`${this.API_URI}/staff`);
  }
}
