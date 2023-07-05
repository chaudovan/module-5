import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeEditComponent,
    EmployeeCreateComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
