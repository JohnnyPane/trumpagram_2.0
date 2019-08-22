Rails.application.routes.draw do
	root to: 'static_pages#root'

	namespace :api, defaults: { format: :json } do
		resources :speaker, only: [ :index, :show, :create, :destroy ]
		resources :audio_clips, only: [ :index, :create ]
	end
end
