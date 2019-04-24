import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatsProvider } from '../../providers/stats/stats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public stats: StatsProvider) {

  }

}
