class ForumPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :like_count, :dislike_count, :user_id, :username, :created_at
end
