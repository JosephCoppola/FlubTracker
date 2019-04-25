import { NgModule } from '@angular/core';
import { PlayerStatsComponent } from './player-stats/player-stats';
import { IonicModule } from 'ionic-angular';
import { EditStatsModalComponent } from './edit-stats-modal/edit-stats-modal';

@NgModule({
	declarations: [
    PlayerStatsComponent,
    EditStatsModalComponent
  ],
	imports: [IonicModule],
  entryComponents: [
    EditStatsModalComponent
  ],
	exports: [
    PlayerStatsComponent,
    EditStatsModalComponent
  ]
})
export class ComponentsModule {}
