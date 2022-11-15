import React from "react";
import { Map, Marker } from "pigeon-maps"
import styled from "styled-components";

const Div = styled.div`
    height:100%;
    width:100%;
    border: 1px solid black;
    box-sizing: border-box;
`

export const MapComponent = () => {
    return (
        <Div>
        <Map defaultCenter={[42.31304151737086, -88.09792488800568]} defaultZoom={15}>
            <Marker width={50} anchor={[42.31304151737086, -88.09792488800568]} />
        </Map>
        </Div>
    )
}