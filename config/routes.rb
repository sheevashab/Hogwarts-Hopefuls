Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  get '/users/students', to: 'students#user_show'
  resources :students
  resources :spells, only: [:index, :show]
  resources :houses, only: [:index, :show]
  resources :users
end
