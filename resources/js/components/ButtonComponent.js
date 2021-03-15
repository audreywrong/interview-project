import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function ButtonComponent() {
    return (
        <div className="Button">
            <h1>This is a sample React button component.</h1>
            <Button>React Button</Button>
        </div>
    );
}

export default ButtonComponent;

if (document.getElementById("react-app")) {
    ReactDOM.render(<ButtonComponent />, document.getElementById("react-app"));
}
