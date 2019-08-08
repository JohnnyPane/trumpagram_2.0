class Speaker < ApplicationRecord
	validates :name, presence: true

	has_many :audio_clips,
		primary_key: :id,
		foreign_key: :speaker_id
		class_name: :AudioClip

	has_many :transcripts, through: :audio_clips

	has_many :words, through: :transcripts
end
