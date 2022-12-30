import { Producto } from './Entidades/producto';
import { Injectable } from "@angular/core";
import { Usuario } from './Entidades/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUsr } from './Entidades/loginUsr';
import { Envio } from './Entidades/Envio';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'http://localhost:8085/api';
  userToken ?: any;
  usuario : Usuario = new Usuario();
  envio : Envio = new Envio();

  constructor( private http: HttpClient ) {
    this.readToken();
  }

  getUser(){
    return this.usuario;
  }

  getEnvio(){
    return this.envio;
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
    this.http.post(`${this.url}/auth/user`, body).subscribe(resp =>{
      console.log(resp);
      this.usuario=resp;
      return resp;
    });

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

  info(): Observable<any> {
    return this.http.get(`${this.url}/info`);
  }

  getProductos(): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/productos`,this.httpOptions);
  }

  getProductoId(id: any): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/productos/${id}`, this.httpOptions);
  }

  guardarEnvio(envio:Envio){
    const body = {
      direccion : envio.direccion,
      municipio : envio.municipio,
      estado : envio.estado,
      referencia_vivienda : envio.referencia_vivienda,
      realizado : envio.realizado,
      usuario : envio.usuario
    };
    this.http.post(`${this.url}/envio/guardar`,body).subscribe(resp => {
      console.log(resp);
      this.envio=resp;
      return resp;
    });
  }

  stripeConfirmar(id:string): Observable<String>{
    return this.http.post<String>(`${this.url}/stripe/confirm/${id}`,{});
  }

  stripeCancelar(id:string): Observable<String>{
    return this.http.post<String>(`${this.url}/stripe/cancel/${id}`,{});
  }
}
