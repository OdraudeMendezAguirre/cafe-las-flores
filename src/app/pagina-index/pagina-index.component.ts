import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-index',
  templateUrl: './pagina-index.component.html',
  styleUrls: ['./pagina-index.component.css']
})
export class PaginaIndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  tienda(){
    this.router.navigateByUrl('/tienda')
  }

}
