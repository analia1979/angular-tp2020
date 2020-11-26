import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../product-list/Producto';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {


  cartList$: Observable<Producto[]>;
  constructor(private cart: ProductCartService) {
    //necesito suscribirme  para recibir los cambios
    this.cartList$ = cart.cartList.asObservable();
    // cart.cartList.subscribe((observable => this.cartList = observable))
  }



  ngOnInit(): void {
  }

}
