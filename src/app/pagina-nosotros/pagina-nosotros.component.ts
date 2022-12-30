import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-nosotros',
  templateUrl: './pagina-nosotros.component.html',
  styleUrls: ['./pagina-nosotros.component.css']
})
export class PaginaNosotrosComponent implements OnInit {
  info:any;

  constructor(private api:AuthService) { }

  ngOnInit(): void {
    this.api.info().subscribe(resp=>{
      this.info=resp;
    }, error=>{console.error(error)})
  }

}
