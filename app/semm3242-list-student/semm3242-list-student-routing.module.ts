import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm3242ListStudentPage } from './semm3242-list-student.page';

const routes: Routes = [
  {
    path: '',
    component: Semm3242ListStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm3242ListStudentPageRoutingModule {}
