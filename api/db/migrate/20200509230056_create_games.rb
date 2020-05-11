class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :type
      t.string :name
      t.integer :variation
      t.integer :seats
      t.integer :betting_structure
      t.boolean :auto_clock
      t.belongs_to :tables

      t.timestamps
    end
  end
end
