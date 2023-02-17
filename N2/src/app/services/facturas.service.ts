import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  obtener(): Observable <any[]>{
    return this.http.get<any>("http://localhost:8080/demojpa/rs/facturas/listar");
  }
  buscar(p:Number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/demojpa/rs/facturas/buscar?codigo='+p);
  }

  anular(p: Number): Observable<any[]>{
    console.log(p)
   return this.http.post<any>("http://localhost:8080/demojpa/rs/facturas/anular", p)
  }

}
