class RenameDetaColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :prefecture, :prefecture_id
  end
end
