class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, :user, :presence => true

  belongs_to :user
end
