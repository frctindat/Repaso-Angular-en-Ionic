import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {

  constructor( private InstanciaServicio: DatosService) { }

  LoQueDescargo: any[] = [];

  ngOnInit(): void {

    this.InstanciaServicio.ObtenerData()
        .subscribe( ( posteos: any ) => {
          console.log( posteos );
          this.LoQueDescargo = posteos;
        });

  }

}
