import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalles } from 'src/app/domain/detalles';
import { Factura } from 'src/app/domain/factura';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
import { DetallesService } from 'src/app/services/detalles.service';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-list-detalles',
  templateUrl: './list-detalles.component.html',
  styleUrls: ['./list-detalles.component.scss']
})
export class ListDetallesComponent implements OnInit {
  listaDetalles=new Array<Detalles>;
  detalles: any;
  codigo: any;
  total:Number=0;
  codPersona:any;
  persona:Persona= new Persona;
  factura: Factura= new Factura;
  constructor(private router: Router,private detallesService: DetallesService,private clienteService:ClientesService,
    private facturaService:FacturasService) {

    let params=this.router.getCurrentNavigation()?.extras.queryParams; 
    if(params){
      this.codigo=params.fac_Codigo;
      this.codPersona=params.per_id;
    }


   }

  ngOnInit(): void {
    console.log(this.codigo+" llego")
    this.CargarDetalles();
    this.CargarPersona();
    this.CargarCabecera();
    this.calcularTotal();
  }

  CargarDetalles(){
    this.detallesService.buscar(this.codigo).subscribe(
      data => {
        this.detalles = data
        
        var list = data;
        var cont:number =0;
          for (let i in list){
              this.total=this.total+ list[i].det_precio                       
              cont=cont+1;
          }

      }
    );
  }
  CargarPersona(){
        this.clienteService.buscar2(this.codPersona).subscribe(
        data => this.persona = data,
        error => console.log(error)
      );
    }

    CargarCabecera(){
      this.facturaService.buscar(this.codigo).subscribe(
        data => this.factura = data,
        error => console.log(error)      
      );
    }
    calcularTotal(){
     
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
