
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';

import { ChangeMapComponent } from '../../components/change-map/change-map';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [FirebaseService,ChangeMapComponent]

})
export class AboutPage {

  public config: any;
  public logs: any;


  constructor(
    public navCtrl: NavController,
    private firebaseService: FirebaseService,
    private changeMapComponent: ChangeMapComponent
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
