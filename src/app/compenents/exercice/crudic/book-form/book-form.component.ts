import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBook } from 'src/app/models/ibook';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  monFormulaire: FormGroup;

  @Input() currentBook: IBook | undefined

  @Output() sendBook: EventEmitter<IBook>;

  constructor(private _fb: FormBuilder) {
    this.sendBook = new EventEmitter<IBook>();
    this.monFormulaire = this._fb.group({
      title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      author: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      created: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    if (this.currentBook) {
      this.monFormulaire.patchValue({
        title: this.currentBook.title,
        author: this.currentBook.author,
        created: this.currentBook.created,
      })
    }
  }

  onSubmit(): void {
    if (this.monFormulaire.valid) {

      this.currentBook = {
        title: this.monFormulaire.value.title,
        author: this.monFormulaire.value.author,
        created: this.monFormulaire.value.created
      }
      this.sendBook.emit(this.currentBook);
    }
    this.monFormulaire.markAllAsTouched();
  }
}
