
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [FirebaseService]

})
export class AboutPage {

  public config: Object;
  public logs: Object;


  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseService
  ) {
    this.config = {
      name:"loading..",
      version:0
    };
    this.logs = {};
  }

  // onPageDidEnter() {
  ionViewWillEnter() {


    // DATA SERVICE IN ACTION
    console.log("ionViewWillEnter6");
    // this.firebaseService.db.child('logs').on('value', data => {
    this.firebaseService.configNode.once('value').then(
      data => {
        console.log(data.val());
        this.config = data.val();
      }, (error) => console.log(error)

    );

    this.firebaseService.logNode.once('value').then(
      data => {
        this.logs = data.val();
      }

    );

    this.firebaseService.logNode.once('value').then(data => {
      this.logs = data.val();
    }, (error) => console.log(error)

    );

  }

}
