class ForumPostsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: ForumPost.all
  end

  def show
    post = ForumPost.find(params[:id])
    render json: post
  end

  def create
    forum_post = @current_user.forum_posts.create(forum_params)
    render json: forum_post, status: :created
  end

  def update
    forum_post = ForumPost.find(params[:id])
    if forum_post.user_id = @current_user.id
      forum_post.update(forum_params)
      render json: forum_post
    else
      render josn: "This post does not belong to you", status: :unauthorized
    end
  end

  private 

  def forum_params
    params.permit(:title, :content, :user_id, :like_count, :dislike_count, :id)
  end

end
