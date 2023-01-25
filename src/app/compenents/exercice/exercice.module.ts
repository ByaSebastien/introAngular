import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Exercice2Component } from './exercice2/exercice2.component';
import { PanierComponent } from './exercice2/panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CRUDICComponent } from './crudic/crudic.component';
import { ReadComponent } from './crudic/read/read.component';
import { BookFormComponent } from './crudic/book-form/book-form.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exercice1Component,
    Exercice2Component,
    PanierComponent,
    CRUDICComponent,
    ReadComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
