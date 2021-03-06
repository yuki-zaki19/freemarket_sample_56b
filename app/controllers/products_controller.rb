class ProductsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :all_categories]
  before_action :set_product, only:[:show, :destroy, :update, :edit]
  before_action :set_user, only:[:show]
  
  def index
    @parents = Category.where(ancestry:  nil)
    @products = Product.all

    @ladys_products = Product.where("category_id <= ?", 199).where(status:'1').order('created_at DESC').limit(4)
    @mens_products = Product.where("category_id >= ?", 200).where("category_id <= ?", 345).where(status:'1').order('created_at DESC').limit(4)
    @babys_products = Product.where("category_id >= ?", 346).where("category_id <= ?", 480).where(status:'1').order('created_at DESC').limit(4)
    @beauties_products = Product.where("category_id >= ?", 798).where("category_id <= ?", 897).where(status:'1').order('created_at DESC').limit(4)

    @chanel = Product.where(brand: "シャネル").where(status:'1').order('created_at DESC').limit(4)
    @vuitton = Product.where(brand: "ルイ ヴィトン").where(status:'1').order('created_at DESC').limit(4)
    @nike = Product.where(brand: "ナイキ").where(status:'1').order('created_at DESC').limit(4)
    @supreme = Product.where(brand: "シュプリーム").where(status:'1').order('created_at DESC').limit(4)
  end

  def show
    @my_products = Product.where(user_id: @product.user_id).where.not(id: params[:id]).order('created_at DESC').limit(6)
    @brand = Product.where(brand: @product.brand).where.not(id: params[:id]).order('created_at DESC').limit(6)
    @images = @product.images
    @category = Category.find(@product.category_id)
    @category2 = Category.find(@product.child_category_id)
    @category3 = Category.find(@product.grandchild_category_id)
  end

  def all_categories
    id = params[:category_id]
    id = id.to_i
    if id >= 1 && id <= 199
      category_id_devided(1,199,"レディース")
    elsif id >= 200 && id <= 345
      category_id_devided(200,345,"メンズ")
    elsif id >= 346 && id <= 480
      category_id_devided(346,480,"ベビー・キッズ")
    elsif id >= 481 && id <= 624
      category_id_devided(481,624,"インテリア・住まい・小物")
    elsif id >= 625 && id <= 684
      category_id_devided(625,684,"本・音楽・ゲーム")
    elsif id >= 685 && id <= 797
      category_id_devided(685,797,"おもちゃ・ホビー・グッズ")
    elsif id >= 798 && id <= 897
      category_id_devided(798,897,"コスメ・香水・美容")
    elsif id >= 898 && id <= 983
      category_id_devided(898,983,"家電・スマホ・カメラ")
    elsif id >= 984 && id <= 1092
      category_id_devided(984,1092,"スポーツ・レジャー")
    elsif id >= 1093 && id <= 1146
      category_id_devided(1093,1146,"ハンドメイド")
    elsif id >= 1147 && id <= 1206
      category_id_devided(1147,1206,"チケット")
    elsif id >= 1207 && id <= 1269
      category_id_devided(1207,1269,"自動車・オートバイ")
    elsif id >= 1270 && id <= 1338
      category_id_devided(1270,1338,"その他")
    else
      redirect_to :root
    end
  end

  def category_id_devided (a,b,c)
    @category_products = Product.where("category_id >= ?", a).where("category_id <= ?", b).where(status:'1').order('created_at DESC')
    @category_name = c
  end

  def new
    @product = Product.new
    @parent_category_array =  ["---"]
    Category.where(ancestry:  nil).each do |parent|
    @parent_category_array << [parent.name,parent.id]
    end
  end

  def destroy
    if current_user.id == @product.user_id
      if @product.destroy
      redirect_to :root
      else
        render :destroy
      end
    else
      redirect_to :root
    end
  end

  def images_delete
    @image_delete = Product.find(params[:id]).images.find(params[:images_id])
    if @image_delete.purge
      redirect_to :edit_product
    end
  end

  def edit
    @product = Product.find(params[:id])
    if current_user.id == @product.user_id
      @images = @product.images
      parent_category_id = Category.find(@product.category_id)
      child_category_id = Category.find(@product.child_category_id)
      grandchild_category_id = Category.find(@product.grandchild_category_id)
      
      @parent_category_array =  ["---"]
      Category.where(ancestry: nil).each do |parent|
      @parent_category_array << [parent.name,parent.id]
      end
      @child_category_array =  ["---"]
      Category.where(ancestry: "#{parent_category_id.id}").each do |parent|
      @child_category_array << [parent.name,parent.id]
      end
      @grandchild_category_array =  ["---"]
      Category.where(ancestry: "#{parent_category_id.id}" + "/" + "#{child_category_id.id}").each do |parent|
      @grandchild_category_array << [parent.name,parent.id]
      end
    else
      redirect_to :root
    end
  end

  def update
    if @product.update(create_params)
      if params[:product][:image_ids] && params[:product][:images]
          @product.images.attach(params[:product][:images])
          params[:product][:image_ids].each do |image_id|
          image = @product.images.find(image_id)
          image.purge
        end
      elsif params[:product][:images]
        @product.images.attach(params[:product][:images])
      elsif params[:product][:image_ids] 
        params[:product][:image_ids].each do |image_id|
        image = @product.images.find(image_id)
        image.purge
        end
      end
    # redirect_to :root
    else
      render :edit
    end
  end

  def get_category_children
    @category_children = Category.find_by(id: params[:id]).children
  end

  def get_category_grandchildren
    @category_grandchildren = Category.find_by(id: params[:child_id]).children
  end

  def create
    @production = Product.create(create_params)
    @production.images.attach(params[:product][:images])
  end

  private
  def create_params
    params.require(:product).permit(:name, :price, :category_id,:child_category_id, :grandchild_category_id, :brand, :size_id, :state_id, :burden_id, :shipping_id, :region_id, :leadtime_id, :explain).merge(user_id: current_user.id, status: "1" )
  end

  def set_product
    if params[:id] == "0"
      redirect_to :root
    else
      @product = Product.find(params[:id])
    end
  end

  def set_user
    @user = User.find(@product.user_id)
  end

end
