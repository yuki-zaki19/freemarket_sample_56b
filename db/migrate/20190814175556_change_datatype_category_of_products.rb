class ChangeDatatypeCategoryOfProducts < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :category, :string, foreign_key: true

  end
end
