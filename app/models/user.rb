class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  has_many :products
  # has_many :goods
  # has_many :contacts
  # belongs_to :credit
  # has_many :evaluation
  # belongs_to :idntification
  # belongs_to :buyer
         
end
