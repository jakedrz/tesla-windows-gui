import React from "react";
import styled from "styled-components";

const Div = styled.div`
    flex-shrink:0;
    flex-grow:0;
`

export const TitleBar = ({ children, controls=[]}) => {
    return <Div className="title-bar">
        <div class="title-bar-text">
            {children}
        </div>
        <Controls controls={controls}/>
    </Div>
};

const Controls = ({ controls }) => {
    let controlButtons = controls.map((x) => {
        return <button aria-label={x}></button>
    });

    return <div class="title-bar-controls">
        {controlButtons}
    </div>
}