class RenameCategoriesIdColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :categories_id, :category_id

  end
end
