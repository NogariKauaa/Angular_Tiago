import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { ListagemAluno } from './listagem-aluno/listagem-aluno';
import { Routes } from '@angular/router';
import { CadastroAluno } from './cadastro-aluno/cadastro-aluno';

@NgModule({
  declarations: [ListagemAluno, CadastroAluno],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
