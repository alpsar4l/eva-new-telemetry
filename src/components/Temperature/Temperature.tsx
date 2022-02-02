import GaugeChart from "react-gauge-chart";
import "./Temperature.scss";

interface TemperatureIF {
    engine: number,
    battery: number,
    cells: number
}

function Temperature ({ engine, battery, cells }: TemperatureIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Temperature</span>
            </div>
            <div className="content temperature-content">

                <div className="temp-chart">
                    <div className="temp-content">
                        <div className="temp-top">
                            <div className="temp-top-road" style={{ height: `${engine}%` }} />
                        </div>
                        <div className="temp-bottom">
                            <span>{engine}°</span>
                        </div>
                    </div>
                </div>

                <div className="temp-chart">
                    <div className="temp-content">
                        <div className="temp-top">
                            <div className="temp-top-road" style={{ height: `${battery}%` }} />
                        </div>
                        <div className="temp-bottom">
                            <span>{battery}°</span>
                        </div>
                    </div>
                </div>

                <div className="temp-chart">
                    <div className="temp-content">
                        <div className="temp-top">
                            <div className="temp-top-road" style={{ height: `${cells}%` }} />
                        </div>
                        <div className="temp-bottom">
                            <span>{cells}°</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Temperature;
