class Api::AudioClipsController < ApplicationController
	def index
		@audio_cilps = AWS::S3::Bucket.find(BUCKET).objects
	end

	def create
		@audio_clip = AudioClip.new(audio_clip_params)
		@audio_clip.audio_url = "FAKE REMOVE COL"
		@audio_clip.audio_file.attach(params[:audio_clip][:file])
		@audio_clip.save!
	end

	def delete
	end

	def audio_clip_params
		params.require(:audio_clip).permit(:speaker_id)
	end
end