import React from "react";

class Bands extends React.Component {

    constructor() {
        super();
        this.state = {
            bands: []
        }
        this.bandsInit();
    }

    bandsInit = () => {
        let self = this;
        fetch("http://localhost/my-app-backend/bands.php", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(bands => {
                    self.setBandTable(bands);
                });
            }
        });
    }

    setBandTable(bandsLoad) {
        const initBands = [];
        console.log(bandsLoad);
        bandsLoad.map((obj) => {
            initBands.push(Object.assign({}, obj));
        })
        this.state.bands = initBands;
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
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
                            return (<tr>
                                <td>{band.title}</td>
                                <td>{band.leadArtist}</td>
                                <td>{band.genres}</td>
                                <td>{band.yearFoundation}</td>
                                <td>{band.origin}</td>
                                <td>{band.website}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table> 
        );
    }
}

export default Bands;