import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  id:number=0;
  consultar = "http://localhost:8085/productos";
  cid= "http://localhost:8085/productos/";

  constructor(private http: HttpClient) { }

  setId(id:number){
    this.cid=this.cid+id;
  }

  getProductos(): Observable<any> {
    return this.http.get(this.consultar);
  }

  getProductosId(): Observable<any> {
    return this.http.get(this.cid);
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }
}
