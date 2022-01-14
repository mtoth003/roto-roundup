class CreateWebsites < ActiveRecord::Migration[6.1]
  def change
    create_table :websites do |t|
      t.string :site_name
      t.string :site_url
      t.string :subscription_page_url
      t.string :image_url
      t.text :features
      t.boolean :paid_content
      t.boolean :free_content

      t.timestamps
    end
  end
end
