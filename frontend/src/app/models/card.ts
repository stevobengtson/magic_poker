export type CardRank = 'ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king';
export type CardSuit = 'hearts' | 'clubs' | 'diamonds' | 'spades';

export interface Card {
    rank: CardRank;
    suit: CardSuit;
}
