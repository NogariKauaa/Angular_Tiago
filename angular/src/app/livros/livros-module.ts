import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';


@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, LivrosRoutingModule, FormsModule],
})
export class LivrosModule {}
