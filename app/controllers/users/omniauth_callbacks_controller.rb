# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.where(uid: request.env["omniauth.auth"].uid)
    if @user.present?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "facebook"
      sign_in_and_redirect @user[0] 
    else
      session["devise.facebook_data"] = request.env['omniauth.auth']
      @user = User.new()
      @sns_credential = SnsCredential.new()
      if data = session["devise.facebook_data"]["extra"]["raw_info"]
        @user.nickname = data["name"] if @user.nickname.blank?
        @user.email = data["email"] if @user.email.blank?
        @user.provider = "facebook" if @user.provider.blank?
        @user.uid = data["id"] if @user.uid.blank?
        @user.password = Devise.friendly_token[0,20] if @user.password.blank?
        render 'devise/registrations/new'
      end
    end
  end


  def google_oauth2
    @user = User.where(uid: request.env["omniauth.auth"].uid)
    if @user.present?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      sign_in_and_redirect @user[0] 
    else
      session["devise.google_data"] = request.env['omniauth.auth']
      @user = User.new()
      @sns_credential = SnsCredential.new()
      if data = session["devise.google_data"]["extra"]["raw_info"]
        @user.nickname = data["name"] if @user.nickname.blank?
        @user.email = data["email"] if @user.email.blank?
        @user.provider = "google" if @user.provider.blank?
        @user.uid = data["sub"] if @user.uid.blank?
        @user.password = Devise.friendly_token[0,20] if @user.password.blank?
        render 'devise/registrations/new'
      end
    end
  end

end

