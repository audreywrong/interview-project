import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

class BandForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bandName: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
    };

    handChange = (event) => {
        event.preventDefaul();
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { bandName } = this.state;
        return (
            <div>
                <h1>Band Input Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Band name is: {bandName}
                        <input
                            type="text"
                            placeholder="Band Name"
                            name="bandName"
                            onChange={this.handInputChange}
                        />
                    </label>
                    <p>
                        <Button>Submit Band</Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default BandForm;

if (document.getElementById("band-form")) {
    ReactDOM.render(<BandForm />, document.getElementById("band-form"));
}
