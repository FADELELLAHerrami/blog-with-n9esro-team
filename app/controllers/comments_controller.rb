# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  before_action :set_article
  before_action :set_comment, only: [:index, :edit, :update, :destroy]





  def index
    @comments = @article.comments
  end
  def new
    @comment = Comment.new
  end
  def create
    @comment = Comment.new(comment_params)
    @comment.article = @article
    if @comment.save!
      redirect_to article_path(@comment)

    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit

  end

  def update
    # Your update action logic here
  end

  def destroy
    @comment.destroy
    redirect_to @article, notice: 'Comment was successfully destroyed.'
  end

  private

  def set_article
    @article = Article.find(params[:article_id])
  end

  def set_article
    @article = Article.find(params[:id])
  end
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:comment)
  end
end
