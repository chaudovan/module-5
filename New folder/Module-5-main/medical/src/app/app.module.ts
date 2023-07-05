import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MedicalListComponent} from './medical-managerment/medical-list/medical-list.component';
import {MedicalEditComponent} from './medical-managerment/medical-edit/medical-edit.component';
import {MedicalCreateComponent} from './medical-managerment/medical-create/medical-create.component';
import {PatientListComponent} from './patient-managerment/patient-list/patient-list.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'medical-list'},
  {path: 'medical-list', component: MedicalListComponent},
  {path: 'medical-create', component: MedicalCreateComponent},
  {path: 'medical-edit/:id', component: MedicalEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MedicalListComponent,
    MedicalEditComponent,
    MedicalCreateComponent,
    PatientListComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
