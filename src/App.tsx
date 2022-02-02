import React from "react";
import "./style/main.scss";

import Speed from "./components/Speed/Speed";
import Voltage from "./components/Voltage/Voltage";
import Battery from "./components/Battery/Battery";
import Location from "./components/Location/Location";
import Temperature from "./components/Temperature/Temperature";

function App() {
    return (
        <div className="app">
            <div className="eva-logo">
                <img src="./assets/eva-logo.png" alt="" />
            </div>
            <Speed value={0.30} />
            <Voltage value={23} />
            <Battery value={30} />
            <Temperature engine={23} battery={78} cells={43} />
            <Location coordinates={[ 41.0572, 28.8204 ]} />
        </div>
    );
}

export default App;
