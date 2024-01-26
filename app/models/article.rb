include ActionView::Helpers::DateHelper

class Article < ApplicationRecord
  paginates_per 10
  has_many :comments
  has_many :users, through: :comments
  belongs_to :user
end
