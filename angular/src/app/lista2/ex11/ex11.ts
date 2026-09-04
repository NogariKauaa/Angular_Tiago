import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css'
})
export class Ex11 {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade = this.quantidade + 1;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade = this.quantidade - 1;
    }
  }

  adicionarAoCarrinho() {
    this.mensagem = this.quantidade + ' x ' + this.produto + ' adicionado ao carrinho!';
  }
}