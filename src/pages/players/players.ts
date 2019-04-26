import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsProvider } from '../../providers/stats/stats';
import { Socket } from 'ng-socket-io';


/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public stats: StatsProvider,
              private socket: Socket) {
  }
  
  ionViewDidLeave() {
    this.socket.disconnect();
  }
  
  ionViewDidEnter() {
    this.stats.updatePlayers();
    this.socket.connect();
  }
}
