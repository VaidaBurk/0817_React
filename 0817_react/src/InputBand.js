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
        const header = new Headers();
        header.append("Content-type", "application/json");

        fetch("http://localhost/my-app-backend/createBand.php", {
            method: "POST",
            headers: header,
            body: JSON.stringify(self.state)
        }).then(function (response) {

        });
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
            <form onSubmit={this.onSave()}>
                <input fieldname="title" value={this.state.title} onChange={this.onTitleChange}></input>
                <input fieldname="leadArtist" value={this.state.leadArtist} onChange={this.onLeadArtistChange}></input>
                <input fieldname="genres" value={this.state.genres} onChange={this.onGenresChange}></input>

                <button>Save</button>
            </form>
        )
    }
}