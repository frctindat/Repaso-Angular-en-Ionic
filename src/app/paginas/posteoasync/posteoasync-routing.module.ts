import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteoasyncComponent } from './posteoasync.component';

const routes: Routes = [
  {
    path: '',
    component:PosteoasyncComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteoasyncRoutingModule { }
