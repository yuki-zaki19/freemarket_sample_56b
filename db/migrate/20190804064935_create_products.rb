class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|

      t.string    :name, null: false,limit:40,  index: true
      t.integer   :price, null: false, greater_than_or_equal_to: 300, less_than_or_equal_to: 9999999
      t.references :user, null: false, foreign_key: true
      t.string    :brand
      t.string    :size_id
      t.string    :state_id, null: false
      t.string    :burden_id, null: false
      t.string    :region_id, null: false
      t.string    :leadtime_id, null: false
      t.string    :shipping_id, null: false
      t.string    :status, null: false
      t.text      :explain, null: false, limit: 1000
      t.string    :category_id, null: false
      t.string    :child_category_id
      t.string    :grandchild_category_id
      t.timestamps
    end
  end
end
