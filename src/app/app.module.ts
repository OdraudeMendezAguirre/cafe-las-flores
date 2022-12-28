import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ItemNavbarComponent } from './item-navbar/item-navbar.component';
import { ItemFooterComponent } from './item-footer/item-footer.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';

import { PaginaProductoComponent } from './pagina-producto/pagina-producto.component';
import { PaginaIndexComponent } from './pagina-index/pagina-index.component';
import { PaginaIsesionComponent } from './pagina-isesion/pagina-isesion.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { ItemCarritoComponent } from './item-carrito/item-carrito.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemNavbarComponent,
    ItemFooterComponent,
    PaginaTiendaComponent,
    PaginaNosotrosComponent,
    PaginaProductoComponent,
    PaginaIndexComponent,
    PaginaIsesionComponent,
    PaginaRegistroComponent,
    ItemCarritoComponent,
    PaginaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
