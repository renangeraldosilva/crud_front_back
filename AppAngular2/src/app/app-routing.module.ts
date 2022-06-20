import { PessoasComponent } from './conponents/pessoas/pessoas.component';
import { Pessoa } from './Pessoa';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pessoas', component:PessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
