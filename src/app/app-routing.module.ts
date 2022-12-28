import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { PaginaIndexComponent } from './pagina-index/pagina-index.component';
import { PaginaIsesionComponent } from './pagina-isesion/pagina-isesion.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaProductoComponent } from './pagina-producto/pagina-producto.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';

const routes: Routes = [
  { path: 'carrito', component: PaginaCarritoComponent },
  { path: 'index', component: PaginaIndexComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: PaginaIsesionComponent },
  { path: 'nosotros', component: PaginaNosotrosComponent},
  { path: 'tienda/:id', component: PaginaProductoComponent },
  { path: 'signin', component: PaginaRegistroComponent },
  { path: 'tienda', component: PaginaTiendaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
