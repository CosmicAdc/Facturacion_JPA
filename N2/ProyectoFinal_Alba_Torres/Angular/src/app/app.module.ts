import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CrearComponent } from './Power/clientes/crear/crear.component';
import {HttpClientModule} from '@angular/common/http';
import { ListarComponent } from './Power/clientes/listar/listar.component';
import { CreaFacturaComponent } from './Power/facturas/crea-factura/crea-factura.component';
import { ListarFacturaComponent } from './Power/factura/listar-factura/listar-factura.component';
import { CrearCompraComponent } from './Power/Compra/crear-compra/crear-compra.component';
import { ProListarComponent } from './Power/Producto/pro-listar/pro-listar.component';

import { ProEditarComponent } from './Power/Producto/pro-editar/pro-editar.component';
import { ProCrearComponent } from './Power/Producto/crear/pro-crear.component';
import { EditarComponent } from './Power/clientes/editar/editar.component';
import { ListDetallesComponent } from './Power/detalles/list-detalles/list-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProCrearComponent,
    CrearComponent,
    ListarComponent,
    CreaFacturaComponent,
    ListarFacturaComponent,
    CrearCompraComponent,
    ProListarComponent,
    ProEditarComponent,
    EditarComponent,
    ListDetallesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
