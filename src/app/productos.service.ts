import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './Entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService{

  private url = 'http://localhost:8085/api';
  userToken ?:any;


  constructor( private http: HttpClient ) {}

  getProductos(): Observable<Producto> {

    return this.http.get<Producto>(`${this.url}/productos`,this.httpOptions);
  }

  getProductosId(id: any): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/productos/${id}`, this.httpOptions);
  }

  deleteProductos(id: any) {
    return this.http.delete(`${this.url}/productos/${id}`, this.httpOptions2)
    .pipe((resp:any) => {
        return resp;
      }
    );

  }

  saveProductos(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.url}/productos`, producto,this.httpOptions);
  }

  updateProductos(producto:Producto, id:any): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/productos/${id}`, producto,this.httpOptions);
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

}
