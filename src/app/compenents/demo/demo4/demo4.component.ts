import { Component } from '@angular/core';
import { IFormateur } from 'src/app/models/iformateur';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  prenomParent: string = "Roger";
  age: number = 20;

  envieEnfant: string = "Demandez à l'enfant";

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

  formateurDuJour: string = "Inconnu"

  changeEnvie(envie: string) {
    this.envieEnfant = envie;
  }
  setName(nom: string): void {
    this.formateurDuJour = nom;
  }
}
