import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TudienComponent } from './tudien/tudien.component';
import { TudienDetailComponent } from './tudien-detail/tudien-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TudienComponent,
    TudienDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
