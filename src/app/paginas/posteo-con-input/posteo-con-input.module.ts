import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteoConInputRoutingModule } from './posteo-con-input-routing.module';
import { ListaPosteosComponent } from './lista-posteos/lista-posteos.component';
import { CadaPosteoComponent } from './lista-posteos/cada-posteo/cada-posteo.component';


@NgModule({
  declarations: [
    ListaPosteosComponent,
    CadaPosteoComponent
  ],
  imports: [
    CommonModule,
    PosteoConInputRoutingModule
  ]
})
export class PosteoConInputModule { }
