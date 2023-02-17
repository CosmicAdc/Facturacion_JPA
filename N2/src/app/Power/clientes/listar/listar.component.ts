import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  
  listaPersonas=new Array()
  personas: any;
  constructor(private router: Router,private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.CargarPersonas()
  }

  CargarPersonas(){
  /*  this.clienteService.obtener().subscribe((data:any) => this.personas = {
        cedula: data.per_cedula,
        nombre:  data.per_Nombre,
        direccion: data.per_Direccion,
    });*/
    this.personas = this.clienteService.obtener().subscribe(
      data => this.personas = data,
      error => console.log(error)
    );
  }

  editarCliente(persona:Persona){
    console.log("Llego"+persona.per_id)
    let params:NavigationExtras={
      queryParams:{
        per_id:persona.per_id,
        per_Nombre:persona.per_Nombre,
        per_cedula:persona.per_cedula,
        per_Direccion:persona.per_Direccion
      }
    } 
      this.router.navigate(['cliente/editar'], params)


  }
  eliminarCliente(persona:Persona){
    console.log(persona)
    this.clienteService.eliminar(persona).subscribe(data=> {
      console.log(data)
    })   
    window.location.reload()
  }



  goCreaCliente(){
    this.router.navigate(['cliente/crear'])
  }


  goListClientes(){
    this.router.navigate(['cliente/listar'])
  }
  
  goToList(){
    this.router.navigate(['productos/listPro'])
  }
  
  goListaFac(){
    this.router.navigate(['facturas/listar'])
  }

  goCreaCompra(){
    this.router.navigate(['Compra/crear'])
  }
}
