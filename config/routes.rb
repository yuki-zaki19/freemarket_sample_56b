Rails.application.routes.draw do

  root 'products#index'

  resources :photos
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'logout'
      get 'card'
      get 'exhibit'
      get 'trade'
      get 'sale'
      get 'news'
      get 'past'
      get 'task'
      get 'transaction'
      get 'deliver'
      get '/:product_id' => 'users#my_product', as: 'my_product'
    end
  end
  resources :products, only: [:index, :show, :new, :edit, :destroy, :create,:update] do
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
      get 'category/:category_id' => 'products#all_categories', as: "category" 
    end
  end
  resources :sellers
  resources :identifications
end
