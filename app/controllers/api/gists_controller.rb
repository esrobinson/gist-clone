class Api::GistsController < ApplicationController

  def index
    @gists = current_user.gists
    render "gists/index"
  end
end
