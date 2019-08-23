class Api::AudioClipsController < ApplicationController
	def index
		@audio_cilps = AWS::S3::Bucket.find(BUCKET).objects
	end

	def create
		@audio_clip = AudioClip.new
		@audio_clip.speaker_id = params[:audio_clip][:speaker_id]
		@audio_clip.audio_url = "FAKE REMOVE COL"
		@audio_clip.audio_file.attach(params[:audio_clip][:file])
		@audio_clip.save!
	end

	def delete
	end
	
end