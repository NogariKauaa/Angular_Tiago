import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemAluno } from './listagem-aluno/listagem-aluno';
import { CadastroAluno } from './cadastro-aluno/cadastro-aluno';

const routes: Routes = [

    {path: 'listagem-aluno' , component: ListagemAluno},
    {path: 'cadastro-aluno' , component: CadastroAluno},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
