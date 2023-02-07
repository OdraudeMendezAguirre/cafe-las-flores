import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Producto } from '../Entidades/producto';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  lista ?: Producto;

  constructor(
    private api: AuthService,
  ) { }

  ngOnInit(): void {
  }



}
