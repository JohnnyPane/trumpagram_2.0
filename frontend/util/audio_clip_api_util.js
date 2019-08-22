export const fetchAudioClips = data => {
	return $.ajax({
		method: 'GET',
		url: 'api/audio_clip',
		data
	})
};

export const createAudioClip = audioClipForm => {
	return $.ajax({
		method: 'POST',
		url: 'api/audio_clips',
		data: audioClipForm,
		contentType: false,
		processData: false
	})
};