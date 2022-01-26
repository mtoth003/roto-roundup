class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :site_name, :site_url, :subscription_page_url, :image_url, :features, :paid_content, :free_content, :football, :baseball, :basketball, :hockey, :avg_rating
end
