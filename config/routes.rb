Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  resources :articles do
    resources :reviews, only: [:create, :edit, :new]
    resources :collaborations, only: [:create, :new, :destroy]
    resources :comments , except: [:show]
  end
  resources :reviews, only: [:destroy]
  resources :users, only: [:show, :edit, :update, :drop]
end
