class Celebrity < ApplicationRecord

  def get_image
    require 'mechanize'
    agent = Mechanize.new
    agent.user_agent_alias = 'Mac Safari'
    page = agent.get "https://www.google.com/imghp?hl=en&tab=wi"
    search_form = page.forms.first
    search_form["q"] = self.name
    page = search_form.submit
    self.update(image: page.css(".rg_l").last.children.first.attributes["data-src"].value)
  end 

  def stats
    marry = Result.where(marry_id: self.id).count
    fuck = Result.where(fuck_id: self.id).count
    kill = Result.where(kill_id: self.id).count
    results = {"marry": marry, "fuck": fuck, "kill": kill}
  end 

end
