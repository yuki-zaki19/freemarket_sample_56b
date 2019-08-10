Rails.application.routes.draw do
  resources :photos
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'logout'
      get 'card'
      get "new_3"
      get "new_4"
    end
  end
  resources :products
  resources :sellers
  resources :identifications
end