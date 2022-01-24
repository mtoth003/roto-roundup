Rails.application.routes.draw do
    resources :comments
    resources :websites
    resources :forum_posts
    resources :users
    resources :reviews
    
    get 'sessions/create'
    get 'sessions/destroy'
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/reviews/websites/:id', to: 'reviews#website_show'
    get '/reviews/users/:id', to: 'reviews#user_show'
    get 'comments/forum_posts/:id', to: 'comments#forum_post_show'
    get '/comments/users/:id', to: 'comments#user_show' 
   
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
