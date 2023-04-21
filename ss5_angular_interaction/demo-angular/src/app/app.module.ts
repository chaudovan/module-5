import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LikeComponent } from './like/like.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherCreateComponent } from './teacher-create/teacher-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    LikeComponent,
    TeacherDetailComponent,
    TeacherCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
