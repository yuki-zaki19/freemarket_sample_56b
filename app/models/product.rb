class Product < ApplicationRecord
  belongs_to :user
  has_many :goods
  has_many :contacts
  has_many_attached :images
  # has_many :photos
  belongs_to :category
  # accepts_nested_attributes_for :photos
end
