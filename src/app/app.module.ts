import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { ResistenciasModule } from './resistencias/resistencias.module';
import { DistanciasModule } from './distancias/distancias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CinepolisModule,
    ResistenciasModule,
    DistanciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
