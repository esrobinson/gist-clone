class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name

  validates :body, :name, :gist, :presence => true

  belongs_to :gist, :inverse_of => :gist_files
end
