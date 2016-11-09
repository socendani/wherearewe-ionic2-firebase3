import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeMapComponent } from '../../components/change-map/change-map';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [ChangeMapComponent]
})
export class MapPage {

  constructor(
    public navCtrl: NavController,
    public changeMapComponent: ChangeMapComponent
  ) {
    console.log(this.navCtrl.id);
  }

}
