import React from "react";
import AddBand from "./AddBand";

class Bands extends React.Component {

    constructor() {
        super();
        this.state = {
            initBands: [],
            bands: [],
            updatedBands: [],
            editable: false
        }
        this.bandsInit();
    }

    bandsInit = () => {
        let self = this;
        fetch("http://localhost/08_12_Files/displayAllBands.php", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(initBands => {
                    self.setBandTable(initBands);
                });
            }
        });
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
            if (this.state.updatedBands[i] == true) {
                const bandId = i;
                const band = this.state.bands.find((band) => {
                    return band.id === bandId;
                })
                bandsToSave.push(band);
                console.log(bandsToSave);
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
                alert(body);
                this.state.editable = false;
            })
        })
    }

    render() {
        return (
            <div className='pb-3 px-5 m-5'>
                <AddBand></AddBand>
                <form method="POST">
                    <button className="btn btn-secondary" type="button" onClick={this.setEditable}>Edit</button>
                    <button className="btn btn-secondary" type="button" onClick={this.onChangeSave}>Save updates</button>

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
                                                <input hidden={!this.state.editable} value={band.title} fieldname="title"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.leadArtist}</div>
                                                <input hidden={!this.state.editable} value={band.leadArtist} fieldname="leadArtist"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.genres}</div>
                                                <input hidden={!this.state.editable} value={band.genres} fieldname="genres"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.yearFoundation}</div>
                                                <input hidden={!this.state.editable} value={band.yearFoundation} fieldname="yearFoundation"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.origin}</div>
                                                <input hidden={!this.state.editable} value={band.origin} fieldname="origin"></input>
                                            </td>
                                            <td>
                                                <div hidden={this.state.editable}>{band.website}</div>
                                                <input hidden={!this.state.editable} value={band.website} fieldname="website"></input>
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