class Api::ResultsController < ApplicationController
  def index 

  end 

  def create 
    attrs = params.permit(:marry, :fuck, :kill)
    result = Result.new(attrs)
    if result.save
      # render json: Movie.order(:title).to_json( only: [:id, :title, :summary, :release_year], methods: :img_url)
    else
      render_error(result)
    end
  end 

  private 

  def result_params
    params.require(:movie).permit(:marry, :fuck, :kill)    
  end 

end 
  