class CreateIdentifications < ActiveRecord::Migration[5.2]
  def change
    create_table :identifications do |t|
      t.references :user, null: false, foreign_key: true
      t.integer    :postal_code
      t.string     :prefecture
      t.string     :city
      t.string     :address
      t.string     :building
      t.timestamps
    end
  end
end
