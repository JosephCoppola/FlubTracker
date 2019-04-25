import { Component, Input } from '@angular/core';

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

  constructor() {
  }
  
  getPlayerWinPercentage() {
    if(this.playerObj.matchesWon == 0) {
      return "0%";
    }
    else {
      return Math.floor((this.playerObj.matchesWon / this.playerObj.totalMatches) * 100) + "%";
    }
  }
}
