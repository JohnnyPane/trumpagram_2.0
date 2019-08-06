class CreateSpeakers < ActiveRecord::Migration[5.2]
  def change
    create_table :speakers do |t|
    	t.string :name, null: false

    	t.timestamps
    end
    add_index :speakers, :name
  end
end
