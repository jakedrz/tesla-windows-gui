import React from "react";
import { Map, Marker } from "pigeon-maps"

export const MapComponent = () => {
    return (
        <Map height="100%" defaultCenter={[42.31304151737086, -88.09792488800568]} defaultZoom={15}>
            <Marker width={50} anchor={[42.31304151737086, -88.09792488800568]} />
        </Map>
    )
}