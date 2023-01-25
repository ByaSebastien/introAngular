import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDICComponent } from './crudic/crudic.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';

const routes: Routes = [
  { path: "exo1", component: Exercice1Component },
  { path: "exo2", component: Exercice2Component },
  { path: "crudic", component: CRUDICComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
