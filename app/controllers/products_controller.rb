class ProductsController < ApplicationController
  
  def index
    @parents = Category.where(ancestry:  nil)
  end

  def show
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
end
