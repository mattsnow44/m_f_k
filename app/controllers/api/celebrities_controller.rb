class Api::CelebritiesController < ApplicationController
  def index
    celebrities = Celebrity.all.sample(3)
    render json: celebrities
  end

  def show 
    

  private
  def get_celebrity
    @celebrity = Celebrity.find(params[:id])
  end

  
end
