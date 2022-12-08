import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaBienvenidoComponent } from './pagina-bienvenido/pagina-bienvenido.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { PaginaExitoComponent } from './pagina-exito/pagina-exito.component';
import { PaginaIndexComponent } from './pagina-index/pagina-index.component';
import { PaginaIsesionComponent } from './pagina-isesion/pagina-isesion.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaProductoComponent } from './pagina-producto/pagina-producto.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';

const routes: Routes = [
  { path: 'bienvenido', component: PaginaBienvenidoComponent },
  { path: 'carrito', component: PaginaCarritoComponent },
  { path: 'Exito', component: PaginaExitoComponent },
  { path: '', component: PaginaIndexComponent },
  { path: 'login', component: PaginaIsesionComponent },
  { path: 'nosotros', component: PaginaNosotrosComponent},
  { path: 'producto/:id', component: PaginaProductoComponent },
  { path: 'signin', component: PaginaRegistroComponent },
  { path: 'tienda', component: PaginaTiendaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
