class PhotosController < Devise::RegistrationsController
  def new
    super
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      @identification = Identification.new(indif_params)
      if @identification.save
        sign_in @user
        redirect_to products_path
      else
        @user.destroy
        redirect_to new_user_path
      end
    else
      redirect_to new_user_path
    end
  end

  def edit
  end

  def update
  end
  
  def show
  end

  private
  def user_params
    params.require(:user).permit(:last_name, :first_name, :last_name_kana, :first_name_kana, :prefecture, :city, :address, :building, :phone_number, :postal_code,:nickname, :password, :password_confirmation, :email)
  end

  def indif_params
    @date = params.require(:user)
    @birthday = Date.new(@date["birthday(1i)"].to_i,@date["birthday(2i)"].to_i,@date["birthday(3i)"].to_i)
    @indif = {}
    @indif.merge(last_name: @date["last_name2"], first_name: @date["first_name2"], last_name_kana: @date["last_name_kana2"], first_name_kana: @date["first_name_kana2"], birthday: @birthday.to_s,user_id:@user.id)
  end
end
