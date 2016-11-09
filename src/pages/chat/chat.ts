import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthMiniService } from '../../services/auth.mini.service';
import { ChangeMapComponent } from '../../components/change-map/change-map';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [ChangeMapComponent]
})
export class ChatPage {

  constructor(
    public navCtrl: NavController,
    private authMiniService: AuthMiniService,
    private changeMapComponent: ChangeMapComponent
) {
     authMiniService.checkCredentials();
  }

  ionViewDidLoad() {
    console.log('Hello Chat Page');
  }

}
