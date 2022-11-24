import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemNavbarComponent } from './item-navbar/item-navbar.component';
import { ItemFooterComponent } from './item-footer/item-footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaOportunidadesComponent } from './pagina-oportunidades/pagina-oportunidades.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaProductoComponent } from './pagina-producto/pagina-producto.component';
import { PaginaIndexComponent } from './pagina-index/pagina-index.component';
import { PaginaIsesionComponent } from './pagina-isesion/pagina-isesion.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { PaginaBienvenidoComponent } from './pagina-bienvenido/pagina-bienvenido.component';
import { PaginaExitoComponent } from './pagina-exito/pagina-exito.component';
import { ItemCarritoComponent } from './item-carrito/item-carrito.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemNavbarComponent,
    ItemFooterComponent,
    ItemCardComponent,
    PaginaTiendaComponent,
    PaginaNosotrosComponent,
    PaginaOportunidadesComponent,
    PaginaContactoComponent,
    PaginaProductoComponent,
    PaginaIndexComponent,
    PaginaIsesionComponent,
    PaginaRegistroComponent,
    PaginaBienvenidoComponent,
    PaginaExitoComponent,
    ItemCarritoComponent,
    PaginaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
