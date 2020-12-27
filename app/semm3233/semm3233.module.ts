import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Semm3233PageRoutingModule } from './semm3233-routing.module';

import { Semm3233Page } from './semm3233.page';
import {CalendarModule} from "ion2-calendar";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Semm3233PageRoutingModule
  ],
  declarations: [Semm3233Page]
})
export class Semm3233PageModule {}
