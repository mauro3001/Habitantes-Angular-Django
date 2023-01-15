import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { AdminComponent } from './principal/admin/admin.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';

//para que funcionen los componentes de rutas
const routes: Routes = [
  {
    path: 'usuarios',
    component: ListarUsuarioComponent
  },
  {
    path: 'usuarios/usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'usuarios/editarUsuario/:id_usuario',
    component: EditarUsuarioComponent
  },
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'ciudades',
    component: ListarCiudadComponent
  },
  {
    path: 'ciudades/ciudad',
    component: CrearCiudadComponent
  },
  {
    path: 'ciudades/editarCiudad/:id_ciudad',
    component: EditarCiudadComponent
  }

];

//declaraciones para rutas for.Root(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponenetes =
{
  ListarUsuarioComponent,
  CrearUsuarioComponent
}
