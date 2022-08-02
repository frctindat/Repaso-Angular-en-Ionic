import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { AcercacontactoComponent } from './paginas/acercacontacto/acercacontacto.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './Componentes/menu/menu.component';
import { PaginasModule } from './paginas.module';

@NgModule({
  declarations: [
     AppComponent,
    // AcercaComponent,
    // AcercacontactoComponent,
    // HomeComponent,
     MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
