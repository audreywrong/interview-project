import React from "react";
import ReactDOM from "react-dom";

function App() {
    return <div className="container">This is a sample React component 2.</div>;
}

export default App;

if (document.getElementById("react-app")) {
    ReactDOM.render(<App />, document.getElementById("react-app"));
}
