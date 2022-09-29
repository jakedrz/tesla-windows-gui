import React from "react";
import { Container } from "@mui/system";
import { TitleBar } from "./TitleBar";


export const Window = ({ title, controls, children, width="300px" }) => {
    let style = {
        width: width
    }
    return (
        <div className="window" style={style}>
            <TitleBar controls={controls}>{title}</TitleBar>
            <WindowBody>
                {children}
            </WindowBody>
        </div>
    )
}

const WindowBody = ({children}) => {
    let divStyle = {
        height: '100%',
        overflow: 'hidden'
    }
    return (
        <div style={divStyle} className="window-body">
            {children}
        </div>
    )
}