import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {

  tab1Root: any = MapPage;
  tab2Root: any = ChatPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
