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
  has_many :sns_credentials, dependent: :destroy

    def self.find_for_oauth(auth)
      user = User.where(uid: auth.uid, provider: auth.provider).first
    end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] || data = session["devise.google_data"] 
        user.nickname = data["name"] if user.nickname.blank?
        user.email = data["email"] if user.email.blank?
        user.provider = data["provider"] if user.provider.blank?
        user.uid = data["uid"] if user.uid.blank?
        user.password = Devise.friendly_token[0,20] if user.password.blank?
      end
    end
      # SnsCredential.create(uid: uid,provider: provider,user_id: user.id)
  end
end
