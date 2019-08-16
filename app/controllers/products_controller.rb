class ProductsController < ApplicationController
  before_action :set_product
  before_action :set_user
  
  def index
    @parents = Category.where(ancestry:  nil)
    @products = Product.all

    @ladys_products = Product.where("category_id <= ?", 199).order('created_at DESC').limit(4)
    @mens_products = Product.where("category_id >= ?", 200).where("category_id <= ?", 345).order('created_at DESC').limit(4)
    @babys_products = Product.where("category_id >= ?", 346).where("category_id <= ?", 480).order('created_at DESC').limit(4)
    @beauties_products = Product.where("category_id >= ?", 798).where("category_id <= ?", 897).order('created_at DESC').limit(4)

    @chanel = Product.where(brand: "シャネル").order('created_at DESC').limit(4)
    @vuitton = Product.where(brand: "ルイ ヴィトン").order('created_at DESC').limit(4)
    @nike = Product.where(brand: "ナイキ").order('created_at DESC').limit(4)
    @supreme = Product.where(brand: "シュプリーム").order('created_at DESC').limit(4)
  end

  def show
    @my_products = Product.where(user_id: @product.user_id).where.not(id: params[:id]).order('created_at DESC').limit(6)
    @brand = Product.where(brand: @product.brand).where.not(id: params[:id]).order('created_at DESC').limit(6)
  end

  def all_categories
    id = params[:category_id]
    if id >= "1" && id <= "199"
      @category_products = Product.where("category_id <= ?", 199).order('created_at DESC')
    elsif id >= "200" && id <= "345"
      @category_products = Product.where("category_id >=?", 199).where("category_id <= ?", 345).order('created_at DESC')
    elsif id >= "346" && id <= "480"
      @category_products = Product.where("category_id >= ?", 346).where("category_id <= ?", 480).order('created_at DESC')
    elsif id >= "481" && id <= "624"
      @category_products = Product.where("category_id >= ?", 481).where("category_id <= ?", 624).order('created_at DESC')
    elsif id >= "625" && id <= "684"
      @category_products = Product.where("category_id >= ?", 625).where("category_id <= ?", 684).order('created_at DESC')
    elsif id >= "685" && id <= "797"
      @category_products = Product.where("category_id >=?", 685).where("category_id <= ?", 797).order('created_at DESC')
    elsif id >= "798" && id <= "897"
      @category_products = Product.where("category_id >= ?", 798).where("category_id <= ?", 897).order('created_at DESC')
    elsif id >= "898" && id <= "983"
      @category_products = Product.where("category_id >= ?", 898).where("category_id <= ?", 983).order('created_at DESC')
    elsif id >= "984" && id <= "1092"
      @category_products = Product.where("category_id >= ?", 984).where("category_id <= ?", 1092).order('created_at DESC')
    elsif id >= "1093" && id <= "1146"
      @category_products = Product.where("category_id >= ?", 1093).where("category_id <= ?", 1146).order('created_at DESC')
    elsif id >= "1147" && id <= "1206"
      @category_products = Product.where("category_id >= ?", 1147).where("category_id <= ?", 1206).order('created_at DESC')
    elsif id >= "1207" && id <= "1269"
      @category_products = Product.where("category_id >= ?", 1207).where("category_id <= ?", 1269).order('created_at DESC')
    elsif id >= "1270" && id <= "1338"
      @category_products = Product.where("category_id >= ?", 1270).where("category_id <= ?", 1338).order('created_at DESC')
    else
      redirect_to :root
    end
  end

  def new
    @product = Product.new
    @category_parent_array =  ["---"]
    Category.where(ancestry:  nil).each do |parent|
    @category_parent_array << [parent.name,parent.id]
    end
  end

  def get_category_children
    @category_children = Category.find_by(id: params[:id]).children
  end

  def get_category_grandchildren
    @category_grandchildren = Category.find_by(id: params[:child_id]).children
  end

  def create
    Product.create(create_params)
    # @photo = Photo.create params.require(:photo).permit(images: [],products_attributes: [:name, :price, :category, :brand, :size, :state, :burden, :shipping, :region, :leadtime, :status, :explain]).merge(product_id: product.id)
    redirect_to controller: :products, action: :index
  end

  private
  def create_params
    params.require(:product).permit(:name, :price, :category_id, :brand, :size, :state, :burden, :shipping, :region, :leadtime, :explain, images: [] ).merge(user_id: "1", status: "1")
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def set_user
    @user = User.find(@product.user_id )
  end

end
