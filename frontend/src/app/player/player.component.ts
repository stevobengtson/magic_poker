import { Component, OnInit, Input } from '@angular/core';
import { Player, PlayerPositionState } from '@app/models/player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

  get playerDealer(): boolean {
    return this.player.positionState == PlayerPositionState.DEALER;
  }

  get playerSmallBlind(): boolean {
    return this.player.positionState == PlayerPositionState.SMALLBLIND;
  }

  get playerBigBlind(): boolean {
    return this.player.positionState == PlayerPositionState.BIGBLIND;
  }
}
