class RenameImageColumnToPhotos < ActiveRecord::Migration[5.2]
  def change
    rename_column :photos, :image, :images
  end
end
