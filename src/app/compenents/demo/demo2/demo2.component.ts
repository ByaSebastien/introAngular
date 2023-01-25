import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  myString: string = "Hello World!!!";
  myNumber: number = 14.6924754242427;
  myDate: Date = new Date();
  temperature: number = 25;
}
