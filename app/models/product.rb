class Product < ApplicationRecord
  belongs_to :user
  has_many :goods
  has_many :contacts
  has_many_attached :images
  # has_many :photos
  belongs_to :category
  # accepts_nested_attributes_for :photos

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :region
  belongs_to_active_hash :burden
  belongs_to_active_hash :state
  belongs_to_active_hash :leadtime
  belongs_to_active_hash :shipping
  belongs_to_active_hash :size


  # 前へ、次へボタンの実装
  def previous
    user.products.order('created_at desc, id desc').where('created_at <= ? and id < ?', created_at, id).first
  end

  def next
    user.products.order('created_at desc, id desc').where('created_at >= ? and id > ?', created_at, id).reverse.first
  end


end
