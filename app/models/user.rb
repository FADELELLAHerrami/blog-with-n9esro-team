class User < ApplicationRecord
  has_one_attached :photo

  has_many :collaborations
  has_many :articles, through: :collaborations
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
