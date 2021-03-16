import React from "react";
import ReactDOM from "react-dom";
// import { Button } from "react-bootstrap";

class BandForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bandName: "", single: "", image: "", audio: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        const bandName = this.state.bandName;
        alert(`You submit a band profile for: ${bandName}.`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Band Name:
                        <input
                            name="bandName"
                            placeholder="Band Name"
                            type="text"
                            value={this.state.bandName}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Favorite Single:
                        <input
                            name="single"
                            type="text"
                            placeholder="Favorite Single"
                            value={this.state.single}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Band Image:
                        <input
                            name="image"
                            placeholder="Band Image"
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Audio Clip:
                        <input
                            name="audio"
                            placeholder="Audio Clip"
                            value={this.state.audio}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <button>Save Favorite Band Profile</button>
                </div>
            </form>
        );
    }
}

export default BandForm;

if (document.getElementById("band-form")) {
    ReactDOM.render(<BandForm />, document.getElementById("band-form"));
}
