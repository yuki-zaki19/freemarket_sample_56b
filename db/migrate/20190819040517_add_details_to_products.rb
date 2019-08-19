class AddDetailsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :child_category_id, :string
    add_column :products, :grandchild_category_id, :string
  end
end
