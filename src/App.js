import '98.css';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Container } from '@mui/system';
import { Window } from './Window';
import { NavWindow } from './NavWindow';
import { VisualizerWindow } from './VisualizerWindow';

function App() {
  let scale = {
    zoom: 2
  }
  return (
    <Container maxWidth={false} disableGutters={true} height={1} width={1}>
      <div style={scale}>
        <Stack direction="row" height={`${100/scale.zoom}vh`} width="100%" spacing={0}>
          <VisualizerWindow/>
          <NavWindow/>
        </Stack>
      </div>
    </Container>
  );
}

export default App;
