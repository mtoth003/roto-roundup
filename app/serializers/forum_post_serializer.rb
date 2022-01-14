class ForumPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :like_count, :dislike_count
end
