import React from "react";
import ReactDOM from "react-dom";
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
} from "react-vis";

const BandGraph = () => {
    // const GetBandData = () => {
    // //     const url = "api/fetch/tiles";

    // //     axios.get(url).then(function (response) {
    // //         console.log(response.data.name);
    // //     });
    // // };

    return (
        <XYPlot width={300} height={300}>
            <HorizontalGridLines />
            <LineSeries
                data={[
                    { x: 1, y: 10 },
                    { x: 2, y: 5 },
                    { x: 3, y: 15 },
                ]}
            />
            <XAxis />
            <YAxis />
        </XYPlot>
    );
};

ReactDOM.render(<BandGraph />, document.getElementById("band-graph"));
