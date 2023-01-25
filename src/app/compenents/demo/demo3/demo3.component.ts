import { Component } from '@angular/core';
import { IFormateur } from 'src/app/models/iformateur';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {

  //ngModel
  prenom: string = "";

  //ngStyle
  myColor: string = "";
  myColors: string[] = ["red", "blue", "yellow", "green"]
  i: number = 0

  //ngClass
  isGros: boolean = false;
  isGras: boolean = false;
  isItalique: boolean = false;

  //ngIf
  isJour: boolean = true;

  //ngFor
  formateurs: IFormateur[] = [{
    id: 1,
    nom: "Ovyn",
    prenom: "Flavian",
    dateNaiss: new Date(1991, 7, 19),
    avatar: '../../assets/images/flavian.png'
  },
  {
    id: 2,
    nom: "Ly",
    prenom: "Khun",
    dateNaiss: new Date(1982, 4, 6),
    avatar: '../../assets/images/khun.png'
  },
  {
    id: 3,
    nom: "Chaineux",
    prenom: "Gavin",
    dateNaiss: new Date(1993, 9, 18),
    avatar: '../../assets/images/gavin.png'
  },
  {
    id: 4,
    nom: "Beurive",
    prenom: "Aude",
    dateNaiss: new Date(1989, 9, 16),
    avatar: '../../assets/images/aude.png'
  }]

  //ngSwitch
  choix?: number

  constructor() {
    setInterval(() => {
      this.myColor = this.myColors[this.i];
      this.i++;
      if (this.i >= 4)
        this.i = 0;
    }, 1000)
  }

  toggleIsGros(): void {
    this.isGros = !this.isGros;
  }
  toggleIsGras(): void {
    this.isGras = !this.isGras;
  }
  toggleIsItalique(): void {
    this.isItalique = !this.isItalique;
  }
  toggleIsJour(): void {
    this.isJour = !this.isJour;
  }
}
