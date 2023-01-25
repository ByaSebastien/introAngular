import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() prenomDeMonParent: string = "";
  @Input() AgeParent: number = 20;

  @Output() sendEnvie: EventEmitter<string>;

  constructor() {
    this.sendEnvie = new EventEmitter<string>();
  }

  triggerEnvie(besoin: string): void {
    this.sendEnvie.emit(besoin);
  }
}
