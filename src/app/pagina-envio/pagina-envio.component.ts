import { Component, OnInit } from '@angular/core';
import { Envio } from '../Entidades/Envio';
import { AuthService } from '../auth.service';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-envio',
  templateUrl: './pagina-envio.component.html',
  styleUrls: ['./pagina-envio.component.css']
})
export class PaginaEnvioComponent implements OnInit {

  envio : Envio = new Envio();
  usuario : Usuario = new Usuario();

  constructor(private api:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.usuario = this.api.getUser();
    this.envio.realizado=false;
    this.envio.usuario = this.usuario;
  }

  continuar(){
    this.api.guardarEnvio(this.envio);
    //this.router.navigateByUrl('/compra')
  }

  cancelar(){

  }

}
