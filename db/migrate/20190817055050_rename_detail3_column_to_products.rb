class RenameDetail3ColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :size, :size_id
  end
end
