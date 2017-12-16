class Celebrity < ApplicationRecord
  include ActionView::Helpers::NumberHelper
  
  attr_accessor :stats

  has_many :results

  def square_image
    name_split = name.split(" ")
    require 'mechanize'
    agent = Mechanize.new
    agent.user_agent_alias = 'Mac Safari'
    page = agent.get "https://www.google.com/search?as_st=y&tbm=isch&as_q=#{name_split[0]}+#{name_split[1]}&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=iar:s"
    self.update(image: page.css(".rg_l").last.children.first.attributes["data-src"].value)

  end 

  def stats
    marry = Result.where(marry_id: self.id).count.to_f
    fuck = Result.where(fuck_id: self.id).count.to_f
    kill = Result.where(kill_id: self.id).count.to_f
    total = marry + fuck + kill
    results = {"marry": number_to_percentage((marry/total)*100, precision: 2), "fuck": number_to_percentage((fuck/total)*100, precision: 2), "kill": number_to_percentage((kill/total)*100, precision: 2)}
  end 

end
