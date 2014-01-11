class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  validates :user, :gist, :presence => true
  # validates_uniqueness_of :gist, :scope => :user

  belongs_to :user
  belongs_to :gist
end
