class CreateAudioClips < ActiveRecord::Migration[5.2]
  def change
    create_table :audio_clips do |t|
    	t.integer :speaker_id, null: false
    	t.string :audio_url, null: false

    	t.timestamps
    end
    add_index :audio_clips, :id
  end
end
