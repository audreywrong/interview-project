import React, { useState } from "react";
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

export default BandFormButton;
