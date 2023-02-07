import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';

@Component({
  selector: 'app-item-carrito',
  templateUrl: './item-carrito.component.html',
  styleUrls: ['./item-carrito.component.css']
})
export class ItemCarritoComponent implements OnInit {

  producto:Producto=new Producto();

  constructor() {}

  ngOnInit(): void {
  }

}
