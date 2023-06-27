import { Component } from '@angular/core';

interface Color {
  key: string;
  nombre: string;
  valor: number;
}

@Component({
  selector: 'app-index-resistencias',
  templateUrl: './index-resistencias.component.html',
  styleUrls: ['./index-resistencias.component.css']
})
export class IndexResistenciasComponent {

  valor!: number;
  valorMinimo!: number;
  valorMaximo!: number;
  banda1!: string;
  banda2!: string;
  multiplicador!: string;
  tolerancia!: string;

  bandasData1: Color[] = [
    { key: 'black', nombre: 'Negro', valor: 0 },
    { key: 'brown', nombre: 'Marrón', valor: 1 },
    { key: 'red', nombre: 'Rojo', valor: 2 },
    { key: 'orange', nombre: 'Naranja', valor: 3 },
    { key: 'yellow', nombre: 'Amarillo', valor: 4 },
    { key: 'green', nombre: 'Verde', valor: 5 },
    { key: 'blue', nombre: 'Azul', valor: 6 },
    { key: 'purple', nombre: 'Violeta', valor: 7 },
    { key: 'grey', nombre: 'Gris', valor: 8 },
    { key: 'white', nombre: 'Blanco', valor: 9 },
  ];

  bandasData2: Color[] = this.bandasData1;

  multiplicadoresData: Color[] = [
    { key: 'black', nombre: 'Negro', valor: 1 },
    { key: 'brown', nombre: 'Marrón', valor: 10 },
    { key: 'red', nombre: 'Rojo', valor: 100 },
    { key: 'orange', nombre: 'Naranja', valor: 1000 },
    { key: 'yellow', nombre: 'Amarillo', valor: 10000 },
    { key: 'green', nombre: 'Verde', valor: 100000 },
    { key: 'blue', nombre: 'Azul', valor: 1000000 },
    { key: 'purple', nombre: 'Violeta', valor: 10000000 },
    { key: 'grey', nombre: 'Gris', valor: 100000000 },
    { key: 'white', nombre: 'Blanco', valor: 1000000000 },
  ];

  toleranciaData: Color[] = [
    { key: 'brown', nombre: 'Marrón', valor: 1 },
    { key: 'red', nombre: 'Rojo', valor: 2 },
    { key: 'green', nombre: 'Verde', valor: 0.5 },
    { key: 'blue', nombre: 'Azul', valor: 0.25 },
    { key: 'purple', nombre: 'Violeta', valor: 0.1 },
    { key: 'grey', nombre: 'Gris', valor: 0.05 },
    { key: 'gold', nombre: 'Dorado', valor: 5 },
    { key: 'silver', nombre: 'Plata', valor: 10 },
  ];

  calcular() {
    const selectedBanda1 = this.bandasData1.find(x => x.key === this.banda1);
    const selectedBanda2 = this.bandasData2.find(x => x.key === this.banda2);
    const selectedMultiplicador = this.multiplicadoresData.find(x => x.key === this.multiplicador);
    const selectedTolerancia = this.toleranciaData.find(x => x.key === this.tolerancia);

    if (selectedBanda1 && selectedBanda2 && selectedMultiplicador && selectedTolerancia) {
      this.valor = (selectedBanda1.valor * 10 + selectedBanda2.valor) * selectedMultiplicador.valor;
      this.valorMinimo = this.valor - this.valor * selectedTolerancia.valor / 100;
      this.valorMaximo = this.valor + this.valor * selectedTolerancia.valor / 100;
    }
  }
}
