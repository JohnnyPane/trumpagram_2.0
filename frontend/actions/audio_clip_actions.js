import * as APIUtil from '../util/audio_clip_api_util';

export const RECEIVE_AUDIO_CLIP = 'RECEIVE_AUDIO_CLIP';
export const RECEIVE_AUDIO_CLIPS = 'RECEIVE_AUDIO_CLIPS';
export const CREATE_AUDIO_CLIP = 'CREATE_AUDIO_CLIP';

export const receiveAudioClip = audioClip => ({
	type: RECEIVE_AUDIO_CLIP,
	audioClip
});

export const receiveAudioClips = audioClips => ({
	type: RECEIVE_AUDIO_CLIPS,
	audioClips
});

export const createAudioClip = clip => dispatch => (
	APIUtil.createAudioClip(clip).then(clip => (
		dispatch(createAudioClip(clip))
	))
);
