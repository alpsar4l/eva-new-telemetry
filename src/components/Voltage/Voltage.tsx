import GaugeChart from "react-gauge-chart";
import "./Voltage.scss";
import { VoltageIcon } from "../../utils/icons";

interface VoltageIF {
    value: number;
    update: string
}

function Voltage ({ value, update }: VoltageIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Voltage</span>
            </div>
            <div className="content voltage-content">
                <div className="icon">
                    <VoltageIcon />
                </div>
                <div className="value">
                    <span>{value}</span>
                    <span>V</span>
                </div>
                <div className="last-update white">
                    <span>Last Update</span>
                    <span>{update}</span>
                </div>
            </div>
        </div>
    )
}

export default Voltage;
