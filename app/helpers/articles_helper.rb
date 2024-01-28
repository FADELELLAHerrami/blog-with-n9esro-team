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
        "<h1>#{block['data']['text']}</h1>"
      when 'list'
        list_items = block['data']['items'].map { |item| "<li>#{item}</li>" }.join
        "<ul>#{list_items}</ul>"
      when "code"
        escaped_code = CGI.escapeHTML(block['data']['code'])
        "<pre style=\"background-color: #1E1E1E; color: #D4D4D4; padding: 10px; border-radius: 5px;\"><code>#{escaped_code}</code></pre>"
      when 'checklist'
        items = block['data']['items'].map do |item|
          text = item['text']
          checked = item['checked'] || false

          checkbox_html = <<~HTML
            <li style="list-style: none; margin-bottom: 10px;">
              <label class="styled-checkbox" style="display: flex; align-items: center; font-size: 14px;">
                <input type="checkbox" #{checked ? 'checked' : ''} style="margin-right: 8px;">
                <span class="checkmark" style="width: 16px; height: 16px; border: 1px solid #555; background-color: #eee; display: inline-block; position: relative;"></span>
                <span style="margin-left: 8px;">#{text}</span>
              </label>
            </li>
          HTML

          checkbox_html
        end.join

        "<ul>#{items}</ul>"
      when 'quote'
        text = block['data']['text']
        caption = block['data']['caption']
        alignment = block['data']['alignment'] || 'left'

        quote_html = <<~HTML
          <div style="margin: 10px 0; padding: 15px; border-left: 3px solid #555; background-color: #f9f9f9; text-align: #{alignment};">
            <blockquote style="margin: 0;">#{text}</blockquote>
            <p style="margin: 5px 0; text-align: right;">- #{caption}</p>
          </div>
        HTML

        quote_html
      when 'warning'
        text = block['data']['message']
        caption = block['data']['title']
        alignment = block['data']['alignment'] || 'left'

        warning_html = <<~HTML
          <div style="margin: 10px 0; padding: 15px; border-left: 3px solid red; background-color: #f9f9f9; text-align: #{alignment};">
            <blockquote style="margin: 0;">#{text}</blockquote>
            <p style="margin: 5px 0; text-align: right;">- #{caption}</p>
          </div>
        HTML

        warning_html
      when 'delimiter'
        delimter_html = <<~HTML
          <hr style="border: 10px solid green;">
        HTML

        delimter_html
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
      when 'table'
        table_data = block['data'] || {} # Handle missing or nil 'data'
        content = table_data['content'] || []
        with_headings = table_data['withHeadings'] || false

        rows = content.map do |row|
          if with_headings
            columns = row.map { |cell| "<th style=\"border: 1px solid #dddddd; text-align: left; padding: 8px;\">#{cell}</th>" }.join
            "<tr style=\"border: 1px solid #dddddd; text-align: left; padding: 8px;\">#{columns}</tr>"
          else
            columns = row.map { |cell| "<td style=\"border: 1px solid #dddddd; text-align: left; padding: 8px;\">#{cell}</td>" }.join
            "<tr style=\"border: 1px solid #dddddd; text-align: left; padding: 8px;\">#{columns}</tr>"
          end
        end.join


        "<table style=\"font-family: arial, sans-serif; border-collapse: collapse; width: 100%;\">#{rows}</table>"
      else
        ''
      end
    end

    content_html.join.html_safe
  end
end
