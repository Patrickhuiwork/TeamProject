import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/resources.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {
    const positions = [
        [49.283461260262705, -123.09989994503977],
        [49.276177264698134, -123.08963625242552],
        [49.27816175747774, -123.11734607018269],
        [49.26177400193376, -123.10338828573116],
        [49.26288237291829, -123.13764964504067],
        [49.22013610708225, -123.04173430455938],
        [49.283620951637126, -123.12583337202867],
        


    ];

    return (
        <MapContainer className={style.map} center={positions[0]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {positions.map((pos, index) => (
                <Marker key={index} position={pos}>
                    <Popup>
                        {index === 0 && "Vancouver Fire Hall No.2 | Downtown East side"}
                        {index === 1 && "Vancouver Fire Hall No. 1 | Strathcona"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                        {index === 3 && "Vancouver Fire Hall No. 3 | Mount Pleasant"}
                        {index === 4 && "Vancouver Fire Hall No. 4 | Fairview"}
                        {index === 5 && "Vancouver Fire Hall No. 5"}
                        {index === 6 && "Vancouver Fire Hall No. 6 | West End"}
                        {index === 7 && "Vancouver Fire Hall No. 7 | Downtown"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                        {index === 2 && "Vancouver Fire Hall No. 8 | Yaletown"}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}