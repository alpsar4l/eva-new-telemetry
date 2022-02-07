import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./style/main.scss";

import { TailSpin } from "react-loader-spinner";

import Speed from "./components/Speed/Speed";
import Voltage from "./components/Voltage/Voltage";
import Battery from "./components/Battery/Battery";
import Location from "./components/Location/Location";
import Temperature from "./components/Temperature/Temperature";

function App() {
    const url = "http://localhost:9999";
    const [latestData, setData] = useState<any>([]);
    const [lastUpdate, setLU] = useState("");

    useEffect(() => {
        setInterval(() => {
            axios
                .get(`${url}/api/collect/latest`)
                .then(function (response) {
                    setData(response.data);
                    setLU(moment.unix(response.data.message.date).format("Do MMMM, H:mm"));
                });
        }, 1000)
    }, []);

    return (
        <div className="app">
            {
                latestData.length !== 0 ?
                    <>
                        <div className="eva-logo">
                            <img src="./assets/eva-logo.png" alt="Eva Logo" />
                        </div>
                        <Speed
                            value={Number(latestData.message.speed)}
                            update={lastUpdate}
                        />
                        <Voltage
                            value={Number(latestData.message.voltage)}
                            update={lastUpdate}
                        />
                        <Battery
                            value={Number(latestData.message.battery)}
                            update={lastUpdate}
                        />
                        <Temperature
                            engine={Number(latestData.message.engine_temperature)}
                            battery={Number(latestData.message.battery_temperature)}
                            cells={Number(latestData.message.cells_temperature)}
                            update={lastUpdate}
                        />
                        <Location
                            coordinates={[ 41.0572, 28.8204 ]}
                            update={lastUpdate}
                        />
                    </> :
                    <div className="center-loader">
                        <TailSpin
                            color={"#113DBFFF"}
                            ariaLabel="loading-indicator"
                        />
                    </div>
            }
        </div>
    );
}

export default App;
