import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/domain/persona';
import { Factura } from 'src/app/domain/factura';
import { Producto } from 'src/app/domain/producto';
import { Detalles } from 'src/app/domain/detalles';
import { ClientesService } from 'src/app/services/clientes.service';
import { CompraService } from 'src/app/services/compra.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { DetallesService } from 'src/app/services/detalles.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.scss']
})
export class CrearCompraComponent implements OnInit {
  lstProductos: any
  listaProductos=new Array();
  lstDetalles: any
  subtotal:any;
  persona:Persona= new Persona;
  detalle: Detalles=new Detalles;
  listaPersonas=new Array();
  listaDetalles=new Array<Detalles>;
  fact: Factura= new Factura;
  dia: Number = new Date().getDate();
  mes: Number = new Date().getMonth()+1;
  anio: Number = new Date().getFullYear();
  mes2:String= this.arrMes(this.mes);
  dia2:String= this.arrdia(this.dia);
  fecha:string = this.dia2+"/"+this.mes2+"/"+this.anio;
  constructor(private productoService: ProductoService, private clienteService:ClientesService, 
    private compraService:CompraService,private router: Router,private detallesService:DetallesService) { }
  fechaFactura:Date= new Date();
  ngOnInit(): void {
    this.lstProductos = new Array<Producto>();
    
  }

  arrMes(m :Number) : String{
    if (m<10){
      return "0"+m;
    }
    return m+"";
  }
  arrdia(m :Number) : String{
    if (m<10){
      return "0"+m;
    }
    return m+"";
  }

  buscarProducto(codigo: String){
    this.productoService.buscar(Number(codigo)).subscribe((data:Object)=>{
      if(data==undefined){
        alert("Este producto no existe :(")
      }else{
        this.detalle=new Detalles;        
        this.lstProductos.push(data) 
        this.listaProductos.push(data)   
        var list = data;
        var cont:number =0;
          for (let i in list){
              if(cont===0){                
                this.setearCodigo(list[i as  keyof Object])
              }
              if(cont===2){                
                this.setearPrecio(list[i as  keyof Object])
              }            
              cont=cont+1;
          }
        this.actualizar(this.detalle.det_precio,this.detalle.det_cantidad)
        this.listaDetalles.push(this.detalle)
                          
      }
      console.log(this.listaDetalles)
    })
  }
  eliminar(p: Producto){
    this.lstProductos.splice(this.lstProductos.indexOf(p),1)
    this.listaProductos.splice(this.listaProductos.indexOf(p),1)
    var pos=this.lstProductos.indexOf(p)
    this.eliminardetalle(pos)
    console.log(this.listaProductos)
  }
  eliminar2(p: Detalles){
    this.lstProductos.splice(this.lstProductos.indexOf(p),1)
    this.listaProductos.splice(this.listaProductos.indexOf(p),1)
    var pos=this.lstProductos.indexOf(p)
    this.eliminardetalle(pos)
    console.log(this.listaProductos)
  }


  eliminardetalle(p: number){
    this.listaDetalles.splice(p,1)    
    console.log(this.listaDetalles)
  }
  setearCliente(codigo: any){
    for (let x=0; x<this.listaDetalles.length;x++){
      this.listaDetalles[x].fac_codigo=codigo
    }
    console.log(this.listaDetalles)
  }
  setearCodigo(codigo:any){
      this.detalle.pro_codigo=codigo;    
      this.detalle.det_cantidad=1;
  }
  setearPrecio(precio:any){
    this.detalle.det_precio=precio;
}


  buscarCliente(){
    this.clienteService.buscar(String(this.persona.per_cedula)).subscribe(
      data => this.persona = data,
      error => alert("Cliente no encontrado")    
    );
    
  }

  precio(p: Producto,d:Detalles):String{
    console.log(p.pro_precio)
    console.log(d.det_cantidad)
    return p.pro_precio+'--'+d.det_cantidad
  }

  actualizar(p :any,s:any):string{
    let a: any;
    p=p*s;
    a=p*0.12;
    a=a+p;    
    this.detalle.det_precio=a;
    return a;    
  }

  validateToken(token: Number) {
    return token;
  }


  validar():boolean{
    if(Object.keys(this.persona).length === 0){
      console.log("No a seleccionado una persona")
      return false
    }
    if(Object.keys(this.lstProductos).length=== 0){
      console.log("No a seleccionado un producto")
      return false;
    }
    return true;
  }
  crearDetalles(){
    for (let x=0; x<this.listaDetalles.length;x++){
      this.detallesService.crear(this.listaDetalles[x]).subscribe(data=> {
        console.log(data);
      })
    }
  }

  crear(){
    if(this.validar()){
      this.fact.fac_fecha=this.fechaFactura;
      this.fact.per_id=this.persona.per_id;
      this.fact.activo="T";
      this.compraService.crear(this.fact).subscribe(data=> {
        console.log(data);
        var cont:number =0;
        this.setearCliente(data)
        this.crearDetalles()
      })
      alert("Compra realizada correctamente gracias")

    }else{
      alert("No se creo la factura")
    }
    this.router.navigate(['facturas/listar'])
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
