# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_comment, only: [:edit, :update, :destroy]

  def index
    @comments = @article.comments
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    if @comment.save
      redirect_to article_path(@comment.article), notice: 'Comment was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    # Your edit action logic here
  end

  def update
    if @comment.update(comment_params)
      redirect_to article_path(@article), notice: 'Comment was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    redirect_to article_path(@article), notice: 'Comment was successfully destroyed.'
  end

  private

  def set_article
    @article = Article.find(params[:article_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :article_id) # Assuming the comment model has a 'body' attribute
  end
end
