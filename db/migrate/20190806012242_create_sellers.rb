class CreateSellers < ActiveRecord::Migration[5.2]
  def change
    create_table :sellers do |t| 

      t.references  :seller_user, null: false, foreign_key: {to_table: :users}
      t.references  :product,  null: false, foreign_key: true
      t.references  :buyer_user,  null: false, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
