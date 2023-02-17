import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../domain/persona';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 
  
  }

  save(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>("http://localhost:8080/demojpa/rs/clientes",persona);
  }

  obtener(): Observable <any[]>{
    return this.http.get<any>("http://localhost:8080/demojpa/rs/clientes/listado");
  }

  eliminar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>("http://localhost:8080/demojpa/rs/clientes2",persona);
  }

  editar(p: Persona): Observable<any[]>{
    return this.http.post<any>("http://localhost:8080/demojpa/rs/clientes2/actualizar", p)
  }
  buscar(p:String): Observable<any>{
    console.log(p)
    return this.http.get<any>('http://localhost:8080/demojpa/rs/clientes2/buscaCliente?cedula='+p);
  }

}
