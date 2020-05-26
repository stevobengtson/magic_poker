import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared/shared.module';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerHandComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    SharedModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
