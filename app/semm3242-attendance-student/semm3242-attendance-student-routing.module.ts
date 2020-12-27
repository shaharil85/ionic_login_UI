import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm3242AttendanceStudentPage } from './semm3242-attendance-student.page';

const routes: Routes = [
  {
    path: '',
    component: Semm3242AttendanceStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm3242AttendanceStudentPageRoutingModule {}
