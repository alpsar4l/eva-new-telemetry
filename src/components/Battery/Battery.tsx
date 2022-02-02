import "./Battery.scss";
import { BatteryIcon } from "../../utils/icons";

interface BatteryIF {
    value: number
}

function Battery ({ value }: BatteryIF) {
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
                        <span>12 Aralık 2022 16:28</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battery;
