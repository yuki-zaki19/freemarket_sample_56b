class SellersController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def show
    @product = Product.find(params[:id])
    @user = User.find(@product.user_id )
  end

  def new
  end
  
end
