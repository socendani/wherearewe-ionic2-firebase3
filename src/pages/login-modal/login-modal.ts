import { UserModel } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

// import { ColorPickerService } from 'angular2-color-picker';
// import { ColorPickerModule } from 'ColorPickerModule';



@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html'
})
export class LoginModalPage implements OnInit {

  private user: UserModel;
  public color: string = "#127bdc";

  constructor(
    private viewCtrl: ViewController
  ) { }
  ngOnInit() {
    this.user = new UserModel(null, "", "", null);
  }
  ionViewDidLoad() {
    console.log('Hello LoginModal Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss(this.user);
  }


}
