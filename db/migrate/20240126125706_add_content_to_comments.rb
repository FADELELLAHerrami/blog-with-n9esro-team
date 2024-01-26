class AddContentToComments < ActiveRecord::Migration[7.1]
  def change
    add_column :comments, :content, :string
  end
end
