import { connect } from 'react-redux';
import SpeakerList from './speaker_list';

//Actions
import { receiveSpeakers, receiveSpeaker } from '../../actions/speaker_actions';
import { allSpeakers } from '../../reducers/selectors';

const mapStateToProps = state => ({
	speakers: allSpeakers(state),
	state
});

const mapDispatchToProps = dispatch => ({
	receiveSpeaker: speaker => dispatch(receiveSpeaker(speaker))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SpeakerList);