  def up
    remove_column :users,:current_sign_in_at, :datetime
    remove_column :users,:last_sign_in_at, :datetime
    remove_column :users,:current_sign_in_ip, :string
    remove_column :users,:last_sign_in_ip, :string
    remove_column :users,:sign_in_count, :integer, default: 0, null: false
      end

  def down
    add_column :users,:current_sign_in_at, :datetime
    add_column :users,:last_sign_in_at, :datetime
    add_column :users,:current_sign_in_ip, :string
    add_column :users,:last_sign_in_ip, :string
    add_column :users,:sign_in_count, :integer, default: 0, null: false
  end


  def change
    add_column :users,:current_sign_in_at, :datetime
    add_column :users,:last_sign_in_at, :datetime
    add_column :users,:current_sign_in_ip, :string
    add_column :users,:last_sign_in_ip, :string
    add_column :users,:sign_in_count, :integer, default: 0, null: false
  end

