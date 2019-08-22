class SellersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_product, only:[:show, :pay, :update]

  require 'payjp'

  def show
    @user = User.find(@product.user_id)
    card = Card.where(user_id: current_user.id).first
    #Cardテーブルは前回記事で作成、テーブルからpayjpの顧客IDを検索
  if card.blank? || current_user.id == @product.user_id
    #登録された情報がない場合にトップ画面に移動
    redirect_to root_path
  else
    Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_PRIVATE_KEY]
    #保管した顧客IDでpayjpから情報取得
    customer = Payjp::Customer.retrieve(card.customer_id)
    #保管したカードIDでpayjpから情報取得、カード情報表示のためインスタンス変数に代入
    @default_card_information = customer.cards.retrieve(card.card_id)
  end

  end

  def update
    @product.update(status: '2')

    redirect_to root_path #トップ画面に移動（完了画面を作ればそちらの方がベター）
  end

  def new
  end
  

  def index
  end

  def pay
    card = Card.where(user_id: current_user.id).first
    Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_PRIVATE_KEY]
    Payjp::Charge.create(
    amount: @product.price, #支払金額を入力
    customer: card.customer_id, #顧客ID
    currency: 'jpy', #日本円
    )
  update
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end


end
