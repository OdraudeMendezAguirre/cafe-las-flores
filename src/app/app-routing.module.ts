import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaBienvenidoComponent } from './pagina-bienvenido/pagina-bienvenido.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaIndexComponent } from './pagina-index/pagina-index.component';

const routes: Routes = [
  { path: 'inicio', component: PaginaIndexComponent },
  { path: 'bienvenido', component: PaginaBienvenidoComponent },
  { path: 'carrito', component: PaginaCarritoComponent },
  { path: 'contacto', component: PaginaContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
