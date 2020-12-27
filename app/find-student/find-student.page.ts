import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.page.html',
  styleUrls: ['./find-student.page.scss'],
})
export class FindStudentPage implements OnInit {

  student_name:any='';
  matric_number:any='';
  data_list = [];

  constructor(public modalController:ModalController,
              public http:HttpClient,
              public toastController:ToastController,
              public loadingController:LoadingController)
              {}

  ngOnInit() {
  }

  async getlist(){
    if (this.matric_number.length == 0) {
      this.showToast("Please insert student matric number.", "danger")
    }
    else {
      const loading = await this.loadingController.create({
        message: 'Searching.Please wait..',
      });
      await loading.present();

      let prms1: any = {matric_number: this.matric_number};
      console.log(prms1);

      //this.http.get('http://localhost/instrument/get_name_data.php',{params:prms}).subscribe(data=>{
      this.http.get('https://asqsolution.com/control/get_matric_name.php', {params: prms1}).subscribe(data => {
        loading.dismiss();
        this.data_list = <Array<any>> data
        this.student_name = this.data_list[0];
        //let prms2: any = {student_name: this.student_name[1]};
        let prms2 = this.student_name;
        console.log(prms2);

        //this.http.get('http://localhost/instrument/get_name_data.php',{params:prms}).subscribe(data=>{
        this.http.get('https://asqsolution.com/control/get_list_data.php', {params: prms2}).subscribe(data => {
          this.data_list = <Array<any>> data
          console.log(this.data_list);
          if(this.data_list.length == 0)
          {this.showToast("No Record", "danger")}
        });

      });
    }
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
