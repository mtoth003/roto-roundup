class Review < ApplicationRecord
  belongs_to :user
  belongs_to :website

  validates :rating, presence: :true
  validates :rating, numericality: { in: 1..5 }
  validates :comment, presence: :true


  def username
    self.user.username
  end

  def site_name
    self.website.site_name
  end
end
