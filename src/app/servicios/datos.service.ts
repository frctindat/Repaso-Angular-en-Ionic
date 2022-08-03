import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private oHttp: HttpClient) { }

  ObtenerData() {
    return this.oHttp.get('https://jsonplaceholder.typicode.com/posts');
  }
}
