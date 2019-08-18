class IdentificationsController < ApplicationController
  def new
  end

  def create
  end

  def edit
    @identification = Identification.find_by(user_id: current_user.id)
  end

  def update
    @identification = Identification.find_by(user_id: current_user.id)
    if @identification.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end
  
  def show
  end

  private

  def user_params
    params.require(:identification).permit(:postal_code, :prefecture, :city, :address, :building)
  end
end
