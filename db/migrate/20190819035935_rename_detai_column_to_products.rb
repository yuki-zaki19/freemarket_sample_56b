class RenameDetaiColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :category_id, :parent_category_id
  end
end
