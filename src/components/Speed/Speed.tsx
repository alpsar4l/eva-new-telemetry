import GaugeChart from "react-gauge-chart";
import "./Speed.scss";

interface SpeedIF {
    value: number
}

function Speed ({ value }: SpeedIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Speed</span>
            </div>
            <div className="content speed-content">
                <div className="speed-chart">
                    <GaugeChart
                        id="speed-chart"
                        nrOfLevels={100}
                        arcsLength={[0.1, 0.2, 0.2, 0.5]}
                        colors={["rgba(0,255,74,0.81)", "rgba(250,255,0,0.82)", "rgba(255,165,0,0.85)", "rgba(255,71,83,0.84)"]}
                        percent={value}
                        arcPadding={0.03}
                    />
                </div>
                <div className="last-update white">
                    <span>Last Update</span>
                    <span>12 Aralık 2022 16:28</span>
                </div>
            </div>
        </div>
    )
}

export default Speed;
