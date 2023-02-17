import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../domain/factura';
import { Persona } from '../domain/persona';
import { Producto } from '../domain/producto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  crear(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>("http://localhost:8080/demojpa/rs/facturas/crear",factura);
  }

}
