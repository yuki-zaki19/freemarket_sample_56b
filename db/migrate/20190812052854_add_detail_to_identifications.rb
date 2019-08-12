class AddDetailToIdentifications < ActiveRecord::Migration[5.2]
  def change
    add_column :identifications, :first_name, :string
    add_column :identifications, :last_name, :string
    add_column :identifications, :first_name_kana, :string
    add_column :identifications, :last_name_kana, :string
  end
end
