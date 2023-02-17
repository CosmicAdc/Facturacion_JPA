import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  constructor(private http: HttpClient) { }

  guardar(p: Producto): Observable<any[]>{
    return this.http.post<any>("http://localhost:8080/demojpa/rs/productos/newPro", p)
  }
  editar(p: Producto): Observable<any[]>{
    return this.http.post<any>("http://localhost:8080/demojpa/rs/productos/updatePro", p)
  }
  listar(): Observable<any[]>{
    return this.http.get<any>("http://localhost:8080/demojpa/rs/productos/listPro")
  }
  delete(p: number): Observable<any[]>{
    
    return this.http.post<any>("http://localhost:8080/demojpa/rs/productos/deletePro", p)
  }
  buscar(codigo: number): Observable<any[]>{ 
    return this.http.post<any>("http://localhost:8080/demojpa/rs/productos/findPro", codigo)
  }

}
