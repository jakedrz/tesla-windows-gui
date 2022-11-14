import '98.css';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Container } from '@mui/system';
import { Window } from './Window';
import { MapComponent } from "./MapComponent";
import styled from "styled-components";

const MainScreen = styled.div`
    width:50vw;
    height:50vh;
    background-color: #008080;
    transform-origin: left top;
    transform: scale(2);
    /*padding: 10px;*/
`

const TaskBarStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height:100%;
  width:100%;
`

const WindowArea = styled.div`
  width:100%; 
  display: flex;
  flex-grow:1;
  `
  const StartBarArea = styled.div`
    flex-shrink: 0;
  `

const VisualizerWindow = styled(Window)`
  flex-basis:33%;
`

const NavWindow = styled(Window)`
  flex-basis:67%;  
`


function App() {
  return (
    <MainScreen>
      <TaskBarStack>
        <WindowArea>
          <VisualizerWindow title="Visualizer"/>
          <NavWindow title="Streets98">
          </NavWindow>
        </WindowArea>
        <StartBarArea>
            
        </StartBarArea>
      </TaskBarStack>
    </MainScreen>
  );
}

export default App;
