import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceStudentPageRoutingModule } from './attendance-student-routing.module';

import { AttendanceStudentPage } from './attendance-student.page';
import {CalendarModule} from "ion2-calendar";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceStudentPageRoutingModule,
    CalendarModule,
    HttpClientModule
  ],
  declarations: [AttendanceStudentPage]
})
export class AttendanceStudentPageModule {}
