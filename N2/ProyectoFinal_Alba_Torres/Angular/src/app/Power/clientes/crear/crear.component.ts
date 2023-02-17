import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  persona: Persona = new Persona
  personaEdit:Persona=new Persona()
  constructor(private router: Router,private clienteService: ClientesService) { 
    let params=this.router.getCurrentNavigation()?.extras.queryParams; 
    if(params){
      this.persona=new Persona()
      this.persona.per_id=params.per_id;
      this.persona.per_Direccion=params.per_Direccion;
      this.persona.per_cedula=params.per_cedula;
      this.persona.per_Nombre=params.per_Nombre;
      this.personaEdit=params;     
    }
  }

  ngOnInit(): void {
  }

  guardar(){


    if(this.persona.per_Direccion!=null && this.persona.per_cedula!=null && this.persona.per_Nombre!=null){
      this.clienteService.save(this.persona).subscribe((data:Object  )=>{       
       if((Object.entries(data)).toString() == "resultado,ERROR"){
        alert("cliente con esa cédula ya registrado")         
       }else{
        alert("Cliente registrado")  
        this.persona = new Persona()
       }
      })
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
