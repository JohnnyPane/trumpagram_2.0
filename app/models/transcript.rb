class Transcript < ApplicationRecord
	validates :body, :title, presence: true

	has_many :words,
		foreign_key: :audio_id
		class_name: :Word

	belongs_to :audio_clip
	belongs_to :speaker
end