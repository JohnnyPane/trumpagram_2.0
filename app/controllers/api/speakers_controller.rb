class Api::SpeakersController < ApplicationController
	def create
		@speaker = Speaker.new(speaker_params)
		render :show
	end

	def index
		@speakers = Speaker.all
	end

	def destroy
		@speaker = Speaker.find(params[:id])
		@speaker.destroy
	end

	private

	def speaker_params
		params.require(:name)
	end
end