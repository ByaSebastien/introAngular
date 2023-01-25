import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './compenents/about/about.component';
import { DemoComponent } from './compenents/demo/demo.component';
import { ExerciceComponent } from './compenents/exercice/exercice.component';
import { HomeComponent } from './compenents/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "demo", component: DemoComponent, loadChildren: () => import('./compenents/demo/demo.module').then(m => m.DemoModule) },
  { path: "exercice", component: ExerciceComponent, loadChildren: () => import('./compenents/exercice/exercice.module').then(m => m.ExerciceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
