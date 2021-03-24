// import { event } from "jquery";
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Button } from "react-bootstrap";

export const BandForm = () => {
    const [inputName, setInputName] = useState("");
    const [inputSingle, setInputSingle] = useState("");
    const [inputImage, setInputImage] = useState(null);
    const [inputAudio, setInputAudio] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = "api/store/tile";

        axios
            .post(url, {
                name: inputName,
                single: inputSingle,
                image: inputImage,
                audio: inputAudio,
                user_id: GUSER,
            })
            .then((response) => {
                console.log(response);
            });
    };

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
        );
        this.setState({
            itemvalues: [{}],
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Band Name:
                    <input
                        name="name"
                        type="text"
                        placeholder="Band Name"
                        onChange={(event) => setInputName(event.target.value)}
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
                        onChange={(event) => setInputSingle(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Band Image:
                    <input
                        name="image"
                        type="text"
                        placeholder="Band Image URL"
                        onChange={(event) => setInputImage(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Audio Clip:
                    <input
                        name="audio"
                        type="text"
                        placeholder="Audio Clip URL"
                        onChange={(event) => setInputAudio(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={(handleSubmit, handleReset)}>
                    Save Favorite Band Profile
                </button>
            </div>
        </form>
    );
};

ReactDOM.render(<BandForm />, document.getElementById("bandform"));
