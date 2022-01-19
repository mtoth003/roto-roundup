class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authenticate_user, only: [:website_show]

  def user_show
    reviews = Review.find_by(user_id:params[:id])
    render json: reviews
  end

  def website_show
    reviews = Website.find(params[:id]).reviews
    render json: reviews
  end

  def update
    review = Review.find(parmas[:id])
    if review.user_id == @current_user.id
      review.update!(review_params)
      render json: review
    else
      render json: "This review does not belong to you!", status: :unauthorized
    end
  end

  def create
    review = @current_user.reviews.create(review_params)
    render json: review, status: :created
  end

  def destroy
    review = Review.find(parmas[:id])
    if review.user_id == @current_user.id
      review.destroy
      head :no_content
    else
      render json: "This review does not belong to you!", status: :unauthorized
    end
  end


  private

  def review_params
    params.permit(:rating, :comment, :user_id, :website_id)
  end

end
