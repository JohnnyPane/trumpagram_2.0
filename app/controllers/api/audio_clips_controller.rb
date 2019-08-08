class Api::AudioClipsController < ApplicationController
	def index
		@audio_cilps = AWS::S3::Bucket.find(BUCKET).objects
	end

	def upload
	end

	def delete
	end

	def audio_clip_params
		params.require(:audio_clip).permit(:speaker_id, :audio_url)
	end
end