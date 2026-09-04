import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css'
})
export class Ex9 {
  nomeProduto = 'Mouse Gamer';
  estoque = 0;

  aumentarEstoque() {
    this.estoque = this.estoque + 1;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque = this.estoque - 1;
    }
  }
}