import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css'
})
export class Ex6 {
  quantidade = 0;

  aumentar() {
    this.quantidade = this.quantidade + 1;
  }

  diminuir() {
    if (this.quantidade > 0) {
      this.quantidade = this.quantidade - 1;
    }
  }
}