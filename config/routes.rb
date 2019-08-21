Rails.application.routes.draw do

  root 'products#index'

  resources :photos
  devise_for :users, :controllers => {:registrations => 'photos'}
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
    end
  end
  resources :products, only: [:index, :show, :new, :edit, :destroy, :create] do
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
      get 'category/:category_id' => 'products#all_categories', as: "category" 
    end
  end
  resources :sellers, only: [:create, :show] do
    member do
      post 'pay' ,to: 'sellers#pay' 
    end
  end

  resources :identifications
  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'delete', to: 'card#delete'
    end
  end
end
