import React from "react";
import { Stack } from "@mui/system";
import Box from "@mui/system";
import { Window } from "./Window";
import { MapComponent } from "./MapComponent";


export const NavWindow = () => {
    let pStyle={height: "90%", background: "green"};
    return (
    <Window width="67%" title="Streets98">
        <Stack direction="column" alignItems="stretch" justifyContent="flex-end" spacing={0}>
            <MapComponent style={pStyle}/>
            <p>hi</p>
            <button>hi</button>
        </Stack>
    </Window>
    )
}