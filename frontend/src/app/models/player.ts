import { Card } from '@models/card';

export enum PlayerPositionState {
  DEFAULT,
  DEALER,
  SMALLBLIND,
  BIGBLIND
}

export enum PlayerState {
  SITOUT,
  WAITING,
  CALLED,
  RAISED,
  FOLDED
}

export interface Player {
    position: number;
    positionState: PlayerPositionState;
    state: PlayerState;
    playing: boolean;
    showing: boolean;
    balance: number;
    firstCard?: Card;
    secondCard?: Card;
  }
  