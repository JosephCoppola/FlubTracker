import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { StatsProvider } from '../../providers/stats/stats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public stats: StatsProvider, public alertCtrl: AlertController) {

  }
  
  onNewPlayerClicked() {
      let alert = this.alertCtrl.create({
          title: "New Player Name",
          inputs: [
            {
              name: 'name',
              type: 'text',
              placeholder: 'Joe is the best'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            }, 
            {
              text: 'Create',
              handler: (data) => {
                this.stats.createNewPlayer(data.name);
              }
            }
          ]
      });
      
      alert.present();
  }
}
