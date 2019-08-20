class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable,
        :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  # has_many :products
  # has_many :goods
  # has_many :contacts
  # belongs_to :credit
  # has_many :evaluation
  # belongs_to :idntification
  # belongs_to :buyer
  has_many :sns_credentials, dependent: :destroy

      def self.find_for_oauth(auth)
      #find_for_oauth(auth)を定義している。
      # uid = auth.uid
      # provider = auth.provider
      # snscredential= SnsCredential.where(uid: uid, provider: provider).first
      #authにはfaceook,googeで登録した値が入る。
      # if snscredential.present?
      #snscredentialに値があれば以下の処理を行う。
      #facebook,google認証できていればそのままログイン。
      
      user = User.where(uid: auth.uid, provider: auth.provider).first
      #Userモデルの一番最初の値のuid,providerを取得してuserに代入している。
  #     if user.present?
  #     else
  #     user = User.where(email: auth.info.email).first
  #     #Userモデルにfacebook,googleで登録したemailを代入し、その値をuserに代入している。
  #       if user.present?
  #       #userに値があれば以下の処理を行う。
  #       #メールアドレスはすでに登録されているが、facebook,google認証がしていない場合以下の処理が行われる。
  #       #snscredentialテーブルに値が登録される。
  #         SnsCredential.create(
  #           uid: uid,
  #           provider: provider,
  #           user_id: user.id
  #           )
  #       #新規登録でメールアドレスの登録,facebook,google認証していない場合は以下の処理を行う。
  #       #user,snscredentialテーブルに新しい情報が登録される。
  #       else
  #         user = User.create(
  #           uid: uid,
  #           provider: provider,
  #           nickname: auth.info.name,
  #           email:    auth.info.email,
  #           password: Devise.friendly_token[0, 20],
  #           phone_number: "0800"
  #           )
  #       SnsCredential.create(
  #           uid: uid,
  #           provider: provider,
  #           user_id: user.id
  #           )
  #       end
  #     end
  #   return user
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
      SnsCredential.create(uid: uid,provider: provider,user_id: user.id)
  end
end
