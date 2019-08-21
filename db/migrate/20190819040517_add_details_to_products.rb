class AddDetailsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :child_category_id, :string
    add_column :products, :grandchild_category_id, :string
    rename_column :products, :parent_category_id ,:category_id
    rename_column :products, :category_id, :parent_category_id
  end
end
