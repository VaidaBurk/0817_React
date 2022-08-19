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

        fetch("http://localhost:80/0812_files-backend/addBand.php", {
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

    onYearFoundationChange = (event) => {
        this.setState({title: event.target.value});
    }

    onOriginChange = (event) => {
        this.setState({title: event.target.value});
    }

    onWebsiteChange = (event) => {
        this.setState({title: event.target.value});
    }

    render(){
        return(
            <div className='pb-3 p-5 m-5'>
                <h5 className='mb-3'>Add new band:</h5>
                <form onSubmit={this.onSave}>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label mt-3">Title</label>
                            <input className="form-control" fieldname="title" value={this.state.title} onChange={this.onTitleChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3">Lead Artist</label>
                            <input className="form-control" fieldname="leadArtist" value={this.state.leadArtist} onChange={this.onLeadArtistChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3">Genres</label>
                            <input className="form-control" fieldname="genres" value={this.state.genres} onChange={this.onGenresChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label mt-3">Year of Foundation</label>
                            <input className="form-control" fieldname="yearfoundation" value={this.state.yearFoundation} onChange={this.onYearFoundationChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3">Origin</label>
                            <input className="form-control" fieldname="origin" value={this.state.origin} onChange={this.onOriginChange}></input>
                        </div>
                        <div className="col-4">
                            <label className="form-label mt-3">Website</label>
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