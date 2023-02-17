import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pro-listar',
  templateUrl: './pro-listar.component.html',
  styleUrls: ['./pro-listar.component.scss']
})
export class ProListarComponent implements OnInit {

  lstProductos: any
  producto = new Producto()
  constructor(private productoService: ProductoService,
    private router: Router) { 
    this.producto = new Producto()
    this.listar()
  }
  
  

  ngOnInit(): void {
    
    this.listar()
  }
  guardar(){
    this.productoService.guardar(this.producto).subscribe(data=>{
      console.log(data);
    })
    
    this.producto = new Producto()
    
  }
  
  listar(){
    
    this.lstProductos = this.productoService.listar().subscribe(
      data => this.lstProductos = data,
      error => console.log(error)
    );
    
  }
  editProducto(p: Producto){
    
    let params: NavigationExtras = {
      queryParams: {
        codigo: p.pro_codigo,
        precio: p.pro_precio,
        stock: p.pro_stock,
        nombre: p.pro_nombre
      } 
    }
    this.router.navigate(['productos/editPro'], params)
  }
  delete(producto: number){
    try{  
    this.productoService.delete(producto).subscribe(data=>{
      console.log(data);
    })
  }catch(Ex){
    alert("NO SE PUEDE ELIMINAR PORQUE YA EXISTE EN UNA FACTURA")
  }

    window.location.reload()
  }
  goToCrear(){
    this.router.navigate(['productos/crearPro'])
  }
  
  goListClientes(){

    this.router.navigate(['cliente/listar'])
  }
  
  goListaFac(){
    this.router.navigate(['facturas/listar'])
  }

  goCreaCompra(){
    this.router.navigate(['Compra/crear'])
  }

  
  goToList(){
    this.router.navigate(['productos/listPro'])
  }
  

}
