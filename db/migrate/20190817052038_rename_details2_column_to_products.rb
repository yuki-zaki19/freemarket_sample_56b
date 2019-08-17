class RenameDetails2ColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :shipping, :shipping_id
  end
end
