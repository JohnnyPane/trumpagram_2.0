import merge from 'lodash/merge';

import { RECEIVE_SPEAKERS,
				 RECEIVE_SPEAKER,
				 REMOVE_SPEAKER } from '../actions/speaker_actions';


const initialState = {
	1: {
		id: 1,
		name: 'Donald Trump'
	},
	2: {
		id: 2,
		name: 'Bernie Sanders'
	}
}

const speakersReducer = (state = initialState, action) => {
	switch(action.type) {
		case RECEIVE_SPEAKERS:
			return action.speakers
		case RECEIVE_SPEAKER:
			const newSpeaker = { [action.speaker.id]: action.speaker };
			return merge({}, state, newSpeaker);
		case REMOVE_SPEAKER:
			nextState = merge({}, state);
			delete nextState[action.speaker.id];
			return nextState;
		default: 
			return state;
	}
};

export default speakersReducer;