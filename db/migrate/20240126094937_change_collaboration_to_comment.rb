






class ChangeCollaborationToComment < ActiveRecord::Migration[7.1]
  def change
    rename_table :collaborations, :comments
  end
end
