import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

class BandForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bandname: "", track: "", image: "", soundclip: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        const { bandName } = this.state;
        event.preventDefault();
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
                            value={this.state.bandName}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Favorite Track:
                        <input
                            name="track"
                            placeholder="Favorite Track"
                            value={this.state.track}
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
                        Sound Clip:
                        <input
                            name="soundClip"
                            placeholder="Sound Clip"
                            value={this.state.soundClip}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <Button>Save Favorite Band Profile</Button>
                </div>
            </form>
        );
    }
}

export default BandForm;

if (document.getElementById("band-form")) {
    ReactDOM.render(<BandForm />, document.getElementById("band-form"));
}
