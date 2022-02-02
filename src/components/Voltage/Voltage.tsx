import GaugeChart from "react-gauge-chart";
import "./Voltage.scss";
import { VoltageIcon } from "../../utils/icons";

interface VoltageIF {
    value: number
}

function Voltage ({ value }: VoltageIF) {
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
                    <span>12 Aralık 2022 16:28</span>
                </div>
            </div>
        </div>
    )
}

export default Voltage;
