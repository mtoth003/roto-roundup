class User < ApplicationRecord
  has_secure_password

  has_many :reviews, dependent: :destroy
  has_many :websites, through: :reviews 
  has_many :forum_posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :username, presence: true, uniqueness: true
end
