class Website < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  def avg_rating
    return 0 unless reviews.count.positive?
    reviews.average(:rating).round(2).to_f
  end
end
