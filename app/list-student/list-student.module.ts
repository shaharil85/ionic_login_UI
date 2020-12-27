import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStudentPageRoutingModule } from './list-student-routing.module';

import { ListStudentPage } from './list-student.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ListStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListStudentPage]
})
export class ListStudentPageModule {}
