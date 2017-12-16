class Api::CelebritiesController < ApplicationController
  def index
    celebrities = Celebrity.all.sample(3)
    render json: celebrities
  end
end
