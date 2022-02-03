import GaugeChart from "react-gauge-chart";
import "./Speed.scss";

interface SpeedIF {
    value: number;
    update: string;
}

function Speed ({ value, update }: SpeedIF) {
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
                        percent={Number(`0.${value}`)}
                        arcPadding={0.03}
                        hideText={true}
                    />
                    <div className="speed-value">
                        <span>{value}</span>
                        <span>km</span>
                    </div>
                </div>
                <div className="last-update white">
                    <span>Last Update</span>
                    <span>{update}</span>
                </div>
            </div>
        </div>
    )
}

export default Speed;
