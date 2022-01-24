# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_24_011902) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "text"
    t.bigint "user_id", null: false
    t.bigint "forum_post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["forum_post_id"], name: "index_comments_on_forum_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "forum_posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "like_count"
    t.integer "dislike_count"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_forum_posts_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.float "rating"
    t.text "comment"
    t.bigint "user_id", null: false
    t.bigint "website_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["website_id"], name: "index_reviews_on_website_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "image_url"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false
  end

  create_table "websites", force: :cascade do |t|
    t.string "site_name"
    t.string "site_url"
    t.string "subscription_page_url"
    t.string "image_url"
    t.text "features"
    t.boolean "paid_content"
    t.boolean "free_content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "football"
    t.boolean "baseball"
    t.boolean "basketball"
    t.boolean "hockey"
  end

  add_foreign_key "comments", "forum_posts"
  add_foreign_key "comments", "users"
  add_foreign_key "forum_posts", "users"
  add_foreign_key "reviews", "users"
  add_foreign_key "reviews", "websites"
end
