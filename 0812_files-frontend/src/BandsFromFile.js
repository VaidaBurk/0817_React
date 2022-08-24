import React from 'react';
import Bands from './Bands';

class BandsFromFile extends React.Component {

    bandsInit = (sourceObject) => {
        const headers = new Headers();
        const self = sourceObject;
        const filename = this.props.filename;
        headers.append("Content-type", "application/json");
        fetch("http://localhost/08_12_Files/fileReader.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(filename),
        }).then(function (response) {
            if (response.ok) {
                response.json().then(bands => {
                    self.setBandTable(bands);
                }
                );
            }
        });
    }

    render() {
        return(
            <Bands bandsInit={this.bandsInit}></Bands>
        )
    }

}

export default BandsFromFile;