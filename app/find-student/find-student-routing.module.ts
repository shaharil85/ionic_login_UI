import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindStudentPage } from './find-student.page';

const routes: Routes = [
  {
    path: '',
    component: FindStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindStudentPageRoutingModule {}
