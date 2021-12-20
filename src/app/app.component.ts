import { Component } from '@angular/core';

@Component({
  selector: 'app-root-calculadora',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora';
  public resultadoPadre: number;

  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
  // public operacion: string = '';
  // public selectedElement: string = '';

  // selectChangeHandler(event: any) {
  //   this.selectedElement = event.target.value;

  //   switch (event.target.value) {
  //     case 'Sumar':
  //       this.resultado = this.operandoA + this.operandoB;
  //       break;
  //     case 'Restar':
  //       this.resultado = this.operandoA - this.operandoB;
  //       break;
  //     case 'Dividir':
  //       this.resultado = this.operandoA / this.operandoB;
  //       break;
  //     case 'Multiplicar':
  //       this.resultado = this.operandoA * this.operandoB;
  //       break;
  //     case 'Resto':
  //       this.resultado = this.operandoA % this.operandoB;
  //       break;

  //     default:
  //       this.resultado = 0;
  //       this.operandoA = 0;
  //       this.operandoB = 0;
  //       break;
  //   }
  // }
}
