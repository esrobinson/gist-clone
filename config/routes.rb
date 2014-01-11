NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]


  namespace "api",:defaults => {:format => :json} do
    resources :gists, :only => [:index, :create, :update] do
      resource :favorite, :only => [:create, :destroy]
      resources :gist_files, :only => :create
    end
    resources :favorites, :only => :index
  end

  root :to => "root#index"
end
