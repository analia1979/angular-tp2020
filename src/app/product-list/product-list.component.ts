import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [{
    nombre: 'Queso Parmesano',
    marca: "La Blanqueada",
    precio: 20,
    stock: 10,
    cantidad: 0,
    imagen: 'assets/images/parmesanoLaBlanqueada.jpg'
  },
  {
    nombre: 'Queso Fontina',
    marca: "La Blanqueada",
    precio: 260,
    stock: 10,
    cantidad: 0,
    imagen: 'assets/images/quesoFontinaBlanqueada.jpg'
  },
  {
    nombre: 'Queso Gouda s/sal',
    marca: "Los Toldos",
    precio: 200,
    stock: 0,
    cantidad: 0,
    imagen: 'assets/images/QuesoGoudaSinSalLosToldos.jpg'
  },
  ];
  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  addToCart(producto) {
    //aca deberia  agregar al carrito del servicio
    this.cart.addToCart(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;

  }
  maxReached(event): void {
    alert(event);
  }

}
