import { NgModule } from '@angular/core';
import { PlayerStatsComponent } from './player-stats/player-stats';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [PlayerStatsComponent],
	imports: [IonicModule],
	exports: [PlayerStatsComponent]
})
export class ComponentsModule {}
