class Comment < ApplicationRecord
  belongs_to :forum_post
  belongs_to :user

  validates :text, presence: true

  def username
    self.user.username
  end
end
