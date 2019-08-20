Rails.application.routes.draw do

  root 'products#index'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks',registrations: 'phots' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'card'
      get 'exhibit'
      get 'trade'
      get 'sale'
      get 'news'
      get 'past'
      get 'task'
      get 'transaction'
      get 'deliver'
      get 'logout'
    end
    member do
      # get '/:product_id' => 'users#my_product', as: 'my_product'
      get 'my_product'
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
  resources :photos
end
