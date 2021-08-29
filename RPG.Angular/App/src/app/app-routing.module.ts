import { HomeComponent } from './Home/Home.component';
import { PersonagensCadastradosComponent } from './PersonagensCadastrados/PersonagensCadastrados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonagensComponent } from './ViewPersonagens/ViewPersonagens.component';

export const routes: Routes = [
  {path: '', redirectTo: 'Home',pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Cadastrados', component: PersonagensCadastradosComponent},
  {path: 'NovoCadastro', component: ViewPersonagensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
