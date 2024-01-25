class AddOverviewToArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :overview, :string
  end
end
