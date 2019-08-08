Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    collection do
      get 'logout'
      get 'card'
    end
  end
  resources :products
  resources :sellers
  resources :identifications
end