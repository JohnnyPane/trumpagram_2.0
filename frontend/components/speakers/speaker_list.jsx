import React from 'react';
//Components
import SpeakerListItem from './speaker_list_item';

class SpeakerList extends React.Component {
	render() {
		const { speakers } = this.props;
		const SpeakerItems = speakers.map(speaker => (
			<SpeakerListItem
				key={`speaker-list-item${speaker.id}`}
				speaker={speaker}
				/>
			)
		);

		return(
			<div>
				<ul className="speaker-list">
					{ SpeakerItems }
				</ul>
			</div>
		);
	}
}

export default SpeakerList;



