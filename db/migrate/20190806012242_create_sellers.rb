class CreateSellers < ActiveRecord::Migration[5.2]
  def change
    create_table :sellers do |t| 

      t.references  :seller_user, null: false, foreign_key: true
      t.references  :product_id,  null: false, foreign_key: true
      t.references  :buyer_user,  null: false, foreign_key: true

      t.timestamps
    end
  end
end
