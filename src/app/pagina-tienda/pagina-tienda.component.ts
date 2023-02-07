import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-tienda',
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css']
})
export class PaginaTiendaComponent implements OnInit {
  lista:any;
  constructor(private api:AuthService) { }

  ngOnInit(): void {
    this.api.getProductos().subscribe(resp=>{
      this.lista=resp;
    }, error=>{console.error(error)})
  }

}
