import { Component, OnInit } from '@angular/core';
import { Player, PlayerPositionState, PlayerState } from '@app/models/player';
import { CardRank, CardSuit, Card } from '@app/models/card';

@Component({
  selector: 'poker-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players: Player[] = [
    { position: 1, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEALER, state: PlayerState.WAITING },
    { position: 2, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.SMALLBLIND, state: PlayerState.WAITING },
    { position: 3, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.BIGBLIND, state: PlayerState.WAITING },
    { position: 4, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 5, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 6, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 7, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 8, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 9, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
    { position: 10, balance: 0.00, playing: true, showing: true, positionState: PlayerPositionState.DEFAULT, state: PlayerState.WAITING },
  ];

  tableCards: Card[] = [];

  cardDeck: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setupDeck();
    this.shuffleDeck();
    this.payoutPlayers();
    this.dealCards();

    console.log(this.players, this.cardDeck, this.tableCards);
  }

  private setupDeck() {
    let ranks: CardRank[] = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let suits: CardSuit[] = ['hearts', 'clubs', 'diamonds', 'spades'];

    this.cardDeck = [];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.cardDeck.push({ rank, suit });
      });
    });
  }

  private shuffleDeck() {
    for (let i = (this.cardDeck.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cardDeck[i];
      this.cardDeck[i] = this.cardDeck[j];
      this.cardDeck[j] = temp;
    }    
  }

  private payoutPlayers() {
    let totalCash = 100.00;
    this.players.forEach(player => {
      player.playing = true;

      if (totalCash > 0.00 && this.coinFlip()) {
        player.balance = Math.round((Math.random() * totalCash) * 100) / 100;
        totalCash -= player.balance;
      }

      if (player.balance <= 0.00) {
        player.playing = false;
      }
    });
  }

  private dealCards() {
    this.players.forEach(player => {
      if (player.playing) {
        player.firstCard = this.cardDeck.pop();
        player.secondCard = this.cardDeck.pop();
      }
    });

    this.tableCards = [];

    // Burn and turn Flop
    this.cardDeck.pop();
    this.tableCards.push(this.cardDeck.pop());
    this.tableCards.push(this.cardDeck.pop());
    this.tableCards.push(this.cardDeck.pop());

    // Burn and turn
    this.cardDeck.pop();
    this.tableCards.push(this.cardDeck.pop());

    // Burn and turn river
    this.cardDeck.pop();
    this.tableCards.push(this.cardDeck.pop());
  }

  private coinFlip(): boolean {
    return (Math.floor(Math.random() * 2) == 0);
}
}
