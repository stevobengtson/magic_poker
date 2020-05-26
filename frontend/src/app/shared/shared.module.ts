import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { PlayingCardComponent } from './playing-card/playing-card.component';

@NgModule({
  declarations: [
    PlayingCardComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  exports: [
    PlayingCardComponent
  ]
})
export class SharedModule { }
