import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";

function ButtonComponent() {
    const [username, setUsername] = useState(" ");

    const GetDemoData = () => {
        const url = "https://randomuser.me/api";

        axios.get(url).then(function (response) {
            // handle success
            let data = response.data.results[0].name.first;
            console.log(data);
            setUsername(data);
        });
    };

    const GetTestData = () => {
        const url = "api/fetch/tiles";

        axios.get(url).then(function (response) {
            console.log(response.data.data[0].name);
        });
    };

    const PostTestData = () => {
        const url = "api/push";

        axios
            .post(url, {
                firstName: "Fred",
                lastName: "Flintstone",
            })
            .then(function (response) {
                console.log(response);
            });
    };

    return (
        <>
            <h1>Name: {username}</h1>
            <div className="Button">
                <h1>This is a sample React button component.</h1>
                <Button onClick={GetDemoData}>React Button</Button>
            </div>
            <div className="Button">
                <Button onClick={GetTestData}>React Button 2</Button>
            </div>
            <div className="Button">
                <Button onClick={PostTestData}>React Button 3</Button>
            </div>
        </>
    );
}

export default ButtonComponent;

if (document.getElementById("react-app")) {
    ReactDOM.render(<ButtonComponent />, document.getElementById("react-app"));
}
