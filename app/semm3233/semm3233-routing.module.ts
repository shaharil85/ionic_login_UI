import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Semm3233Page } from './semm3233.page';

const routes: Routes = [
  {
    path: '',
    component: Semm3233Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Semm3233PageRoutingModule {}
