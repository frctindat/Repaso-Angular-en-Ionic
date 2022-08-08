import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../servicios/datos.service';

@Component({
  selector: 'app-lista-posteos',
  templateUrl: './lista-posteos.component.html',
  styleUrls: ['./lista-posteos.component.css']
})
export class ListaPosteosComponent implements OnInit {

  DescargaConInput: any;

  constructor( private InstanciaConInput: DatosService ) { }

  ngOnInit(): void {
    this.DescargaConInput = this.InstanciaConInput.ObtenerData();
  }

}
