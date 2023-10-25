import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios/servicios.component';
import { AcercaDeComponent } from './acercaDe/acerca-de/acerca-de.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiciosComponent,
    AcercaDeComponent,
    PortafolioComponent,
    TestimoniosComponent,
    EquipoComponent,
    BlogComponent,
    ContactoComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
