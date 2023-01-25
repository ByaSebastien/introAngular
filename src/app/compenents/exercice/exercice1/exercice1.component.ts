import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component {

  totalSeconds: number = 0;
  timer: any = undefined;

  start(): void {
    this.timer = setInterval(() => {
      this.totalSeconds++
    }, 1000)
  }
  pause(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  reset(): void {
    this.totalSeconds = 0
    this.pause();
  }
}
