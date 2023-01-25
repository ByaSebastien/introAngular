import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {

  shoppingList: IProduct[] = []

  item: string = "";

  ajouter(): void {
    //Si pas vide ou full espace
    if (this.item.trim() !== "") {
      //le produit existe t il deja?
      let existingProduct = this.shoppingList.find(p => p.name.toLowerCase() === this.item.toLowerCase().trim());
      //si il y en a pas
      if (!existingProduct) {
        //ajout dans la liste
        this.shoppingList.push({
          name: this.item.trim(),
          qtt: 1
        });
      } else {
        //ajout 1 qtt
        existingProduct.qtt++;
      }
    }
    this.item = "";
  }
  delete(i: number): void {
    this.shoppingList.splice(i, 1);
  }
  up(i: number): void {
    this.shoppingList[i].qtt++;
  }
  down(i: number): void {
    this.shoppingList[i].qtt--;
    if (this.shoppingList[i].qtt === 0)
      this.delete(i);
  }
}
