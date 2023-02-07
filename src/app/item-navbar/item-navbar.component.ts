import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-navbar',
  templateUrl: './item-navbar.component.html',
  styleUrls: ['./item-navbar.component.css']
})
export class ItemNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nosotros(){
    this.router.navigateByUrl('/nosotros')
  }
  inicio(){
    this.router.navigateByUrl('/index')
  }
  tienda(){
    this.router.navigateByUrl('/tienda')
  }
  carrito(){
    this.router.navigateByUrl('/carrito')
  }
}
