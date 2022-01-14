class CreateForumPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :forum_posts do |t|
      t.string :title
      t.text :content
      t.integer :like_count
      t.integer :dislike_count
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
