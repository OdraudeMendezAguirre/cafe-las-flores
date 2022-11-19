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
    PaginaIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
