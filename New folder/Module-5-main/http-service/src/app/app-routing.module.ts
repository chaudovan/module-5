import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {ClassRoomComponent} from './class-room/class-room.component';

const routes: Routes = [
  {path: 'student-list', component: StudentComponent},
  {path: 'student-add', component: StudentCreateComponent},
  {path: 'student-edit/:id', component: StudentEditComponent},
  {path: 'class', component: ClassRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
