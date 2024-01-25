






# app/helpers/articles_helper.rb

module ArticlesHelper
  def render_article_content(content)
    # Convertir le contenu JSON en objet Ruby
    content_data = JSON.parse(content)

    # À ce stade, vous devrez parcourir l'objet content_data et générer le HTML approprié
    # en fonction de la structure attendue par votre éditeur ou application.

    # Exemple basique : Si le contenu est un simple paragraphe
    if content_data.key?('blocks') && content_data['blocks'].first['type'] == 'paragraph'
      return content_data['blocks'].first['data']['text'].html_safe
    else
      # Gérer d'autres types de contenus ici selon la structure de votre éditeur
      return 'Contenu non pris en charge'
    end
  end
end
