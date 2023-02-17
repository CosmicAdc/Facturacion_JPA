import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalles } from '../domain/detalles';
@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  constructor(private http: HttpClient) { }

  buscar(p:Number): Observable<any>{
    console.log(p)
    return this.http.get<any>('http://localhost:8080/demojpa/rs/detalles/listar?codigo='+p);
  }
  crear(factura: Detalles): Observable<Detalles> {
    return this.http.post<Detalles>("http://localhost:8080/demojpa/rs/detalles/creaDetalles",factura);
  }


}
