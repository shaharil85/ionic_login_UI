import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm3242PageRoutingModule } from './semm3242-routing.module';

import { Semm3242Page } from './semm3242.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm3242PageRoutingModule
  ],
  declarations: [Semm3242Page]
})
export class Semm3242PageModule {}
