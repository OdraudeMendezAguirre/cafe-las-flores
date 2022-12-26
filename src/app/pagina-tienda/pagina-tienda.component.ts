import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos.service';
import { Producto } from '../Entidades/producto';

@Component({
  selector: 'app-pagina-tienda',
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css']
})
export class PaginaTiendaComponent implements OnInit {
  lista:any;

  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(resp=>{
      this.lista=resp;
    }, error=>{console.error(error)})
  }

}
