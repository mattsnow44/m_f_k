class Result < ApplicationRecord

  def self.rank(param)
    results = Result.group(param).count.sort_by{|_key, value| value}.reverse
    results.map do |r|
      {celebrity: Celebrity.find(r.first), count: r.last}
    end 
  end 
end
