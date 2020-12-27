import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm3242Page } from './semm3242.page';

const routes: Routes = [
  {
    path: '',
    component: Semm3242Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm3242PageRoutingModule {}
