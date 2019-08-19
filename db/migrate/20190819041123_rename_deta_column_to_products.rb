class RenameDetaColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :parent_category_id ,:category_id
  end
end
