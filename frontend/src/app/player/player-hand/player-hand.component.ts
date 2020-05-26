import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@app/models/player';

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }
}
