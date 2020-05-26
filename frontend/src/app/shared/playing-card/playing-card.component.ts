import { Component, OnInit, Input } from '@angular/core';
import { AppConfigService } from '@app/services/app-config.service';

import { Card } from '@app/models/card';

@Component({
  selector: 'playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit {
  @Input() playingCard: Card;
  @Input() enlarge: boolean = true;
  @Input() showing: boolean = false;

  constructor(private readonly config: AppConfigService) { }

  ngOnInit(): void {
  }

  get cardImageUrl(): string {
    return (this.showing ? this.buildCardUrl() : this.buildCardBackUrl());
  }

  private buildCardUrl(): string {
    return `${this.config.settings.cardAssetBaseUrl}/${this.playingCard.rank}_of_${this.playingCard.suit}.png`;
  }

  private buildCardBackUrl(): string {
    return `${this.config.settings.cardAssetBaseUrl}/card_back.svg`;
  }
}
