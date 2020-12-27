import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";

@Component({
  selector: 'app-semm3242-attendance-student',
  templateUrl: './semm3242-attendance-student.page.html',
  styleUrls: ['./semm3242-attendance-student.page.scss'],
})
export class Semm3242AttendanceStudentPage implements OnInit {

  from_date: string;
  data_list = [];

  constructor(public modalController:ModalController,
              public http:HttpClient,
              public toastController:ToastController,
              public loadingController:LoadingController)
  {
    this.from_date = new Date().toISOString();
    //this.setDate();
  }

  ngOnInit() {
  }

  async setDate() {
    console.log(this.from_date);
    var dateParts = this.from_date.split("T");
    console.log(dateParts[0]);
    this.from_date =dateParts[0];
  }

  async openCalendar() {

    let fromDate: any = new Date("2020/01/01");

    const options: CalendarModalOptions = {
      //disableWeeks: [0, 6]
      title: 'BASIC',
      color: 'danger',
      from: fromDate,
      //to: toDate,
      defaultScrollTo: new Date()
    };

    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date.string);
    this.from_date = date.string;
  }

  async list_date(){

    const loading = await this.loadingController.create({
      message: 'Downloading.Please wait..',
    });
    await loading.present();

    let prms: any = {from_date: this.from_date};
    //this.http.get('http://localhost/control/get-cart-list.php',{params:prms}).subscribe(data=>{
    this.http.get('https://asqsolution.com/instrument/list_date.php',{params:prms}).subscribe(data => {
      loading.dismiss();
      this.data_list = <Array<any>> data
      console.log(this.data_list);
      if (this.data_list.length != 0) {
        //this.showToast("DONE", "secondary");
      } else {
        this.showToast("No Student on that date.", "danger")
      }
    });
  }

  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }

}

