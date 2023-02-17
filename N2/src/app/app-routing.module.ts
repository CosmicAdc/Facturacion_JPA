import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './Power/clientes/crear/crear.component';
import { EditarComponent } from './Power/clientes/editar/editar.component';
import { ListarComponent } from './Power/clientes/listar/listar.component';
import { CrearCompraComponent } from './Power/Compra/crear-compra/crear-compra.component';
import { ListDetallesComponent } from './Power/detalles/list-detalles/list-detalles.component';
import { CreaFacturaComponent } from './Power/facturas/crea-factura/crea-factura.component';
import { ProCrearComponent } from './Power/Producto/crear/pro-crear.component';
import { ProEditarComponent } from './Power/Producto/pro-editar/pro-editar.component';
import { ProListarComponent } from './Power/Producto/pro-listar/pro-listar.component';


const routes: Routes = [
  {path:"",component:ListarComponent},
  {path:"productos/editPro",component: ProEditarComponent},
  {path:"productos/editPro",component: ProEditarComponent},
  {path:"productos/listPro",component: ProListarComponent},
  {path:"productos/crearPro",component: ProCrearComponent},
  {path:"cliente/crear",component: CrearComponent},
  {path:"cliente/editar",component: EditarComponent},
  {path:"cliente/listar",component: ListarComponent},
  {path:"facturas/listar",component: CreaFacturaComponent},
  {path:"detalles/listar",component: ListDetallesComponent},
  {path:"Compra/crear",component: CrearCompraComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
