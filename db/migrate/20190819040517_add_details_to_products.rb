class AddDetailsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :child_category_id, :string
    add_column :products, :grandchild_category_id, :string
  end

  def change
    rename_column :products, :parent_category_id ,:category_id
  end

  def change
    rename_column :products, :category_id, :parent_category_id
  end


end
