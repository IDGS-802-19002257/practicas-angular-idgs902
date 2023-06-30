import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCinepolisComponent } from './cinepolis/index-cinepolis/index-cinepolis.component';
import { IndexDistanciasComponent } from './distancias/index-distancias/index-distancias.component';
import { IndexResistenciasComponent } from './resistencias/index-resistencias/index-resistencias.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cinepolis', component: IndexCinepolisComponent },
  { path: 'distancias', component: IndexDistanciasComponent },
  { path: 'resistencias', component: IndexResistenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
