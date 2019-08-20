# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    #facebookのボタンが押されたら以下の処理が行われる。
    callback_for(:facebook)
  end

  def google_oauth2
    #googleのボタンが押されたら以下の処理が行われる。
    callback_for(:google)
  end

  def callback_for(provider)
    #押されたボタンによってproviderが変わる。
    @user = User.find_for_oauth(request.env["omniauth.auth"])
    #@userにUser.find_for_oauthを代入。
    #requestでfacebook,googleのアカウント情報を取得している。
    #envでomniauth.authという環境変数を管理している。
    if @user.present?
      #@userに値があれば以下の処理が行われる。
      flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)
      redirect_to :root
    else
      #なければ以下の処理が行われる。
      session["devise.#{provider}_data"] = request.env['omniauth.auth']
      @user= User.new()
        if data = session["devise.facebook_data"] || data = session["devise.google_data"]["extra"]["raw_info"]
          @user.nickname = data["name"] if @user.nickname.blank?
          @user.email = data["email"] if @user.email.blank?
          @user.provider = data["provider"] if @user.provider.blank?
          @user.uid = data["uid"] if @user.uid.blank?
          @user.password = Devise.friendly_token[0,20] if @user.password.blank?

        render 'devise/registrations/new'
  end

  # def self.new_with_session(params, session)
  #   super.tap do |user|
  #     if data = session["devise.facebook_data"] || data = session["devise.google_data"] 
  #       user.nickname = data["name"] if user.nickname.blank?
  #       user.email = data["email"] if user.email.blank?
  #       user.provider = data["provider"] if user.provider.blank?
  #       user.uid = data["uid"] if user.uid.blank?
  #       user.password = Devise.friendly_token[0,20] if user.password.blank?
  #     end
    end
  end
end