class ForumPost < ApplicationRecord
  belongs_to :user
  
  has_many :comments, dependent: :destroy

  validates :title, presence: :true
  validates :content, presence: :true

  def username
    self.user.username
  end
end
