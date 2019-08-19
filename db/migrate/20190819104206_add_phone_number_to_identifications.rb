class AddPhoneNumberToIdentifications < ActiveRecord::Migration[5.2]
  def change
    add_column :identifications, :phone_number, :string
  end
end
