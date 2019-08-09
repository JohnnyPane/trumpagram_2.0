import React from 'react';

class SpeakerListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { speaker } = this.props;
		const { name } = speaker;

		return (
			<li className="speaker-list-item">
				<h3>{ name }</h3>
			</li>
		);
	}
}

export default SpeakerListItem;