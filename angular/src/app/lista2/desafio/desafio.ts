import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.css'
})
export class Desafio {
  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentarDisciplinas() {
    this.quantidadeDisciplinas = this.quantidadeDisciplinas + 1;
  }

  diminuirDisciplinas() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas = this.quantidadeDisciplinas - 1;
    }
  }

  realizarMatricula() {
    this.mensagem = 'Aluno ' + this.nomeAluno + ' matriculado em ' + this.quantidadeDisciplinas + ' disciplina(s).';
  }
}
