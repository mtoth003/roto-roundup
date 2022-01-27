class Api::ForumPostsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:index, :show]

  before_action :is_authorized, only: [:destroy]

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
      render json: "This post does not belong to you", status: :unauthorized
    end
  end

  def destroy
    forum_post = ForumPost.find(params[:id])
    forum_post.destroy
    head :no_content
  end

  private 

  def forum_params
    params.permit(:title, :content, :user_id, :like_count, :dislike_count, :id)
  end

  def is_authorized
    permitted = current_user.admin?
    render json: "You are not permitted to delete this thread", status: :forbidden unless permitted
  end

end
