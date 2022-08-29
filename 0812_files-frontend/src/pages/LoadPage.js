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