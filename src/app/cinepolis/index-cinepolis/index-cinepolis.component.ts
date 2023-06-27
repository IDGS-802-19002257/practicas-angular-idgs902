import { Component } from '@angular/core';

@Component({
  selector: 'app-index-cinepolis',
  templateUrl: './index-cinepolis.component.html',
  styleUrls: ['./index-cinepolis.component.css']
})
export class IndexCinepolisComponent {
  nombre!: string;
  boletos!: number;
  personas!: number;
  tarjeta!: string;
  total!: number;
  aviso!: string;

  calcular() {
    this.aviso = "";
    if (this.boletos/this.personas > 7){
      this.aviso = "No se pueden comprar más de 7 boletos por persona";
    } else {
      let descuento = 0;
      this.total = this.boletos * 12;
      if (this.boletos > 5) {
        descuento = descuento + 0.15;
      } else if (this.boletos > 2) {
        descuento = descuento + 0.10;
      }

      if (this.tarjeta == "si") {
        descuento = descuento + 0.10;
      }

      this.total = this.total - this.total * descuento;
    }
  }
}
