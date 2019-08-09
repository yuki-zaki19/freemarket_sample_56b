class PhotosController < ApplicationController
  def new
  end


  def show
    @photo = Photo.find(params[:id])
  end

  def edit
    @photo = Photo.find(params[:id]) 
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update params.require(:photo).permit(:product_id, images: [])
    redirect_to @photo
  end
end
