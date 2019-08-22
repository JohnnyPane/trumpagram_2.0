import merge from 'lodash/merge';

import {
	RECEIVE_AUDIO_CLIP,
	RECEIVE_AUDIO_CLIPS
} from '../actions/audio_clip_actions.js';

const audioClipsReducer = (state = {}, action) => {
	Object.freeze(state);
	let nextState = {};

	switch(action.type) {
		case RECEIVE_AUDIO_CLIP:
			const newAudioClip = {action.audioClip.id: aciton.audioClip};
			return Object.assign({}, state);
		default: 
			return state;
	}
};

export default audioClipsReducer;