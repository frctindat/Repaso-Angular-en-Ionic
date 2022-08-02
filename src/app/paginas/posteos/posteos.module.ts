import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteosRoutingModule } from './posteos-routing.module';
import { PosteosComponent } from './posteos.component';


@NgModule({
  declarations: [
    PosteosComponent
  ],
  imports: [
    CommonModule,
    PosteosRoutingModule
  ]
})
export class PosteosModule { }
