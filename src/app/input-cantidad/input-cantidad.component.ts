import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../product-list/Producto';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad: number;
  @Input()
  max: number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  sumarCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maxReached.emit("Se alcanzo le maximo que puede comprar");
  }

  restarCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maxReached.emit("Se alcanzo le maximo que puede comprar");
  }

}
