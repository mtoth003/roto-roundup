class User < ApplicationRecord
  has_many :reviews
  has_many :websites, through: :reviews
end
