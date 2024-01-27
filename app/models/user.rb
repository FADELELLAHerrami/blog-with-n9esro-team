class User < ApplicationRecord
  has_one_attached :photo
  has_many :comments
  has_many :articles, through: :comments
  has_many :articles
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates_presence_of :firstName, :lastName
end
