class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show edit update destroy]

  def index
    if params[:query].present?
      @articles = Article.where(title: params[:query]).page(params[:page]).per(10)
    else
      @articles = Article.page(params[:page]).per(10)
    end
  end

  def show

  end

  def edit
  end

  def update
    if article.update(article_params)
      redirect_to article, notice: 'Article was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @article.delete
    redirect_to articles_path
  end

  def new
    @article = Article.new
  end

  def create

    @article = Article.new(article_params)
    @article.user = current_user
    if @article.save!
      redirect_to article_path(@article)

    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :body, :background)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
