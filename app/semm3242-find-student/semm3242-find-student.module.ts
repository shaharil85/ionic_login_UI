import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm3242FindStudentPageRoutingModule } from './semm3242-find-student-routing.module';

import { Semm3242FindStudentPage } from './semm3242-find-student.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm3242FindStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [Semm3242FindStudentPage]
})
export class Semm3242FindStudentPageModule {}
