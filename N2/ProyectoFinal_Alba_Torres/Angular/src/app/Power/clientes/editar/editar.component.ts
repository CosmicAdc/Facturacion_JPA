import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  persona:Persona=new Persona()
  constructor(private router: Router,private clienteService: ClientesService) { 
    let params=this.router.getCurrentNavigation()?.extras.queryParams; 
    if(params){
      this.persona=new Persona()
      this.persona.per_id=params.per_id;
      this.persona.per_Direccion=params.per_Direccion;
      this.persona.per_cedula=params.per_cedula;
      this.persona.per_Nombre=params.per_Nombre;
    }

  }

  ngOnInit(): void {
  }

  edit(){
       
    if(this.persona.per_Direccion!=null && this.persona.per_cedula!=null && this.persona.per_Nombre!=null){
      this.clienteService.editar(this.persona).subscribe(data=>{
       console.log(data);
     })
     this.router.navigate(['cliente/listar'])   
    }else{
      alert("Porfavor rellene todos los campos")
    }

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
