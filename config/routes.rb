NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  namespace "api",:defaults => {:format => :json} do
    resources :gists, :only => :index do
      resource :favorite, :only => [:create, :destroy]
    end
  end

  root :to => "root#index"
end
