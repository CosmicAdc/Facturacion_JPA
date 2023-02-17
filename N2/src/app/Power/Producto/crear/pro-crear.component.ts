import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-pro-crear',
  templateUrl: './pro-crear.component.html',
  styleUrls: ['./pro-crear.component.scss']
})
export class ProCrearComponent implements OnInit {

  
  producto = new Producto()
  constructor(private productoService: ProductoService,
    private router: Router) { 
    this.producto = new Producto()
  }
  
  ngOnInit(): void {
    
  }
  guardar(){
    if(this.producto.pro_codigo!=null && this.producto.pro_nombre!=null && this.producto.pro_precio!=null && this.producto.pro_stock!=null){
      this.productoService.guardar(this.producto).subscribe((data:Object  )=>{
       
       if((Object.entries(data)).toString() == "resultado,ERROR"){
        alert("El objeto no se ha ingresado correctamente")         
       }else{
        alert("Producto registrado correctamente")     
        this.producto = new Producto()
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

