import React from 'react';
import './Upload.css';

class Main extends React.Component {
    state = {
      imageURL: '',
      loading: false,
    };

    handleUploadImage = e => {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: data,
        }).then(response => { console.log(response); return response.json()})
        .then(result => { console.log(result); this.setState({ 
            imageURL: `http://localhost:8000/${result.file}`,
            loading: false,
        })}).catch(error => {console.log(error); this.setState({
            loading: false,
        })});
    }

    render() {
        return (
        <form onSubmit={this.handleUploadImage}>
            <div>
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <div>
                <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
            </div>
            <br />
            <div>
                <button disabled={this.state.loading}>Upload</button>
            </div>
            {this.state.imageURL && 
                <img src={this.state.imageURL} alt="img" />
            }
        </form>
        );
    }
}

export default Main;