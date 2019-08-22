import { connect } from 'react-redux';
import AudioClipForm from 'audio_clip';

import { receiveAudioClip } from '../../actions/audio_clip_actions';

const mapDispatchToProps = dispatch => ({
	receiveAudioClip: audioClip => dispatch(receiveAudioClip(audioClip));
});

export default connect(
	null,
	mapDispatchToProps
)(AudioClipForm);