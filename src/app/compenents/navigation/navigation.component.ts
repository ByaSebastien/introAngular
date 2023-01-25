import { Component } from '@angular/core';
import { ILink } from 'src/app/models/ilink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  links: ILink[] = [
    { title: "Accueil", url: "/home" },
    { title: "Info", url: "/about" },
    {
      title: "Démo", url: "/demo", children: [
        { title: "Bindings", url: "/demo/demo1" },
        { title: "Pipes", url: "demo/demo2" },
        { title: "Directives", url: "demo/demo3" },
        { title: "Input/Output", url: "demo/demo4" },
        { title: "Formulaires", url: "demo/demo5" }
      ], isVisible: false
    },
    {
      title: "Exercice", url: "/exercice", children: [
        { title: "Timer", url: "/exercice/exo1" },
        { title: "Shopping List", url: "/exercice/exo2" },
        { title: "CRUDIC", url: "/exercice/crudic" }
      ], isVisible: false
    }
  ]

  toggleLink(i: number): void {
    for (let j = 0; j < this.links.length; j++) {
      if (j != i)
        this.links[j].isVisible = false;
    }
    this.links[i].isVisible = !this.links[i].isVisible
  }
}
