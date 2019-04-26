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
    var _this = this;
    socket.on('update', function() {
      console.log("Recieved update");
      _this.stats.updatePlayers();
    });
  }
  
  ionViewDidLeave() {
    //this.socket.disconnect();
  }
  
  ionViewDidEnter() {
    this.stats.updatePlayers();
    
    this.stats.getSocketPort((port) => {
      this.socket.ioSocket.io.opts.port = port.toString();
      this.socket.ioSocket.io.engine.port = port.toString();
      if(!this.socket.ioSocket.io.uri.includes(port.toString())) {
        this.socket.ioSocket.io.uri += ":" + port.toString();  
      }
      this.socket.connect();
    });
  }
}
