import { Component, OnInit } from '@angular/core';
import { Producto } from '../Entidades/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrls: ['./pagina-producto.component.css']
})
export class PaginaProductoComponent implements OnInit {

  constructor(public api:AuthService, private rutaActiva: ActivatedRoute, private router:Router) { }

  producto:Producto=new Producto();

  ngOnInit(): void {
    this.api.getProductoId(this.rutaActiva.snapshot.params.id).subscribe(resp=>{
      this.producto=resp;
    }, error=>{console.error(error)})
  }
  agregar(){

    this.router.navigateByUrl('/carrito')
  }

}
