import { Component, OnInit } from '@angular/core';
import { MaestrosService } from '../api/maestros.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  maestros = [];/*[
    {
      nombre: "Joseph",
      apellidos: "Mercado Corona",
      promedio_conocimiento: 96,
      promedio_puntualidad: 100,
      promedio_dificultad: 40
    }
  ];*/

  constructor(private maestrosService: MaestrosService) {}

  ngOnInit() {
    this.maestrosService.maestros.subscribe(maestros => {
      this.maestros = maestros;
    });
    this.maestrosService.getMaestros();
  }
}
