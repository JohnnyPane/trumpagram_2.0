import { connect } from 'react-redux';
import AudioClipForm from './audio_clip';

import { receiveAudioClip, createAudioClip } from '../../actions/audio_clip_actions';
import { allSpeakers } from '../../reducers/selectors';

const mapDispatchToProps = dispatch => ({
	receiveAudioClip: audioClip => dispatch(receiveAudioClip(audioClip)),
	createAudioClip: audioClip => dispatch(createAudioClip(audioClip))
});

const mapStateToProps = state => ({
	options: allSpeakers(state).map(speaker => ({ value: speaker.id, label: speaker.name })),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AudioClipForm);