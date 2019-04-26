import { Component, Input } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
import { StatsProvider } from '../../providers/stats/stats';

/**
 * Generated class for the EditStatsModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-stats-modal',
  templateUrl: 'edit-stats-modal.html'
})
export class EditStatsModalComponent {

  player : any;
  name : string;
  matchesWon : number; 
  totalMatches : number;
  flubs : number;

  constructor(public navParams : NavParams, public viewCtrl: ViewController, 
              public alertCtrl: AlertController, public stats: StatsProvider) {
    this.player = this.navParams.data.player;
    this.name = this.player.name;
    this.matchesWon = this.player.matchesWon;
    this.totalMatches = this.player.totalMatches;
    this.flubs = this.player.flubs;
  }
  
  onConfirm() {
    if(this.matchesWon > this.totalMatches) {
      let alert = this.alertCtrl.create({
        title: "Matches won can't be greater than total matches",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      return;
    }
    
    let newPlayerStats = {
      "_id": this.player._id,
      "matchesWon": this.matchesWon,
      "totalMatches": this.totalMatches,
      "flubs": this.flubs,
      "name": this.name
    }
    
    this.stats.updateStats(newPlayerStats, (err) => {
      if(err) {
        
      }
      else {
        this.stats.updatePlayers();
        this.viewCtrl.dismiss();
      }
    });
  }
  
  onCancel() {
    this.viewCtrl.dismiss();
  }
  
  onRenameClicked() {
    let alert = this.alertCtrl.create({
      title: this.name + "'s New Name",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Joe is the best',
          value: this.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, 
        {
          text: 'Confirm',
          handler: (data) => {
            this.name = data.name;
          }
        }
      ]
    });
    
    alert.present();
  }
  
  validateNumber(number) {
    if(number < 0) {
      return 0;
    }
    else {
      return number;
    }
  }
  
  subtractStat(stat) {
    stat--;
    stat = this.validateNumber(stat);
    return stat;
  }
  
  addStat(stat) {
    stat++;
    return stat;
  }
}
