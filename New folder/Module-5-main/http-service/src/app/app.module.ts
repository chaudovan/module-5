import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student } from './model/student';
import { ClassComponent } from './test/class/class.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './test/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { StudentAddComponent } from './test/student-add/student-add.component';
import {ReactiveFormsModule} from "@angular/forms";

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StudentEditComponent } from './test/student-edit/student-edit.component';
import {StudentComponent} from './student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassComponent,
    NavbarComponent,
    StudentAddComponent,
    StudentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
