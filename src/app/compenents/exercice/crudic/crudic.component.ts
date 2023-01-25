import { Component } from '@angular/core';
import { IBook } from 'src/app/models/ibook';

@Component({
  selector: 'app-crudic',
  templateUrl: './crudic.component.html',
  styleUrls: ['./crudic.component.scss']
})
export class CRUDICComponent {
  books: IBook[] = [
    {
      title: "L'art de la guerre",
      author: "Sun Tzu",
      created: new Date(2002, 12, 11)
    },
    {
      title: "Kingdom",
      author: "je sais pas",
      created: new Date(2020, 12, 1)
    },
    {
      title: "Les trois petits cochons",
      author: "Le mechant loup",
      created: new Date(1980, 1, 1)
    }
  ]
  isBasicMode: boolean = true;
  isAddMode: boolean = false;
  isModifyMode: boolean = false;
  idBookToChange: number = -1;

  GoAdd(): void {
    this.isBasicMode = false;
    this.isAddMode = true;
  }
  Add(book: IBook): void {
    this.books.push(book);
    this.isBasicMode = true;
    this.isAddMode = false;
  }
  GoModify(i: number) {
    this.isBasicMode = false;
    this.isModifyMode = true;
    this.idBookToChange = i;
  }
  Modify(book: IBook) {
    if (this.idBookToChange !== undefined) {
      this.books[this.idBookToChange].title = book.title;
      this.books[this.idBookToChange].author = book.author;
      this.books[this.idBookToChange].created = book.created;
    }
    this.isBasicMode = true;
    this.isModifyMode = false;
  }
  Delete(i: number) {
    this.books.splice(i, 1);
  }
}
