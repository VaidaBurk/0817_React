import React from 'react';

class InputBand extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            leadArtist: "",
            genres: "",
        }
    }

    onSave = (event) => {
        let self = this;
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        fetch("http://localhost:80/my-app-backend/createBand.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(self.state)
        }).then(function (response) {

        })
        event.preventDefault();
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onLeadArtistChange = (event) => {
        this.setState({title: event.target.value});
    }

    onGenresChange = (event) => {
        this.setState({title: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onSave}>
                <input fieldname="title" value={this.state.title} onChange={this.onTitleChange}></input>
                <input fieldname="leadArtist" value={this.state.leadArtist} onChange={this.onLeadArtistChange}></input>
                <input fieldname="genres" value={this.state.genres} onChange={this.onGenresChange}></input>

                <button>Save</button>
            </form>
        )
    }
}

export default InputBand;