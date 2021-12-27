import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listagem', component:ListaComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'editar/:id', component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
