class AddBirthdayToIdentifications < ActiveRecord::Migration[5.2]
  def change
    add_column :identifications, :birthday, :date
  end
end
