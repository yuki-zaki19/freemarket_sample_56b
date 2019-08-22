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
    binding.pry
    if @user.present?
      #@userに値があれば以下の処理が行われる。
      flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)
      redirect_to :root
      binding.pry
    else
      #なければ以下の処理が行われる。
      session["devise.#{provider}_data"] = request.env["omniauth.auth"].except("extra")
        render 'devise/registrations/new'
        binding.pry
    end
  end
end