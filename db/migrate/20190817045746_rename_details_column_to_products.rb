class RenameDetailsColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :burden, :burden_id
    rename_column :products, :leadtime, :leadtime_id
    rename_column :products, :state, :state_id
  end
end
