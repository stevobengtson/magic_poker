class CreateTables < ActiveRecord::Migration[6.0]
  def change
    create_table :tables do |t|
      t.string :name
      t.string :deck, array: true

      t.timestamps
    end

    create_table :tables_players, id: false do |t|
      t.belongs_to :tables
      t.belongs_to :players
    end

    add_index :tables, :deck, using: 'gin'
  end
end
