import { Component, Input } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navParams : NavParams, public viewCtrl: ViewController) {
    this.player = this.navParams.data.player;
    this.name = this.player.name;
    this.matchesWon = this.player.matchesWon;
    this.totalMatches = this.player.totalMatches;
    this.flubs = this.player.flubs;
  }
  
  onEditSubmit() {
    
  }
  
  onCancel() {
    this.viewCtrl.dismiss();
  }
}
