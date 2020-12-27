import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm3242FindStudentPage } from './semm3242-find-student.page';

const routes: Routes = [
  {
    path: '',
    component: Semm3242FindStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm3242FindStudentPageRoutingModule {}
