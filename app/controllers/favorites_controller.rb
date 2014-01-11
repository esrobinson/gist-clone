class FavoritesController < ApplicationController

  def index
    @favorites = current_user.favorite_gists
    render "favorites/index"
  end

  def create
    @favorite = Favorite.new()
    @favorite.user = current_user
    @favorite.gist_id = params[:gist_id]
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages, :status => 422
    end
  end

  def destroy
    @favorite = Favorite.where(
          :user_id => current_user.id,
          :gist_id => params[:gist_id]
          ).first
    @favorite.destroy
    render :json => {}
  end

end
