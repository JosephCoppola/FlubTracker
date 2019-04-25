import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { EditStatsModalComponent } from '../edit-stats-modal/edit-stats-modal';


/**
 * Generated class for the PlayerStatsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player-stats',
  templateUrl: 'player-stats.html'
})
export class PlayerStatsComponent {

  @Input()
  playerObj : any;

  constructor(public modalController: ModalController) {
  }
  
  getPlayerWinPercentage() {
    if(this.playerObj.matchesWon == 0) {
      return "0%";
    }
    else {
      return Math.floor((this.playerObj.matchesWon / this.playerObj.totalMatches) * 100) + "%";
    }
  }
  
  onEditPlayerClicked() {
    const modal = this.modalController.create(EditStatsModalComponent, { player: this.playerObj });
    
    modal.present();
  }
}
