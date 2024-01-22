





Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  resources :articles do
    resources :reviews
  end
end
