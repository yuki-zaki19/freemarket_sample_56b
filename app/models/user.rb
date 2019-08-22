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

  # def self.find_for_oauth(auth)
  #   #find_for_oauth(auth)を定義している。
  #   # uid = auth.uid
  #   # provider = auth.provider
  #   # nickname = auth.info.name 
  #   # email = auth.info.email
  #   # snscredential = SnsCredential.where(uid: uid, provider: provider).first
  #   # binding.pry
  #   # #Userテーブルのuid: auth.uid, provider: auth.providerカラムの初めの値を取得しuserにいれている。
  #   # if snscredential.present?
  #   #   user = User.where(uid: uid, provider: provider, email: auth.info.email).first
  #   #   binding.pry
  #   # else 
  #   #   user = User.create(
  #   #     nickname: auth.info.name,
  #   #     email:    auth.info.email,
  #   #     uid: uid,
  #   #     provider: provider,
  #   #     password: Devise.friendly_token[0, 20],
  #   #     telephone: ""
  #   #     )
  #   #   SnsCredential.create(
  #   #     uid: uid,
  #   #     provider: provider,
  #   #     user_id: user.id
  #   #     )

  # #   end
  # end

end
