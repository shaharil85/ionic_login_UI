import { Component } from '@angular/core';
import {LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController:ToastController,
              public loadingController:LoadingController,
              private router:Router)
              {
                //this.router.navigate(['/login'])
              }

  user_name:any='';
  pass_word:any='';


  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }

  async login_page() {
    if (this.user_name.length == 0) {
      this.showToast("Please insert your user name.", "danger");
    }
    else if (this.pass_word.length == 0) {
      this.showToast("Please insert your user password.", "danger");
    }
    else {
          if((this.user_name == "shaharil") && (this.pass_word == "1234")){
            this.router.navigate(['/login'])
          }
          else{
            this.showToast("Username or password are not correct...", "danger");
          }
    }
  }

}
