import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-posteoasync',
  templateUrl: './posteoasync.component.html',
  styleUrls: ['./posteoasync.component.css']
})
export class PosteoasyncComponent implements OnInit {

  DescargaAsync: any ;

  constructor( private InstanciaAsyncServicio: DatosService ) {  }

  ngOnInit(): void {
    this.DescargaAsync = this.InstanciaAsyncServicio.ObtenerData();
  }

}
