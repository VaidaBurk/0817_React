import React from 'react';
import Bands from './Bands';

class BandsDB extends React.Component {

    bandsInit = (me) => {
        const self = me;
        fetch("http://localhost/08_12_Files/displayAllBands.php", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(bands => {
                    self.setBandTable(bands);
                });
            }
        });
    }

    render() {
        return(
            <Bands bandsInit={this.bandsInit}></Bands>
        )
    }

}

export default BandsDB;