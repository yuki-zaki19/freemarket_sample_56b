class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|

      t.string    :name, null: false,limit:40,  index: true
      t.integer   :price, null: false, greater_than_or_equal_to: 300, less_than_or_equal_to: 9999999
      t.references :user, null: false, foreign_key: true
      t.string    :category, null: false
      t.string    :brand
      t.string    :size
      t.string    :state, null: false
      t.string    :burden, null: false
      t.string    :shipping, null: false
      t.string    :region, null: false 
      t.string    :leadtime, null: false
      t.string    :status, null: false
      t.text      :explain, null: false, limit: 1000
      t.timestamps
    end
  end
end
