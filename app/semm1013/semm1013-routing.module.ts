import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm1013Page } from './semm1013.page';

const routes: Routes = [
  {
    path: '',
    component: Semm1013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm1013PageRoutingModule {}
