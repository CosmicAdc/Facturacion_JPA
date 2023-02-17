import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Factura } from 'src/app/domain/factura';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-crea-factura',
  templateUrl: './crea-factura.component.html',
  styleUrls: ['./crea-factura.component.scss']
})
export class CreaFacturaComponent implements OnInit {
  facturas: any
  constructor(private router: Router,private facturaServices: FacturasService)  { }

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(){
    this.facturas = this.facturaServices.obtener().subscribe(
      data => this.facturas = data,
      error => console.log(error)
    );

  }

  edit(factura:Factura){

    this.facturaServices.anular(Number(factura.fac_Codigo)).subscribe(data=>{
      console.log(data);
    })
    window.location.reload()
  }

  ver(factura:Factura){
      console.log("Envio"+factura.fac_Codigo)
      let params:NavigationExtras={
        queryParams:{
          fac_Codigo:factura.fac_Codigo,
          per_id:factura.per_id
        }
      } 
      this.router.navigate(['detalles/listar'],params)
  }

  goListClientes(){

    this.router.navigate(['cliente/listar'])
  }

  goCreaCliente(){
    this.router.navigate(['cliente/crear'])
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
