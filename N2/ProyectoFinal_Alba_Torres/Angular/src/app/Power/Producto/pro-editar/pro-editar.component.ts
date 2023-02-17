import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-pro-editar',
  templateUrl: './pro-editar.component.html',
  styleUrls: ['./pro-editar.component.scss']
})
export class ProEditarComponent implements OnInit {
  p:Producto=new Producto()
  constructor(private router: Router,
    private productoService: ProductoService) { 
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.p = new Producto()
        this.p.pro_codigo = params['codigo'];
        this.p.pro_precio = params['precio'];
        this.p.pro_stock = params['stock'];
        this.p.pro_nombre = params['nombre'];
      }
  }

  ngOnInit(): void {
  }
  edit(){    
    if(this.p.pro_nombre!=null && this.p.pro_precio!=null && this.p.pro_stock!=null){             
      this.productoService.editar(this.p).subscribe(data=>{
        console.log(data);
      })
      this.router.navigate(['productos/listPro'])
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
 