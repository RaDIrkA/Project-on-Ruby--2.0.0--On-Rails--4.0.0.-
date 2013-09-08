class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
    before_filter :authenticate_user!
    http_basic_authenticate_with :name => "user", :password => "password", :except => [:create, :edit, :update]



  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all.reverse
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    @comments = Comment.last(5).reverse
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
    @comments = Comment.all.reverse
    @blogs = Blog.all
  end

  # POST /comments
  # POST /comments.json
  def create
    @blog = Blog.find(params[:blog_id])
    @comment = @blog.comments.create(comment_params)
    
    respond_to do |format|
  
      if @comment.save
        format.html { redirect_to @blog, notice: 'Comment was successfully created.' }
        format.json { render json: @blog, status: :created, location: @comment }
      else
        format.html { render action: 'new' }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
    end
  end
end




  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    @blog = @comment.blog
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy

    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:blog_id, :name, :email, :comment)
    end
end
