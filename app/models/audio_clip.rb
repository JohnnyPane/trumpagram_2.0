class AudioClip < ApplicationRecord
	validates :speaker_id, :audio_url, presence: true

	belongs_to :speaker
		primary_key: :id,
		foreign_key: :speaker_id,
		class_name: :Speaker

	has_one :transcript

	has_many :words, through: :transcript
end