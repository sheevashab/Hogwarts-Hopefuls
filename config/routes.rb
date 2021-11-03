Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :students
  resources :spells, only: [:index, :show]
  resources :houses, only: [:index, :show]
  resources :users
end
