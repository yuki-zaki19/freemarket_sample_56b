class UsersController < ApplicationController
  before_action :authenticate_user!, except: :new

  def index
  end

  def show
  end

  def create
  end

  def new
  end

  def edit
  end
  
  def logout
  end

  def card
  end

  def exhibit
    @my_products = Product.includes(:user).where(user_id: current_user.id).where(status:'1')
  end

  def my_product
    @product = Product.find(params[:id])
    @user = User.find(@product.user_id )
    @images = @product.images
  end

  def trade
    @my_products = Product.includes(:user).where(user_id: current_user.id).where(status:'3')
  end

  def sale
    @my_products = Product.includes(:user).where(user_id: current_user.id).where(status:'2')
  end

  def news
  end

  def past
  end

  def task
  end

  def transaction
  end

  def deliver
  end

  def update
    if current_user.update(user_params)
      redirect_to edit_user_path(current_user)
    else
      render :edit
    end
  end

  private
  def user_params
    if params.require(:user)[:last_name]
      params.require(:user).permit(:last_name, :first_name, :last_name_kana, :first_name_kana, :prefecture_id, :city, :address, :building, :phone_number, :postal_code)
    else
      params.require(:user).permit(:nickname, :comment)
    end
  end

end