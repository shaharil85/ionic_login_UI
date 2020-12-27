import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindStudentPageRoutingModule } from './find-student-routing.module';

import { FindStudentPage } from './find-student.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FindStudentPage]
})
export class FindStudentPageModule {}
