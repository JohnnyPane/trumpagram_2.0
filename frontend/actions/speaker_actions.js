export const RECEIVE_SPEAKER = 'RECEIVE_SPEAKER';
export const RECEIVE_SPEAKERS = 'RECEIVE_SPEAKERS';
export const REMOVE_SPEAKER = 'REMOVE_SPEAKER';

export const receiveSpeaker = speaker => ({
	type: RECEIVE_SPEAKER,
	speaker
});

export const receiveSpeakers = speakers => ({
	type: RECEIVE_SPEAKERS,
	speakers
});

export const removeSpeaker = speaker => ({
	type: REMOVE_SPEAKER,
	speaker
});

