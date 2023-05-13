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
        [49.26857098520486, -123.06621891805166],
        [49.258942881822755, -123.23799447018341],
        [49.264898292592775, -123.17300699774235],
        [49.278068521794985, -123.04660258707302],
        [49.252849702041736, -123.04076612608142],
        [49.2199233628724, -123.07683120271315],
        [49.237470146792326, -123.13663964528442],
        [49.26259933755884, -123.20592201579599],
        [49.23650887754219, -123.06584822124628],
        [49.23754719452154, -123.17325620086592],
        [49.21748269528255, -123.12953098737236]


        









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
                        {index === 8 && "Vancouver Firehall No. 9"}
                        {index === 9 && "Vancouver Firehall No. 10 | University"}
                        {index === 10 && "Vancouver Fire Hall No. 12 | Kitsilano"}
                        {index === 11 && "Vancouver Fire Hall No. 14 | Hastings Sunrise"}
                        {index === 12 && "Vancouver Fire Hall No. 15 | Renfrew"}
                        {index === 13 && "Vancouver Fire Hall No. 17 | Fraserview"}
                        {index === 14 && "Vancouver Fire Hall No. 18 | Shaugnessy"}
                        {index === 15 && "Vancouver Fire Hall No. 19"}
                        {index === 16 && "Vancouver Fire Hall No. 20 | Victoria"}
                        {index === 17 && "Vancouver Fire Hall No. 21 | Kerrisdale"}
                        {index === 18 && "Vancouver Fire Hall No. 22 | Marpole"}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}