import React from "react";

class Bands extends React.Component {

    constructor() {
        super();
        this.state = {
            initBands: [],
            bands: [],
            updatedBands: [],
            editable: false,
        }

    }

    componentDidMount() {
        this.props.bandsInit(this);
    }

    setBandTable(bandsLoad) {
        const initBands = [];
        bandsLoad.map((obj) => {
            initBands.push(Object.assign({}, obj));
        })
        this.setState({ bands: initBands, bandsInit: bandsLoad });
    }

    setEditable = () => {
        const editable = !this.state.editable;
        this.setState({ editable: editable });
    }

    onInputChange = (event, id) => {
        const fieldname = event.target.getAttribute("fieldname");
        const value = event.target.value;
        this.updateBand(id, fieldname, value);
    }

    updateBand = (id, fieldname, value) => {
        const bands = this.state.bands; // bands is init bands list
        const bandToUpdate = bands.find((band) => { // find a band to update from bands
            return band.id === id;
        })
        bandToUpdate[fieldname] = value; // update value in bands
        const bandsToUpdate = this.state.updatedBands; // new list for updated only bands
        bandsToUpdate[id] = true; // ste tru if value is updated
        this.setState({ bands: bands, updatedBands: bandsToUpdate }); // bands = new updated bands full list; update bands = "true" list
    }

    onChangeSave = () => {
        const bandsToSave = [];
        for (let i = 0; i < this.state.updatedBands.length; i++) {
            if (this.state.updatedBands[i] === true) {
                const bandId = i;
                const band = this.state.bands.find((band) => {
                    return band.id === bandId;
                })
                bandsToSave.push(band);
                this.saveToDB(bandsToSave);
            }
        }
    }

    saveToDB = (bandsToSave) => {
        let self = this;
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        fetch("http://localhost:80/08_12_files/updateBands.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(bandsToSave)
        }).then(function (response) {
            response.json().then((body) => {
                self.setEditable();
                alert(body);
                const bandsInit = this.state.bands;
                self.setBandTable(bandsInit);
                self.setState({updatedBands: []});
            })
        })
    }

    onCancel = () => {
        const bands = this.state.bandsInit;
        this.setBandTable(bands);
        this.setEditable();
    }

    render() {
        return (
            <div className='pb-3 px-5 m-5'>
                <form method="POST">
                    <button className="btn btn-outline-info my-2" type="button" onClick={this.setEditable}>Edit</button>
                    <button className="btn btn-outline-info m-2" type="button" onClick={this.onChangeSave}>Save updates</button>
                    <button className="btn btn-outline-danger my-2" type="button" onClick={this.onCancel}>Cancel updates</button>

                    <table className='table table-hover table-striped table-borderless'>
                        <thead className='table-dark'>
                            <tr>
                                <th><div>Title</div></th>
                                <th>Lead artist</th>
                                <th>Genres</th>
                                <th>Year of foundation</th>
                                <th>Origin</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !(this.state.bands === undefined) && this.state.bands.map(band => {
                                    return (
                                        <tr key={band.id} onChange={(e) => this.onInputChange(e, band.id)}>
                                            <td>
                                                <div hidden={this.state.editable}>{band.title}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.title} fieldname="title"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.leadArtist}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.leadArtist} fieldname="leadArtist"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.genres}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.genres} fieldname="genres"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.yearFoundation}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.yearFoundation} fieldname="yearFoundation"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.origin}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.origin} fieldname="origin"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.website}</div>
                                                <input hidden={!this.state.editable} defaultValue={band.website} fieldname="website"></input>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Bands;