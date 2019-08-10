Rails.application.routes.draw do

  root 'products#index'

  resources :photos
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'logout'
      get 'card'
      get "new_3"
      get "new_4"
      get "new_5"
      get "new_6"
      
    end
  end
  resources :products
  resources :sellers
  resources :identifications
end
