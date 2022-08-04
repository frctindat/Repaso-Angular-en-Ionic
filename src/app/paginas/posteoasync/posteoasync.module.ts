import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteoasyncRoutingModule } from './posteoasync-routing.module';
import { PosteoasyncComponent } from './posteoasync.component';


@NgModule({
  declarations: [
    PosteoasyncComponent
  ],
  imports: [
    CommonModule,
    PosteoasyncRoutingModule
  ]
})
export class PosteoasyncModule { }
