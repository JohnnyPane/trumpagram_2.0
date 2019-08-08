class Word < ApplicationRecord
	validates :audio_id, :start_time, :end_time, :word, presence: true

	belongs_to :transcript
	belongs_to :audio_clip
	belongs_to :speaker

	
end