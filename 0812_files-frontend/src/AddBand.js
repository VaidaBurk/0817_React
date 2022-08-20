import React from 'react';

class AddBand extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            leadArtist: "",
            genres: "",
            yearFoundation: "",
            origin: "",
            website: ""
        }
    }

    onSave = (event) => {
        let self = this;
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        fetch("http://localhost:80/08_12_files/addBand.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(self.state)
        }).then(function (response) {
            response.json().then((body) => {
                alert(body);
            })
        })
        event.preventDefault();
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onLeadArtistChange = (event) => {
        this.setState({leadArtist: event.target.value});
    }

    onGenresChange = (event) => {
        this.setState({genres: event.target.value});
    }

    onYearFoundationChange = (event) => {
        this.setState({yearFoundation: event.target.value});
    }

    onOriginChange = (event) => {
        this.setState({origin: event.target.value});
    }

    onWebsiteChange = (event) => {
        this.setState({website: event.target.value});
    }

    render(){
        return(
            <div className='pb-3'>
                <h5 className='mb-3'>Add new band:</h5>
                <form onSubmit={this.onSave}>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label mt-3" id="title" htmlFor="title">Title</label>
                            <input className="form-control" fieldname="title" value={this.state.title} onChange={this.onTitleChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3" id="leadArtist" htmlFor="leadArtist">Lead Artist</label>
                            <input className="form-control" fieldname="leadArtist" value={this.state.leadArtist} onChange={this.onLeadArtistChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3" id="genres" htmlFor="genres">Genres</label>
                            <input className="form-control" fieldname="genres" value={this.state.genres} onChange={this.onGenresChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label mt-3" id="yearFoundation" htmlFor="yearFoundation">Year of Foundation</label>
                            <input className="form-control" fieldname="yearfoundation" value={this.state.yearFoundation} onChange={this.onYearFoundationChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3" id="origin" htmlFor="origin">Origin</label>
                            <input className="form-control" fieldname="origin" value={this.state.origin} onChange={this.onOriginChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3" id="website" htmlFor="website">Website</label>
                            <input className="form-control" fieldname="website" value={this.state.website} onChange={this.onWebsiteChange}></input>
                        </div>
                    </div>
                    <button className="btn btn-secondary mt-5">Save</button>
                </form>
            </div>
        )
    }
}

export default AddBand;