import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  @Input() listProduct!: IProduct[];

  @Output() sendDelete: EventEmitter<number>;
  @Output() sendQttUp: EventEmitter<number>;
  @Output() sendQttDown: EventEmitter<number>;

  constructor() {
    this.sendDelete = new EventEmitter<number>();
    this.sendQttUp = new EventEmitter<number>();
    this.sendQttDown = new EventEmitter<number>();
  }

  onDelete(i: number): void {
    this.sendDelete.emit(i);
  }
  onUp(i: number): void {
    this.sendQttUp.emit(i);
  }
  onDown(i: number): void {
    this.sendQttDown.emit(i);
  }
}
