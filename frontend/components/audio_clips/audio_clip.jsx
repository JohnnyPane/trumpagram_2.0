import React from 'react';
import Dropzone from 'react-dropzone';
import Select from 'react-select';

import SpeakerListContainer from '../speakers/speaker_list_container';

class AudioClipForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			speakerId: null,
			file: '',
			speaker: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(property) {
		return e => this.setState({
			[property]: e.value || e.target.value,
		});
	}

	componentDidUpdate() {
		console.log(this.state.speakerId)
	}

	updateSpeaker() {
		return e => this.setState({
			speaker: e,
			speakerId: e
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData()
		formData.append('audio_clip[file]', this.state.file);
		formData.append('audio_clip[speaker_id]', this.state.speakerId.value);
		console.log("CREATE");
		this.props.createAudioClip(formData);
	};

	render() {
		const { speakerId, file, speaker } = this.state;
		const { options } = this.props; 

		return (
			<div>
				<form className="audio-form" onSubmit={this.handleSubmit}>
					<Dropzone onDrop={acceptedFiles => this.update('file')({ value: acceptedFiles[0]})}>
					  {({getRootProps, getInputProps}) => (
					    <section>
					      <div {...getRootProps()}>
					        <input {...getInputProps()} />
					        <p>Drag 'n' drop some files here, or click to select files</p>
					      </div>
					      <aside>
					      	<h2>{file.name}</h2>
					      </aside>
					    </section>
					  )}
					</Dropzone>

					<Select
						value={speaker}
						options={options}
						onChange={this.updateSpeaker()}
						name="speaker"
						placeholder="select a speaker..."
					/>
					<input type="submit" className="audio-submit" value="Upload audio"/>
				</form>
			</div>
		) 
	}
};

export default AudioClipForm;