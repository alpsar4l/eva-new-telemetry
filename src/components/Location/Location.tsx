import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./Location.scss";

interface LocationIF {
    coordinates: number[]
}

function Location ({ coordinates }: LocationIF) {
    return (
        <div className="section">
            <div className="title">
                <span>Location</span>
            </div>
            <div className="content location-content">
                <YMaps query={{ lang: "tr_TR" }} width="100%">
                    <Map width="100%" defaultState={{ center: coordinates, zoom: 13 }}>
                        <Placemark defaultGeometry={coordinates} />
                    </Map>
                </YMaps>
                <div className="last-update white">
                    <span>Last Update</span>
                    <span>12 Aralık 2022 16:28</span>
                </div>
            </div>
        </div>
    )
}

export default Location;
