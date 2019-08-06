class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
    	t.integer :audio_id, null: false
    	t.float :start_time, null: false
    	t.float :end_time, null: false
    	t.float :confidence
    	t.string :word

    	t.timestamps
    end
    add_index :words, :word
  end
end
