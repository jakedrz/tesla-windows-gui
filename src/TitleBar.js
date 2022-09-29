import React from "react";

export const TitleBar = ({ children, controls=[]}) => {
    return <div className="title-bar">
        <div class="title-bar-text">
            {children}
        </div>
        <Controls controls={controls}/>
    </div>
};

const Controls = ({ controls }) => {
    let controlButtons = controls.map((x) => {
        return <button aria-label={x}></button>
    });

    return <div class="title-bar-controls">
        {controlButtons}
    </div>
}