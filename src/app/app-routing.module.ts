import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './jugador/jugador.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { InicioComponent } from './inicio/inicio';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: 'inicio',
  component: InicioComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'jugador',
  component: JugadorComponent
},
{
  path: 'estadistica',
  component: EstadisticaComponent
},
{
  path: 'usuario',
  component: UsuarioComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
