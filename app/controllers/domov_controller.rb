class DomovController < ApplicationController
  def index
  	#@names = Name.all.reverse
  	@blogs = Blog.last(5).reverse

  	@comments = Comment.all.reverse
  	
  	
  end
end
