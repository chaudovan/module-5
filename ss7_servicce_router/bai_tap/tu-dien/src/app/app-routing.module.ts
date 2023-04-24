import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TudienComponent} from './tudien/tudien.component';
import {TudienDetailComponent} from './tudien-detail/tudien-detail.component';


const routes: Routes = [
  {path: 'tudien', component: TudienComponent},
  {path: 'tudien/:id', component: TudienDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
