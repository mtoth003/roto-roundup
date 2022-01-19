Rails.application.routes.draw do

    get 'sessions/create'
    get 'sessions/destroy'
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/reviews/websites/:id', to: 'reviews#website_show'
    get '/reviews/users/:id', to: 'reviews#user_show'

    resources :websites
    resources :forum_posts
    resources :reviews
    resources :users

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
