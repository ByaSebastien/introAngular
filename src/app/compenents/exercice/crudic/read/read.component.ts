import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {

  @Input() books!: IBook[];

  @Output() sendModify: EventEmitter<number>;
  @Output() sendDelete: EventEmitter<number>;

  constructor() {
    this.sendModify = new EventEmitter<number>();
    this.sendDelete = new EventEmitter<number>();

  }

  onDelete(i: number): void {
    this.sendDelete.emit(i);
  }
  onModify(i: number): void {
    this.sendModify.emit(i);
  }
}
