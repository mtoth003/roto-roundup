class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :image_url, :admin, :forum_posts, :reviews, :comments
end
