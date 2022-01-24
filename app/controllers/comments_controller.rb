class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:forum_post_show]

  def user_show
    comments = Comment.find_by(user_id:params[:id])
    render json: comments
  end

  def forum_post_show
    comments = ForumPost.find(params[:id]).comments
    render json: comments
  end

  def update
    comment = Comment.find(params[:id])
    if comment.user_id == @current_user.id
      comment.update!(comment_params)
      render json: comment
    else
      render json: "This comment does not belong to you!", status: :unauthorized
    end
  end

  def create
    comment = @current_user.comments.create(comment_params)
    render json: comment, status: :created
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.user_id == @current_user.id
      comment.destroy
      head :no_content
    else
      render json: "This comment does not belong to you!", status: :unauthorized
    end
  end
  
  private
  
  def comment_params
    params.permit(:text, :user_id, :forum_post_id)
  end

end
