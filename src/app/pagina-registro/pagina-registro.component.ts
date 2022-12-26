import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.css']
})
export class PaginaRegistroComponent implements OnInit {

  usuario:Usuario  = new Usuario();
  password="";

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.password != this.usuario.contrasena){
      window.alert("Las contraseñas no coinciden")
    }else{
      this.auth.registro(this.usuario)
      .subscribe(resp => {
        this.router.navigateByUrl('/login')
      })
    }
  }
}
