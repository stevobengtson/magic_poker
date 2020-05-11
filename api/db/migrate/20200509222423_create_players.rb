class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.references :user, null: false, foreign_key: true
      t.float :balance

      t.timestamps
    end
  end
end
