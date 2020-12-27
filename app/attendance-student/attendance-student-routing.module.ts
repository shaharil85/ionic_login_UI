import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceStudentPage } from './attendance-student.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceStudentPageRoutingModule {}
