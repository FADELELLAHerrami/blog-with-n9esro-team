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

  # action to upload image
  def upload_image
    uploaded_file = params[:file]

    # Vérifier que le fichier a été correctement téléchargé
    if uploaded_file.present? 
      # Définir le chemin de destination dans le répertoire app/assets/images
      destination_path = Rails.root.join('app', 'assets', 'images', uploaded_file.original_filename)

      # Écrire le fichier dans le répertoire de destination
      File.open(destination_path, 'wb') do |file|
        file.write(uploaded_file.read)
      end

      # Retourner le chemin de l'image téléchargée (par exemple, pour l'afficher dans l'éditeur)
      render json: { url: ActionController::Base.helpers.asset_path("images/#{uploaded_file.original_filename}") }
    else
      render json: { error: 'Invalid file format' }, status: :unprocessable_entity
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
