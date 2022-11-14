import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width:100vw;
    height:100vh;
    background-color: #008080;
    /*padding: 10px;*/
`

export const MainScreen = ({ children }) => {
    return (
        <Div>
            {children}
        </Div>
    )
}