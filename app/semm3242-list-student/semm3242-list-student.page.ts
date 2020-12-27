import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-semm3242-list-student',
  templateUrl: './semm3242-list-student.page.html',
  styleUrls: ['./semm3242-list-student.page.scss'],
})
export class Semm3242ListStudentPage implements OnInit {

  data_list = [];

  constructor(public modalController:ModalController,
              public http:HttpClient,
              public toastController:ToastController,
              public loadingController:LoadingController)
              {this.list_all_student();}

  ngOnInit() {
  }

  async list_all_student() {

    const loading = await this.loadingController.create({
      message: 'Searching. Please wait..',
    });
    await loading.present();

    //this.http.get('http://localhost/control/get-cart-list.php',{params:prms}).subscribe(data=>{
    this.http.get('https://asqsolution.com/instrument/show_all_list_data.php').subscribe(data => {
      loading.dismiss();
      this.data_list = <Array<any>> data
      console.log(this.data_list);
    });
  }
}
