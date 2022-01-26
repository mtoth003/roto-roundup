class WebsitesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize

  def index
    render json: Website.all
  end

  def show
    website = find_website
    render json: website
  end

  private

  def find_website
    Website.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Website not found"}, status: :not_found
  end

end
