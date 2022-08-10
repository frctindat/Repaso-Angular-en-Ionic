import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cada-posteo',
  templateUrl: './cada-posteo.component.html',
  styleUrls: ['./cada-posteo.component.css']
})
export class CadaPosteoComponent implements OnInit {

  @Input() UnPostRecibidoDelPadre: any;
  @Output() ElPostClickeadoEnElHijo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  AlHacerClick() {
    console.log( 'El Id del post desde el hijo es ', this.UnPostRecibidoDelPadre.id );
    this.ElPostClickeadoEnElHijo.emit( this.UnPostRecibidoDelPadre.id );
  }

}
