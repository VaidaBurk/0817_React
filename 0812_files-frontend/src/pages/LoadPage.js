import React from "react";
import BandsFromFile from "../BandsFromFile";

class LoadPage extends React.Component {

    constructor() {
        super();
        this.state = {
            filename: "",
            filepath: "",
            load: false
        }
    }

    onFileNameChange = (event) => {
        const filename = event.target.files[0].name;
        this.setState({filename: filename, filepath: event.target.value});
    }

    // onFileLoad = () => {
    //     const headers = new Headers();
    //     let self = this;
    //     headers.append("Content-type", "application/json");
    //     fetch("http://localhost:80/08_12_Files/fileReader.php", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(self.state.filename),
    //     }).then(function (response) {
           
    //     });
    // }

    render() {
        return (
            <div className="m-5">
                <input className="form-control" type="file" value={this.state.filepath} onChange={this.onFileNameChange}></input>
                <button className="btn btn-secondary mt-3" onClick={() => {this.setState({load: true})}}>Load</button>
                {this.state.load === true && <BandsFromFile filename={this.state.filename}></BandsFromFile>}
            </div>
        )
    }
}

export default LoadPage;