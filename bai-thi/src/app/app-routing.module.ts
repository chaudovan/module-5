import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NhadatComponent} from './nhadat/nhadat.component';
import {NhadatCreateComponent} from './nhadat-create/nhadat-create.component';


const routes: Routes = [
  {path: 'nhadat', component: NhadatComponent},
  {path: 'nhadat/create', component: NhadatCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
