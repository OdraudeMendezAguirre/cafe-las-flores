import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { CarritoService } from '../carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.css']
})
export class ItemCarritoComponent implements OnInit {

  producto:Producto=new Producto();
  cantidad=0;

  constructor(public carritoService:CarritoService,private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.carritoService.setId(this.rutaActiva.snapshot.params.id);
    this.carritoService.getProductosId().subscribe(resp=>{
      this.producto=resp;
    }, error=>{console.error(error)})
  }

  agregar():void{
    this.cantidad=this.cantidad+1;
  }

  eliminar(id:number):void{
    let item:Producto=new Producto();
    item.id_producto=id;
    this.carritoService.eliminar(item.id_producto).subscribe();
  }

}
