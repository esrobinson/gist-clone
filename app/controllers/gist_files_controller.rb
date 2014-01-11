class GistFilesController < ApplicationController

  def create
    @gist_file = GistFile.new(params[:gist_file])
    @gist_file.gist_id = params[:gist_id].values
    if @gist_file.save
      render :json => @gist_file
    else
      render :json => @gist_file.errors.full_messages, :status => 422
    end
  end

end
