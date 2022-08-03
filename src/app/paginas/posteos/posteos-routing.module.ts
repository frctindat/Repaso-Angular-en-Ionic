import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteosComponent } from './posteos.component';

const routes: Routes = [
  {
    path: '',
    component: PosteosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteosRoutingModule { }
