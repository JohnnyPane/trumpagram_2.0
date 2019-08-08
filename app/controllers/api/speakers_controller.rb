class Api::SpeakersController < ApplicationController
	def create
		@speaker = Speaker.new(speaker_params)
		render :show
	end

	def show
		@speaker = Speaker.find(params[:id])
		render :show
	end

	def index
		@speakers = Speaker.all
		render :index
	end

	def destroy
		@speaker = Speaker.find(params[:id])
		@speaker.destroy
		render json: @speaker
	end

	private

	def speaker_params
		params.require(:name)
	end
end