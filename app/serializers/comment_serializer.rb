class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :forum_post_id, :text, :username
end
