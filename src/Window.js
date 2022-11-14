import React from "react";
import styled from "styled-components";
import { TitleBar } from "./TitleBar";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
`
const WindowBody = styled.div`
    flex-grow:1;
    height:100%;
`

export const Window = ({ title, controls, children, className}) => {
    return (
        <Div className={`window ${className}`}>
            <TitleBar controls={controls}>{title}</TitleBar>
            <WindowBody className="window-body">
                {children}
            </WindowBody>
        </Div>
    )
}
