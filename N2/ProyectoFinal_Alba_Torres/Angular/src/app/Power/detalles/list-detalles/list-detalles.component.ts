import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallesService } from 'src/app/services/detalles.service';

@Component({
  selector: 'app-list-detalles',
  templateUrl: './list-detalles.component.html',
  styleUrls: ['./list-detalles.component.scss']
})
export class ListDetallesComponent implements OnInit {
  listaDetalles=new Array()
  detalles: any;
  codigo: any;

  constructor(private router: Router,private detallesService: DetallesService) {
    let params=this.router.getCurrentNavigation()?.extras.queryParams; 
    if(params){
      this.codigo=params.fac_Codigo;
    }


   }

  ngOnInit(): void {
    console.log(this.codigo+" llego")
    this.CargarDetalles();
  }

  CargarDetalles(){
    this.detallesService.buscar(this.codigo).subscribe(
      data => this.detalles = data,
      error => console.log(error)      
    );
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
