class Api::GistsController < ApplicationController

  def index
    @gists = current_user.gists
    render "gists/index"
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user = current_user

    @gist.gist_files.new(params[:gist_files])
    if @gist.save
      render "gists/show"
    else
      puts @gist.errors.full_messages
      render :json => @gist.errors.full_messages, :status => 422
    end
  end

  def update
    @gist = Gist.find(params[:id])
    @gist.update_attributes(params[:gist])
    if @gist.save
      render "gists/show"
    else
      puts @gist.errors.full_messages
      render :json => @gist.errors.full_messages, :status => 422
    end
  end

end