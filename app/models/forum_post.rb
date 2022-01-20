class ForumPost < ApplicationRecord
  belongs_to :user

  validates :title, presence: :true
  validates :content, presence: :true

  def username
    self.user.username
  end
end
