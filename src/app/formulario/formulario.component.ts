import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() resultadoSuma = new EventEmitter<number>();
  public operandoA: number;
  public operandoB: number;

  sumar(): void {
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
