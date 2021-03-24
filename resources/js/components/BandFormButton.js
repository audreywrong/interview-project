import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import BandForm from "./BandForm";

const BandFormButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const onClick = () => {
        setShowForm(true);
        setShowButton(false);
    };

    return (
        <div>
            {showButton && <Button onClick={onClick}>Add A Band</Button>}
            {showForm ? <BandForm /> : null}
        </div>
    );
};

ReactDOM.render(
    <BandFormButton />,
    document.getElementById("band-form-button")
);
