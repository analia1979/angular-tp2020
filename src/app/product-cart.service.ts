import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './product-list/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  /**
   *  maneja la logica del carrito
   */
  private _cartList: Producto[] = [];
  cartList: BehaviorSubject<Producto[]> = new BehaviorSubject([]);


  constructor() { }

  addToCart(producto: Producto) {

    let item: Producto = this._cartList.find((v1) => v1.nombre == producto.nombre);
    if (!item) {
      this._cartList.push({ ...producto });
    }
    else {
      item.cantidad += producto.cantidad;
    }
    this.cartList.next(this._cartList);//notifica el valor
  }

}
