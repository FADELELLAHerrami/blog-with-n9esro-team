class AddBodyToArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :body, :text
  end
end
