import { Component, OnInit } from '@angular/core';
import { MaestrosService  } from '../api/maestros.service';

@Component({
  selector: 'app-is-login',
  templateUrl: './is-login.page.html',
  styleUrls: ['./is-login.page.scss'],
})
export class IsLoginPage implements OnInit {

  maestros = [];
     /* {
        nombre: "Joseph",
        apellidos: "Mercado Corona",
        promedio_conocimiento: 100,
        promedio_puntualidad: 100,
        promedio_dificultad: 100
      }
    ];*/

  usuarios: any[] = Array(20);

  constructor(private maestrosService: MaestrosService) {}

  ngOnInit() {
    this.maestrosService.maestros.subscribe(maestros => {
      this.maestros = maestros;
    });
  }  
}
