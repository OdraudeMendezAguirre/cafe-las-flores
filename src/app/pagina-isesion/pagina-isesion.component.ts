import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUsr } from '../Entidades/loginUsr';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-isesion',
  templateUrl: './pagina-isesion.component.html',
  styleUrls: ['./pagina-isesion.component.css']
})
export class PaginaIsesionComponent implements OnInit {

  remenber = false;
  user:LoginUsr  = new LoginUsr();

  constructor(private router:Router, private api:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('usernameOrEmail') || localStorage.getItem('usernameOrEmail')){

      this.user.usernameOrEmail = JSON.stringify(localStorage.getItem('usernameOrEmail'));
      this.remenber = true;
    }
  }


  Login(form: NgForm){
    console.log("enviado")
  if(form.invalid){

    return;

  }
  console.log("valido")
  this.api.Login(this.user).subscribe(
    resp => {
       if(this.remenber){
        localStorage.setItem ('usernameOrEmail',JSON.stringify( this.user.usernameOrEmail));
         console.log(resp)
       }
       this.router.navigateByUrl('/crud');
    }
  )
}
}
