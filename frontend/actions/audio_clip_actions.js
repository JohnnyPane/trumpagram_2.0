export const RECEIVE_AUDIO_CLIP = 'RECEIVE_AUDIO_CLIP';
export const RECEIVE_AUDIO_CLIPS = 'RECEIVE_AUDIO_CLIPS':

export const receiveAudioClip = audioClip => ({
	type: RECEIVE_AUDIO_CLIP,
	audioClip
});

export const RECEIVE_AUDIO_CLIPS = audioClips => ({
	type: RECEIVE_AUDIO_CLIPS,
	audioClips
})