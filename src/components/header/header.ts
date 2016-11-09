import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'header',
  templateUrl: 'header.html',
})
export class HeaderComponent {

  title: string;

  constructor(
    public navCtrl: NavController

  ) {
    this.title = 'Hello World';
  }

  openModalLogin() {
    console.log("zzzzzzzzzzzzzzzz");
  }

}
