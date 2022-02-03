import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./Location.scss";

interface LocationIF {
    coordinates: number[];
    update: string;
}

function Location ({ coordinates, update }: LocationIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Location</span>
            </div>
            <div className="content location-content">
                <YMaps query={{ lang: "en_US" }} width="100%">
                    <Map width="100%" defaultState={{ center: coordinates, zoom: 16 }}>
                        <Placemark defaultGeometry={coordinates} />
                    </Map>
                </YMaps>
                <div className="last-update white">
                    <span>Last Update</span>
                    <span>{update}</span>
                </div>
            </div>
        </div>
    )
}

export default Location;
