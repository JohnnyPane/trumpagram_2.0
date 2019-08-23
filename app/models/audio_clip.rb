require 'net/http'
require 'json'

class AudioClip < ApplicationRecord
	validates :speaker_id, :audio_url, presence: true

	belongs_to :speaker,
		primary_key: :id,
		foreign_key: :speaker_id,
		class_name: :Speaker

	has_one_attached :audio_file
	has_one :transcript

	has_many :words, through: :transcript

	def public_url
		audio_file.service.send(:object_for, audio_file.key).public_url
	end

	def file_type
		audio_file.filename.to_s.split(".").last
	end

	def transcription_job_name
		"transcribe_#{id}"
	end

	def client
		@client ||= Aws::TranscribeService::Client.new
	end

	# def transcribe
	# 	create_transcribe_job
	# end

	def create_transcribe_job
		resp = client.start_transcription_job({
		  transcription_job_name: transcription_job_name,
		  language_code: "en-US", # required, accepts en-US, es-US, en-AU, fr-CA, en-GB, de-DE, pt-BR, fr-FR, it-IT, ko-KR, es-ES, en-IN, hi-IN, ar-SA
		  # media_sample_rate_hertz: 1,
		  media_format: file_type, # required, accepts mp3, mp4, wav, flac
		  media: { # required
		    media_file_uri: public_url,
		  },
		  # output_bucket_name: "OutputBucketName",
		  # settings: {
		  #   vocabulary_name: "VocabularyName",
		  #   show_speaker_labels: false,
		  #   max_speaker_labels: 1,
		  #   channel_identification: false,
		  # },
		})

		resp
	end

	def get_transcribe_job
		client.get_transcription_job({ transcription_job_name: transcription_job_name }).transcription_job
	end

	def transcribe_job_complete?
		status = get_transcribe_job.transcription_job_status
		['COMPLETED', 'FAILED'].include?(status)
	end

	def transcription
		return {} unless transcribe_job_complete?

		url = get_transcribe_job.transcript.transcript_file_uri
		uri = URI(url)
		response = Net::HTTP.get(uri)
		JSON.parse(response)
	end
end