import '98.css';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Container } from '@mui/system';
import { Window } from './Window';
import { NavWindow } from './NavWindow';
import { VisualizerWindow } from './VisualizerWindow';
import styled from "styled-components";

const MainScreen = styled.div`
    width:100vw;
    height:100vh;
    background-color: #008080;
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

const Window1 = styled(Window)`
  flex-basis:33%;
`

const Window2 = styled(Window)`
  flex-basis:67%;  
`


function App() {
  return (
    <MainScreen>
      <TaskBarStack>
        <WindowArea>
          <Window1 title="visual"/>
          <Window2 title="nav"/>
        </WindowArea>
        <StartBarArea>
          hiiiiii
        </StartBarArea>
      </TaskBarStack>
    </MainScreen>
  );
}

export default App;
