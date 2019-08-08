class CreateTranscripts < ActiveRecord::Migration[5.2]
  def change
    create_table :transcripts do |t|
    	t.integer :speaker_id, null: false
    	t.string :title, null: false
    	t.string :body, null: false

    	t.timestamps
    end
  end
end
