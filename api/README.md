# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


User - Login
 - Groups
  - Games
   - Tables
    - Deck ? (Just an array of cards)
    - Players
     - Hand
      - Cards
    - Log
    - LeaderBoard
  - LeaderBoard

All tables have:
 - ID (Primary Key)
 - created_at
 - updated_at

User
 - Email
 - Password
 - Name
 - Nickname
 - Image

Groups
 - Name
 - Members - Many to Many Users
 - LeaderBoard - Link to LeaderBoard
 
 Games
 - Name
 - Type (Cash, Tournament, ...)
 - Variation (Texas Hold'em, Omaha, 5 Card Stud...)
 - Seats (2, 4, 6, 8, 10...)
 - BettingStructure (Limit, No Limit, Pot Limit)
 - AutoClock (default to false)
 - Tables - One to Many Tables

CashGames (Inherits from Games)
 - MinBuyIn
 - MaxBuyIn
 - Ante (optional)
 - SmallBlind
 - BigBlind
 - ShowHoleCards (default to false)
 
TournamentGames (Inherits from Games)
 - TableCount
 - BuyIn
 - StartingStackSize
 - BlindStructure (StandardSingleTable, StandardMultiTable, TurboSingleTable, TurboMultiTable)
 - SitAndGo (default to true)
 - StartDateTime (default to null)

Table
 - Name
 - Players
 - Deck (Just an array of cards [rank, suit])
 - Logs
 - LeaderBoard - Link to LeaderBoard

Player
 - User (Many to One Link to Users)
 - Cards (rank, suit)