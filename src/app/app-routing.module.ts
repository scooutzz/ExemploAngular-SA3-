import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "formulario", component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
