class Article < ApplicationRecord
  paginates_per 10
  has_many :collaborations
  has_many :users ,through: :collaborations
  belongs_to :user
  has_many :reviews
end
