# app/helpers/articles_helper.rb

module ArticlesHelper
  def render_article_content(content)
    # Convertir le contenu JSON en objet Ruby
    content_data = JSON.parse(content)

    # À ce stade, vous devrez parcourir l'objet content_data et générer le HTML approprié
    # en fonction de la structure attendue par votre éditeur ou application.

    # Exemple basique : Si le contenu est un simple paragraphe
    content_html = content_data['blocks'].map do |block|
      case block['type']
      when 'paragraph'
        "<p>#{block['data']['text']}</p>"
      when 'header'
        "<h#{block['data']['level']}>#{block['data']['text']}</h#{block['data']['level']}>"
      when 'list'
        list_items = block['data']['items'].map { |item| "<li>#{item}</li>" }.join
        "<ul>#{list_items}</ul>"
      when "code"
        escaped_code = CGI.escapeHTML(block['data']['code'])
        "<pre><code>#{escaped_code}</code></pre>"
      when 'image'
        url = block['data']['file']['url']
        caption = block['data']['caption']
        with_border = block['data']['withBorder']
        with_background = block['data']['withBackground']
        stretched = block['data']['stretched']

        container_classes = ["image-container"]
        container_classes << "image-border" if with_border
        container_classes << "image-background" if with_background

        image_classes = ["image"]
        image_classes << "image-stretched" if stretched
        image_classes << "image-with-background" if with_background

        container_class = container_classes.join(' ')
        image_class = image_classes.join(' ')

        <<-HTML
          <figure class="#{container_class}">
            <img src='#{url}' alt='#{caption}' class='#{image_class}' />
            <figcaption class="centered-content">#{caption}</figcaption>
          </figure>
        HTML
      else
        ''
      end
    end

    content_html.join.html_safe
  end
end
