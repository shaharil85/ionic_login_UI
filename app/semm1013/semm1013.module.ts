import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm1013PageRoutingModule } from './semm1013-routing.module';

import { Semm1013Page } from './semm1013.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm1013PageRoutingModule
  ],
  declarations: [Semm1013Page]
})
export class Semm1013PageModule {}
