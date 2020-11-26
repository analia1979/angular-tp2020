import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ProductosComponent } from './productos/productos.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCartComponent,
    ContactComponent,
    ProductosComponent,
    InputCantidadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
