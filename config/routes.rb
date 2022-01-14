Rails.application.routes.draw do
  resources :websites
  resources :sites
  resources :forum_posts
  resources :reviews
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
