import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../Entidades/producto';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {
  public lista:any[]=[];
  public np:number=0;
  public pt:number=0;

  constructor(public carritoService:CarritoService) { }

  ngOnInit(): void {
    this.carritoService.getAll().subscribe(resp=>{
      this.lista=resp;
      for (let index = 0; index < this.lista.length; index++) {
        this.pt =this.pt + this.lista[index].precio;
      }
    }, error=>{console.error(error)})
  }



  pagar():void{
    this.carritoService.vaciar().subscribe();
  }

}
