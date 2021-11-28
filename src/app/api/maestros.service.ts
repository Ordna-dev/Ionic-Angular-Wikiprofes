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

}
