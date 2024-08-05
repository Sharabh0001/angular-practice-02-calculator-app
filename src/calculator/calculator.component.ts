import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {


  display: string = '';
  currentNumber: string = '';
  previousNumber: string = '';
  operator: string = '';

  appendNumber(number: string) {
    if (number === '.' && this.currentNumber.includes('.')) return;
    this.currentNumber = this.currentNumber + number;
    this.updateDisplay();
  }

  chooseOperation(operation: string) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.compute();
    }
    this.operator = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  compute() {
      const prev = parseFloat(this.previousNumber);
      const current = parseFloat(this.currentNumber);

      if (isNaN(prev) || isNaN(current) || !this.operator) {
          return;
      }

      let computation: number;
      switch (this.operator) {
          case '+':
              computation = prev + current;
              break;
          case '-':
              computation = prev - current;
              break;
          case '*':
              computation = prev * current;
              break;
          case '/':
              computation = prev / current;
              break;
          default:
              return;
      }

      this.currentNumber = computation.toString();
      this.operator = '';
      this.previousNumber = '';
      this.updateDisplay();
  }

  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = '';
    this.updateDisplay();
  }

  updateDisplay() {
    this.display = this.currentNumber;
  }

}
