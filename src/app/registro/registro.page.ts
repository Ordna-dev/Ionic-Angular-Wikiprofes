import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  
  onRegistro(data)
  {
    console.warn(data);
  }
}
