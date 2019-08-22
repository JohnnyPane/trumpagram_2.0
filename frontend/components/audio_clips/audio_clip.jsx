import React from 'react';
import Dropzone from 'react-dropzone';

class AudioClipForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			speaker: '',
			file: ''
		}
	}

	update(property) {
		return e => this.setState({
			[property]: e.target.value
		});
	}

	render() {
		const { speaker, file } = this.state;

		return (
			<div>
				<form className="audio-form">
					<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
					  {({getRootProps, getInputProps}) => (
					    <section>
					      <div {...getRootProps()}>
					        <input {...getInputProps()} />
					        <p>Drag 'n' drop some files here, or click to select files</p>
					      </div>
					    </section>
					  )}
					</Dropzone>
				</form>
			</div>
		) 
	}
};

export default AudioClipForm;