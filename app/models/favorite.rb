class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  validates :user, :gist, :presence => true
  validates :gsit, :uniqueness => true, :scope => :user
end
