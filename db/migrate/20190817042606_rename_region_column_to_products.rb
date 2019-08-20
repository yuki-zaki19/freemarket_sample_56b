class RenameRegionColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :region, :region_id
  end
end
