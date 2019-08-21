class CreateIdentifications < ActiveRecord::Migration[5.2]
  def change
    create_table :identifications do |t|
      t.references :user, null: false, foreign_key: true
      t.integer    :postal_code
      t.string     :prefecture
      t.string     :city
      t.string     :address
      t.string     :building
      t.string     :first_name
      t.string     :last_name
      t.string     :first_name_kana
      t.string     :last_name_kana
      t.string     :phone_number
      t.date       :birthday
      t.timestamps
    end
  end
end
