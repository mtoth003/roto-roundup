class AddColumnsToWebsite < ActiveRecord::Migration[6.1]
  def change
    add_column :websites, :football, :boolean
    add_column :websites, :baseball, :boolean
    add_column :websites, :basketball, :boolean
    add_column :websites, :hockey, :boolean
  end
end
