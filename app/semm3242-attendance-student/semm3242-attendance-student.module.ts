import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm3242AttendanceStudentPageRoutingModule } from './semm3242-attendance-student-routing.module';

import { Semm3242AttendanceStudentPage } from './semm3242-attendance-student.page';
import {CalendarModule} from "ion2-calendar";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm3242AttendanceStudentPageRoutingModule,
    CalendarModule,
    HttpClientModule
  ],
  declarations: [Semm3242AttendanceStudentPage]
})
export class Semm3242AttendanceStudentPageModule {}
