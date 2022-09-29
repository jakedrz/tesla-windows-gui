import '98.css';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Container } from '@mui/system';
import { Window } from './Window';
import { NavWindow } from './NavWindow';
import { VisualizerWindow } from './VisualizerWindow';

function App() {
  return (
    <Container maxWidth={false} disableGutters={true} height={1} width={1}>
      <Stack direction="row" height="100vh" width="100%" spacing={0}>
        <VisualizerWindow/>
        <NavWindow/>
      </Stack>
    </Container>
  );
}

export default App;
