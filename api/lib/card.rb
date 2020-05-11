class Card
    @@suits = [:club, :spade, :diamond, :heart]
    @@ranks = {
        :two => '2',
        :three => '3',
        :four => '4',
        :five => '5',
        :six => '6',
        :seven => '7',
        :eight => '8',
        :nine => '9',
        :ten => '10',
        :jack => 'jack',
        :queen => 'queen',
        :king => 'king',
        :ace => 'ace'
    }

    def initialize(rank, suit)
      @rank = rank
      @suit = suit
    end

    def rank
      @rank
    end

    def suit
      @suit
    end

    def to_s
      @rank.to_s << "_of_" << @suit.to_s.pluralize
    end
  
    def self.all_suits
      @@suits
    end
  
    def self.all_ranks
      @@ranks
    end
  end
    