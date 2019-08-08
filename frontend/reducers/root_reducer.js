import { combineReducers } from 'redux';

import speakersReducer from './speakers_reducer';

const rootReducer = combineReducers({
	speakers: speakersReducer
});

export default rootReducer;
