class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :gist_files

  validates :title, :user, :presence => true

  belongs_to :user
  has_many :favorites
  has_many :gist_files, :inverse_of => :gist, :dependent => :destroy

  accepts_nested_attributes_for :gist_files, :allow_destroy => true

  def user_favorite(user)
    self.favorites.where({:user_id => user.id}).first
  end
end
