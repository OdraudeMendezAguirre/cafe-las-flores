import { Producto } from './Entidades/producto';
import { Injectable } from "@angular/core";
import { Usuario } from './Entidades/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUsr } from './Entidades/loginUsr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'http://localhost:8085/api';
  userToken ?: any;

  constructor( private http: HttpClient ) {
    this.readToken();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`

    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      responseType: 'text'
    })
  };

  registro(usuario: Usuario){
    console.log(usuario)
    const body = {
      contrasena : usuario.contrasena,
      email : usuario.email,
      nombre_completo : usuario.nombre_completo,
      spam : usuario.spam,
      telefono : usuario.telefono,
      username : usuario.username
    };

    return this.http.post(`${this.url}/auth/registrar`, body, {responseType: 'text'})
    .pipe( map((resp: any) => {
    return resp }));
  }

  Login(user:LoginUsr){
    const body= {
      usernameOrEmail: user.usernameOrEmail,
      password: user.password
    };

    return this.http.post(`${this.url}/auth/iniciarSesion`, body)
    .pipe(map((resp:any)=>{
      console.log(resp);
      this.saveToken(resp['tokenDeAcceso']);
      return resp;
    }));
  }

  Logout(){
    localStorage.removeItem('token');
  }

  private saveToken(token: any){
    this.userToken = token;
    localStorage.setItem('token', token)
  }

  readToken(){
    if ( localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }
  }

  isAuth():boolean{
    this.readToken()
    return this.userToken.length > 2;
  }

  getProductos(): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/productos`,this.httpOptions);
  }

  getProductoId(id: any): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/productos/${id}`, this.httpOptions);
  }

}
