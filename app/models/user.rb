class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable,
        :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  has_many :products
  # has_many :goods
  # has_many :contacts
  # belongs_to :credit
  # has_many :evaluation
  has_one :idntification
  # belongs_to :buyer
  has_many :cards
  has_many :sns_credentials, dependent: :destroy

  def self.find_for_oauth(auth)
    #find_for_oauth(auth)を定義している。
    binding.pry
  end
end
