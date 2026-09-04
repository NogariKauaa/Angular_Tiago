import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
},
{
  path: 'aluno',
  loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
},
{
  path: 'lista1',
  loadChildren: () => import('./lista1/lista1-module').then(m => m.Lista1Module)
},
{
  path: 'lista2',
  loadChildren: () => import('./lista2/lista2-module').then(m => m.Lista2Module)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }