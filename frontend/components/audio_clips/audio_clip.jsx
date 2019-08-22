import React from 'react';
import Dropzone from 'react-dropzone';
import Select from 'react-select';

import SpeakerListContainer from '../speakers/speaker_list_container';

class AudioClipForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			speakerId: null,
			file: ''
		}
	}

	update(property) {
		return e => this.setState({
			[property]: e.value || e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData()
		formData.append('audio_clip[file]', this.state.file);
		formData.append('audio_clip[speaker_id]', this.state.speakerId);
		this.props.createAudioClip(formData);
	};

	render() {
		const { speakerId, file } = this.state;
		const { options } = this.props; 
		console.log(this.state);

		return (
			<div>
				<form className="audio-form" onSubmit={this.handleSubmit.bind(this)}>
					<Dropzone onDrop={acceptedFiles => this.update('file')({ value: acceptedFiles[0]})}>
					  {({getRootProps, getInputProps}) => (
					    <section>
					      <div {...getRootProps()}>
					        <input {...getInputProps()} />
					        <p>Drag 'n' drop some files here, or click to select files</p>
					      </div>
					    </section>
					  )}
					</Dropzone>

					<Select
						value={speakerId}
						options={options}
						onChange={this.update('speakerId')}
						name="speakerId"
					/>
					<input type="submit" className="audio-submit" value="Upload audio"/>
				</form>
			</div>
		) 
	}
};

export default AudioClipForm;