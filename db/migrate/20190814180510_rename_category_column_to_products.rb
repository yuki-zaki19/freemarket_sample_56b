class RenameCategoryColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :category, :categories_id
  end
end
