import "./Battery.scss";
import { BatteryIcon } from "../../utils/icons";

interface BatteryIF {
    value: number;
    update: string
}

function Battery ({ value, update }: BatteryIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Battery</span>
            </div>
            <div className="content battery-content">
                <div className="battery-area-container">
                    <div className="battery-area">
                        <div
                            className="battery-road"
                            style={{ width: `${value}%` }}
                        />
                        <span>{value}%</span>
                    </div>
                </div>

                <div className="battery-container">
                    <div className="battery-icon">
                        <BatteryIcon />
                        <span>{value}%</span>
                    </div>
                    <div className="last-update white">
                        <span>Last Update</span>
                        <span>{update}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battery;
