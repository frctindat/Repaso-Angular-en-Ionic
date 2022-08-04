import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private oHttp: HttpClient) { }

  ObtenerData() {
    return this.oHttp.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap( console.log ) );
  }
}
