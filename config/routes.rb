Rails.application.routes.draw do

  root 'products#index'

  resources :photos
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'logout'
      get 'card'
    end
  end
  resources :products, only: [:index, :show, :new, :edit, :destroy, :create] do
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
      get 'category/:category_id' => 'products#all_categories', as: "category" 
    end
  end
  resources :sellers
  resources :identifications
end
