import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { ProductoService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrls: ['./pagina-producto.component.css']
})
export class PaginaProductoComponent implements OnInit {

  constructor(public productoService:ProductoService, private rutaActiva: ActivatedRoute, public carritoService:CarritoService) { }

  producto:Producto=new Producto();

  ngOnInit(): void {
    this.productoService.getProductosId(this.rutaActiva.snapshot.params.id).subscribe(resp=>{
      this.producto=resp;
    }, error=>{console.error(error)})
  }

  agregar(){
    this.carritoService.agregar(this.producto).subscribe(resp=>{
    },
      error=> {console.error(error)}
    )
  }

}
