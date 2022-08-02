import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AcercacontactoComponent } from './paginas/acercacontacto/acercacontacto.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';


@NgModule({
  declarations: [
    AcercaComponent,
    AcercacontactoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
