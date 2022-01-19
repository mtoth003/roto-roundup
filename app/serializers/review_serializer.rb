class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :website_id, :site_name, :username
end
