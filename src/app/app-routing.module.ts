import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { AcercacontactoComponent } from './paginas/acercacontacto/acercacontacto.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Acerca',
    component: AcercaComponent
  },
  {
    path: 'Contacto',
    component: AcercacontactoComponent
  },
  {
    path: 'Posteos',
    loadChildren: () => import('./paginas/posteos/posteos.module').then( m => m.PosteosModule )
  },
  {
    path:'PosteoAsync',
    loadChildren: () => import('./paginas/posteoasync/posteoasync.module').then(m => m.PosteoasyncModule )
  },
  {
    path:'PosteoConImput',
    loadChildren: () => import('./paginas/posteo-con-input/posteo-con-input.module').then(m => m.PosteoConInputModule )
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
