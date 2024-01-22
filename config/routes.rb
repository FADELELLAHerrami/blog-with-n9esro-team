





Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  ressources :articles do
    ressources :reviews 
  end
end
