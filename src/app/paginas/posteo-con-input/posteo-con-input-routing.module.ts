import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPosteosComponent } from './lista-posteos/lista-posteos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPosteosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteoConInputRoutingModule { }
