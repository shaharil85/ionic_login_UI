import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm3242ListStudentPageRoutingModule } from './semm3242-list-student-routing.module';

import { Semm3242ListStudentPage } from './semm3242-list-student.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm3242ListStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [Semm3242ListStudentPage]
})
export class Semm3242ListStudentPageModule {}
