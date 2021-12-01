import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaestrosService {
  maestros = new Subject<any[]>();

  constructor(private http: HttpClient) { 
    this.getMaestros();
  }

  getMaestros() {
    this.http.get<any[]>("/api/registrarProfesor") //Mover directorio
    .subscribe(data => {
      this.maestros.next(data);
    })
  }

  crearMaestro(nombre: string, apellidos: string){
    return this.http.post("http://127.0.0.1:5000/api/v1/contactos", {
      nombre, apellidos
    })
  }

}
